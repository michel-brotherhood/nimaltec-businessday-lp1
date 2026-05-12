import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Loader2, Shield, LogOut } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [canBootstrap, setCanBootstrap] = useState(false);
  const [bootstrapping, setBootstrapping] = useState(false);

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

  if (checking) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </main>
    );
  }

  // Logged in but not admin
  if (sessionEmail) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 text-center space-y-4">
          <Shield className="w-10 h-10 mx-auto text-primary" />
          <h1 className="text-2xl font-bold">Acesso restrito</h1>
          <p className="text-sm text-muted-foreground">
            Sua conta ({sessionEmail}) não tem permissão de administrador.
          </p>
          {canBootstrap ? (
            <>
              <p className="text-sm text-foreground">
                Nenhum admin foi configurado ainda. Você pode se tornar o primeiro.
              </p>
              <Button onClick={claimFirstAdmin} disabled={bootstrapping} className="w-full">
                {bootstrapping && <Loader2 className="w-4 h-4 animate-spin" />}
                Tornar-me o primeiro admin
              </Button>
            </>
          ) : (
            <p className="text-xs text-muted-foreground">Solicite que um admin atribua a função à sua conta.</p>
          )}
          <Button onClick={signOut} variant="outline" className="w-full">
            <LogOut className="w-4 h-4" /> Sair
          </Button>
          <Link to="/" className="block text-xs text-muted-foreground hover:text-primary">← Voltar ao site</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8">
        <h1 className="text-2xl font-bold mb-2">Área administrativa</h1>
        <p className="text-sm text-muted-foreground mb-6">
          {mode === "signin" ? "Entre para ver as inscrições." : "Crie sua conta de acesso."}
        </p>
        <form onSubmit={handle} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" name="password" type="password" required minLength={6} autoComplete={mode === "signin" ? "current-password" : "new-password"} />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {mode === "signin" ? "Entrar" : "Criar conta"}
          </Button>
        </form>
        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-4 text-xs text-muted-foreground hover:text-foreground w-full text-center"
        >
          {mode === "signin" ? "Não tem conta? Criar" : "Já tem conta? Entrar"}
        </button>
        <Link to="/" className="block mt-6 text-xs text-center text-muted-foreground hover:text-primary">← Voltar ao site</Link>
      </div>
    </main>
  );
};

export default Auth;
