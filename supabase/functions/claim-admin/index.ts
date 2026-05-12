import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const ANON = Deno.env.get("SUPABASE_ANON_KEY")!;

    const authHeader = req.headers.get("Authorization") ?? "";
    if (!authHeader) return json({ error: "Não autenticado" }, 401);

    const userClient = createClient(SUPABASE_URL, ANON, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData.user) return json({ error: "Sessão inválida" }, 401);
    const me = userData.user;

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE);

    const body = req.method === "POST" ? await req.json().catch(() => ({})) : {};
    const action = body.action ?? "claim";

    // Count current admins
    const { count } = await admin
      .from("user_roles")
      .select("*", { count: "exact", head: true })
      .eq("role", "admin");
    const adminCount = count ?? 0;

    // Is current user admin?
    const { data: myRole } = await admin
      .from("user_roles")
      .select("id")
      .eq("user_id", me.id)
      .eq("role", "admin")
      .maybeSingle();
    const iAmAdmin = !!myRole;

    if (action === "status") {
      return json({ adminCount, iAmAdmin, canBootstrap: adminCount === 0 });
    }

    if (action === "claim") {
      // Bootstrap: only if no admins exist yet
      if (adminCount > 0) return json({ error: "Já existe admin no sistema" }, 403);
      const { error } = await admin
        .from("user_roles")
        .insert({ user_id: me.id, role: "admin" });
      if (error) return json({ error: error.message }, 400);
      return json({ ok: true, message: "Você é o primeiro admin." });
    }

    // All actions below require existing admin
    if (!iAmAdmin) return json({ error: "Apenas admins podem executar essa ação" }, 403);

    if (action === "list") {
      const { data: roles } = await admin
        .from("user_roles")
        .select("user_id, created_at")
        .eq("role", "admin");
      const ids = (roles ?? []).map((r: any) => r.user_id);
      const { data: usersList } = await admin.auth.admin.listUsers({ perPage: 1000 });
      const map = new Map(usersList.users.map((u) => [u.id, u.email]));
      return json({
        admins: (roles ?? []).map((r: any) => ({
          user_id: r.user_id,
          email: map.get(r.user_id) ?? "—",
          created_at: r.created_at,
        })),
      });
    }

    if (action === "promote") {
      const email = String(body.email ?? "").trim().toLowerCase();
      if (!email) return json({ error: "E-mail obrigatório" }, 400);
      const { data: usersList } = await admin.auth.admin.listUsers({ perPage: 1000 });
      const target = usersList.users.find((u) => u.email?.toLowerCase() === email);
      if (!target) return json({ error: "Usuário não encontrado. Peça que ele crie conta em /auth primeiro." }, 404);
      const { error } = await admin
        .from("user_roles")
        .insert({ user_id: target.id, role: "admin" });
      if (error && !error.message.includes("duplicate")) return json({ error: error.message }, 400);
      return json({ ok: true });
    }

    if (action === "revoke") {
      const userId = String(body.user_id ?? "");
      if (!userId) return json({ error: "user_id obrigatório" }, 400);
      if (userId === me.id) return json({ error: "Você não pode remover a si mesmo" }, 400);
      const { error } = await admin
        .from("user_roles")
        .delete()
        .eq("user_id", userId)
        .eq("role", "admin");
      if (error) return json({ error: error.message }, 400);
      return json({ ok: true });
    }

    return json({ error: "Ação desconhecida" }, 400);
  } catch (e) {
    return json({ error: (e as Error).message }, 500);
  }
});
