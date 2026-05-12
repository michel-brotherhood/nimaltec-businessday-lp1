// Sends confirmation email to attendee with CC to atendimento@nimaltecnologia.com.br
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface Payload {
  name: string;
  email: string;
  company: string;
  jobTitle: string;
  phone: string;
  message?: string;
}

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const body = (await req.json()) as Payload;
    const { name, email, company, jobTitle, phone, message } = body;
    if (!name || !email || !company || !jobTitle || !phone) {
      return new Response(JSON.stringify({ error: "Campos obrigatórios faltando" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background:#0a0a0a; color:#fff; padding:24px; border-radius:12px;">
        <h1 style="color:#CCFF00;">Inscrição confirmada</h1>
        <p>Olá <strong>${escape(name)}</strong>,</p>
        <p>Recebemos sua inscrição no <strong>Business Day · Nimal &amp; Zebra 2026</strong>.</p>
        <ul style="line-height:1.8;">
          <li><strong>Data:</strong> 30 de Junho de 2026</li>
          <li><strong>Horário:</strong> 12h às 15h</li>
          <li><strong>Local:</strong> Restaurante Fogo de Chão · Botafogo, RJ</li>
        </ul>
        <p>Em breve nossa equipe entrará em contato para confirmar sua presença.</p>
        <hr style="border:none;border-top:1px solid #333;margin:24px 0;" />
        <h3 style="color:#CCFF00;">Dados enviados</h3>
        <p>
          <strong>Nome:</strong> ${escape(name)}<br/>
          <strong>E-mail:</strong> ${escape(email)}<br/>
          <strong>Empresa:</strong> ${escape(company)}<br/>
          <strong>Cargo:</strong> ${escape(jobTitle)}<br/>
          <strong>Telefone:</strong> ${escape(phone)}<br/>
          ${message ? `<strong>Mensagem:</strong> ${escape(message)}` : ""}
        </p>
        <p style="color:#888;font-size:12px;margin-top:24px;">Nimal Tecnologia · atendimento@nimaltecnologia.com.br</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Nimal Tecnologia <onboarding@resend.dev>",
        to: [email],
        cc: ["atendimento@nimaltecnologia.com.br"],
        subject: "Inscrição confirmada · Business Day Nimal & Zebra 2026",
        html,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Resend error", data);
      return new Response(JSON.stringify({ error: data }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-registration-email error", err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
