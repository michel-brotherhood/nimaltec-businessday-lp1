import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { Loader2, Shield, LogOut, ArrowLeft, Sparkles } from "lucide-react";
import nimalLogo from "@/assets/nimal-logo.png";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [canBootstrap, setCanBootstrap] = useState(false);
  const [bootstrapping, setBootstrapping] = useState(false);
  const [remember, setRemember] = useState(true);

  const checkAccess = async () => {
    setChecking(true);
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      setSessionEmail(null);
      setCanBootstrap(false);
      setChecking(false);
      return;
    }
    setSessionEmail(data.session.user.email ?? "");
    try {
      const { data: status, error } = await supabase.functions.invoke("claim-admin", {
        body: { action: "status" },
      });
      if (error) throw new Error(error.message);
      if (status?.iAmAdmin) {
        navigate("/admin", { replace: true });
        return;
      }
      setCanBootstrap(!!status?.canBootstrap);
    } catch (e) {
      toast({ title: "Erro", description: (e as Error).message, variant: "destructive" });
    } finally {
      setChecking(false);
    }
  };

  useEffect(() => {
    document.title = "Acesso administrativo · Nimal";
    checkAccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email"));
    const password = String(fd.get("password"));
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/auth` },
        });
        if (error) throw error;
        toast({ title: "Conta criada", description: "Você já pode entrar." });
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        if (remember) {
          sessionStorage.removeItem("nimal:ephemeral");
        } else {
          sessionStorage.setItem("nimal:ephemeral", "1");
        }
        await checkAccess();
      }
    } catch (err) {
      toast({ title: "Erro", description: (err as Error).message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const claimFirstAdmin = async () => {
    setBootstrapping(true);
    try {
      const { data, error } = await supabase.functions.invoke("claim-admin", {
        body: { action: "claim" },
      });
      if (error) throw new Error(error.message);
      if (data?.error) throw new Error(data.error);
      toast({ title: "Pronto!", description: "Você é o primeiro admin." });
      navigate("/admin", { replace: true });
    } catch (e) {
      toast({ title: "Erro", description: (e as Error).message, variant: "destructive" });
    } finally {
      setBootstrapping(false);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setSessionEmail(null);
    setCanBootstrap(false);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 py-12 bg-background overflow-hidden">
      {/* Branded background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-accent/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Voltar ao site
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <img src={nimalLogo} alt="Nimal Tecnologia" className="h-8 object-contain" />
          <div className="w-px h-6 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">
            Painel Admin
          </span>
        </div>

        <div className="relative bg-card/70 backdrop-blur-xl border border-border/60 rounded-2xl p-7 sm:p-8 shadow-[0_0_60px_-15px_rgba(204,255,0,0.15)]">
          {checking ? (
            <div className="flex justify-center py-10">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
            </div>
          ) : sessionEmail ? (
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Acesso restrito</h1>
              <p className="text-sm text-muted-foreground">
                Conta <span className="text-foreground">{sessionEmail}</span> sem permissão de administrador.
              </p>
              {canBootstrap ? (
                <>
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-3 text-xs text-foreground">
                    <Sparkles className="w-3.5 h-3.5 inline mr-1 text-primary" />
                    Nenhum admin configurado. Você pode se tornar o primeiro.
                  </div>
                  <Button onClick={claimFirstAdmin} disabled={bootstrapping} className="w-full">
                    {bootstrapping && <Loader2 className="w-4 h-4 animate-spin" />}
                    Tornar-me o primeiro admin
                  </Button>
                </>
              ) : (
                <p className="text-xs text-muted-foreground">
                  Solicite a um admin que atribua a função à sua conta.
                </p>
              )}
              <Button onClick={signOut} variant="outline" className="w-full">
                <LogOut className="w-4 h-4" /> Sair
              </Button>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold tracking-tight mb-1.5">Área administrativa</h1>
              <p className="text-sm text-muted-foreground mb-6">
                {mode === "signin"
                  ? "Entre para gerenciar as inscrições do Business Day."
                  : "Crie sua conta de acesso administrativo."}
              </p>
              <form onSubmit={handle} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="bg-background/50 h-11"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="password" className="text-xs uppercase tracking-wider text-muted-foreground">
                    Senha
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={6}
                    autoComplete={mode === "signin" ? "current-password" : "new-password"}
                    className="bg-background/50 h-11"
                  />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Checkbox
                    id="remember"
                    checked={remember}
                    onCheckedChange={(v) => setRemember(v === true)}
                  />
                  <Label htmlFor="remember" className="text-xs text-muted-foreground cursor-pointer select-none">
                    Lembrar de mim neste dispositivo
                  </Label>
                </div>
                <Button type="submit" disabled={loading} className="w-full h-11 font-semibold">
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {mode === "signin" ? "Entrar" : "Criar conta"}
                </Button>
              </form>
              <button
                type="button"
                onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
                className="mt-5 text-xs text-muted-foreground hover:text-primary transition-colors w-full text-center"
              >
                {mode === "signin" ? "Não tem conta? Criar" : "Já tem conta? Entrar"}
              </button>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
          Business Day · Nimal &amp; Zebra · 2026
        </p>
      </div>
    </main>
  );
};

export default Auth;
