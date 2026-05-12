import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { JOB_TITLE_GROUPS } from "@/lib/job-titles";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  company: z.string().trim().min(2, "Informe sua empresa").max(120),
  job_title: z.string().trim().min(2, "Selecione seu cargo").max(120),
  phone: z.string().trim().min(8, "Telefone inválido").max(40),
  message: z.string().trim().max(1000).optional(),
});

type Props = { open: boolean; onOpenChange: (v: boolean) => void };

const RegisterDialog = ({ open, onOpenChange }: Props) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [jobTitle, setJobTitle] = useState<string>("");
  const [customJobTitle, setCustomJobTitle] = useState<string>("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    if (!consent) {
      setErrors({ consent: "É necessário aceitar a Política de Privacidade." });
      return;
    }
    const fd = new FormData(e.currentTarget);
    const finalJobTitle = jobTitle === "Outro" ? customJobTitle.trim() : jobTitle;
    const raw = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      job_title: finalJobTitle,
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || "") || undefined,
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (fieldErrors[i.path[0] as string] = i.message));
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("registrations").insert({
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company,
        job_title: parsed.data.job_title,
        phone: parsed.data.phone,
        message: parsed.data.message ?? null,
      });
      if (error) throw error;

      supabase.functions.invoke("send-registration-email", {
        body: {
          name: parsed.data.name,
          email: parsed.data.email,
          company: parsed.data.company,
          jobTitle: parsed.data.job_title,
          phone: parsed.data.phone,
          message: parsed.data.message,
        },
      });

      toast({
        title: "Inscrição enviada!",
        description: "Em breve nossa equipe entrará em contato.",
      });
      onOpenChange(false);
      (e.target as HTMLFormElement).reset();
      setJobTitle("");
      setCustomJobTitle("");
      setConsent(false);
      navigate("/obrigado");
    } catch (err) {
      console.error(err);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl">Faça sua inscrição</DialogTitle>
          <DialogDescription>
            Business Day · Nimal &amp; Zebra 2026 · 30/06/2026
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Nome*</Label>
              <Input id="name" name="name" required maxLength={100} />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">E-mail*</Label>
              <Input id="email" name="email" type="email" required maxLength={255} />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="company">Empresa*</Label>
              <Input id="company" name="company" required maxLength={120} />
              {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="job_title">Cargo*</Label>
              <Select value={jobTitle} onValueChange={setJobTitle}>
                <SelectTrigger id="job_title">
                  <SelectValue placeholder="Selecione seu cargo" />
                </SelectTrigger>
                <SelectContent className="max-h-72">
                  {JOB_TITLE_GROUPS.map((group) => (
                    <SelectGroup key={group.label}>
                      <SelectLabel>{group.label}</SelectLabel>
                      {group.options.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
              {jobTitle === "Outro" && (
                <Input
                  className="mt-2"
                  placeholder="Digite seu cargo"
                  value={customJobTitle}
                  onChange={(e) => setCustomJobTitle(e.target.value)}
                  maxLength={120}
                />
              )}
              {errors.job_title && <p className="text-xs text-destructive">{errors.job_title}</p>}
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="phone">Telefone*</Label>
              <Input id="phone" name="phone" type="tel" required maxLength={40} placeholder="(21) 99999-0000" />
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div className="space-y-1.5 sm:col-span-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" name="message" rows={3} maxLength={1000} placeholder="Conte-nos brevemente seu interesse (opcional)" />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="consent"
              checked={consent}
              onCheckedChange={(v) => setConsent(v === true)}
              className="mt-0.5"
            />
            <Label htmlFor="consent" className="text-xs text-muted-foreground font-normal leading-snug cursor-pointer">
              Li e aceito a{" "}
              <Link
                to="/privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Política de Privacidade
              </Link>{" "}
              e autorizo o uso dos meus dados para esta inscrição.
            </Label>
          </div>
          {errors.consent && <p className="text-xs text-destructive -mt-2">{errors.consent}</p>}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-[0_0_20px_rgba(204,255,0,0.35)]"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {loading ? "Enviando..." : "Enviar inscrição"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterDialog;
