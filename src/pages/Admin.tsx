import { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Loader2, LogOut, Mail, Phone, Building2, Briefcase, MessageSquare, Shield, UserPlus, Trash2, Users, CalendarDays, Download, ArrowLeft } from "lucide-react";
import nimalLogo from "@/assets/nimal-logo.png";

type Registration = {
  id: string;
  name: string;
  email: string;
  company: string;
  job_title: string;
  phone: string;
  message: string | null;
  created_at: string;
};

type AdminUser = { user_id: string; email: string; created_at: string };

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Registration[]>([]);
  const [admins, setAdmins] = useState<AdminUser[]>([]);
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [promoting, setPromoting] = useState(false);
  const [userId, setUserId] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    document.title = "Inscrições · Nimal Admin";
  }, []);

  const callClaim = useCallback(async (body: Record<string, unknown>) => {
    const { data, error } = await supabase.functions.invoke("claim-admin", { body });
    if (error) throw new Error(error.message);
    if (data?.error) throw new Error(data.error);
    return data;
  }, []);

  const loadAll = useCallback(async () => {
    const { data: sessionData } = await supabase.auth.getSession();
    const session = sessionData.session;
    if (!session) {
      navigate("/auth", { replace: true });
      return;
    }
    setUserId(session.user.id);
    setUserEmail(session.user.email ?? "");

    try {
      const status = await callClaim({ action: "status" });
      if (!status?.iAmAdmin) {
        navigate("/auth", { replace: true });
        return;
      }
      const [{ data: regs, error: regErr }, listRes] = await Promise.all([
        supabase.from("registrations").select("*").order("created_at", { ascending: false }),
        callClaim({ action: "list" }),
      ]);
      if (regErr) toast({ title: "Erro ao carregar inscrições", description: regErr.message, variant: "destructive" });
      else setRows((regs ?? []) as Registration[]);
      setAdmins(listRes.admins ?? []);
    } catch (e) {
      toast({ title: "Erro", description: (e as Error).message, variant: "destructive" });
      navigate("/auth", { replace: true });
    } finally {
      setLoading(false);
    }
  }, [callClaim, navigate]);

  useEffect(() => { loadAll(); }, [loadAll]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  const promote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAdminEmail.trim()) return;
    setPromoting(true);
    try {
      await callClaim({ action: "promote", email: newAdminEmail.trim() });
      toast({ title: "Admin promovido", description: newAdminEmail });
      setNewAdminEmail("");
      const listRes = await callClaim({ action: "list" });
      setAdmins(listRes.admins ?? []);
    } catch (e) {
      toast({ title: "Erro", description: (e as Error).message, variant: "destructive" });
    } finally {
      setPromoting(false);
    }
  };

  const revoke = async (uid: string) => {
    if (!confirm("Remover acesso de admin?")) return;
    try {
      await callClaim({ action: "revoke", user_id: uid });
      const listRes = await callClaim({ action: "list" });
      setAdmins(listRes.admins ?? []);
    } catch (e) {
      toast({ title: "Erro", description: (e as Error).message, variant: "destructive" });
    }
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </main>
    );
  }

  const exportCSV = () => {
    const headers = ["Data", "Nome", "Email", "Empresa", "Cargo", "Telefone", "Mensagem"];
    const escape = (v: string) => `"${(v ?? "").replace(/"/g, '""')}"`;
    const lines = [
      headers.join(","),
      ...rows.map((r) =>
        [
          new Date(r.created_at).toLocaleString("pt-BR"),
          r.name,
          r.email,
          r.company,
          r.job_title,
          r.phone,
          r.message ?? "",
        ].map(escape).join(","),
      ),
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `inscricoes-business-day-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="relative min-h-screen bg-background">
      {/* Branded ambient background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-primary/5 blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[520px] h-[520px] rounded-full bg-accent/5 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <header className="relative z-10 border-b border-border/60 bg-card/40 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <img src={nimalLogo} alt="Nimal" className="h-7 sm:h-8 object-contain shrink-0" />
            <div className="w-px h-6 bg-border hidden sm:block" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.22em] text-primary font-semibold">Painel Admin</p>
              <h1 className="text-sm sm:text-base font-bold truncate">Business Day · Nimal &amp; Zebra 2026</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors px-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Site
            </Link>
            <Button onClick={signOut} variant="outline" size="sm">
              <LogOut className="w-4 h-4" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Stat strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-card/70 backdrop-blur-sm border border-border/60 rounded-xl p-4 hover:border-primary/40 transition-colors">
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Inscrições</p>
              <Users className="w-4 h-4 text-primary" />
            </div>
            <p className="text-3xl font-bold mt-2 text-primary drop-shadow-[0_0_15px_rgba(204,255,0,0.35)]">{rows.length}</p>
          </div>
          <div className="bg-card/70 backdrop-blur-sm border border-border/60 rounded-xl p-4 hover:border-primary/40 transition-colors">
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Admins ativos</p>
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <p className="text-3xl font-bold mt-2">{admins.length}</p>
          </div>
          <div className="bg-card/70 backdrop-blur-sm border border-border/60 rounded-xl p-4 hover:border-primary/40 transition-colors">
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Evento</p>
              <CalendarDays className="w-4 h-4 text-primary" />
            </div>
            <p className="text-base font-bold mt-2">30 · Junho · 2026</p>
            <p className="text-xs text-muted-foreground">12h às 15h · Fogo de Chão</p>
          </div>
        </div>

        {/* Manage admins */}
        <div className="bg-card/70 backdrop-blur-sm border border-border/60 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <h2 className="font-semibold">Gerenciar admins</h2>
            </div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{userEmail}</p>
          </div>
          <form onSubmit={promote} className="flex flex-col sm:flex-row gap-2 mb-3">
            <Input
              type="email"
              placeholder="email@empresa.com"
              value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
              required
              className="bg-background/50 h-11"
            />
            <Button type="submit" disabled={promoting} className="h-11 sm:w-auto">
              {promoting ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
              Promover
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mb-4">
            O usuário precisa primeiro criar conta em{" "}
            <Link to="/auth" className="text-primary hover:underline">/auth</Link>.
          </p>
          <ul className="divide-y divide-border/60 border border-border/60 rounded-lg overflow-hidden">
            {admins.map((a) => (
              <li key={a.user_id} className="flex items-center justify-between px-4 py-2.5 text-sm bg-background/30">
                <span className="flex items-center gap-2 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(204,255,0,0.7)]" />
                  <span className="truncate">{a.email}</span>
                  {a.user_id === userId && (
                    <span className="text-[10px] uppercase tracking-wider text-primary/80 ml-1">você</span>
                  )}
                </span>
                {a.user_id !== userId && (
                  <Button onClick={() => revoke(a.user_id)} size="sm" variant="ghost" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Registrations */}
        <div className="bg-card/70 backdrop-blur-sm border border-border/60 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center justify-between mb-5 gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <h2 className="font-semibold">Inscrições</h2>
              <span className="text-xs text-muted-foreground">({rows.length})</span>
            </div>
            {rows.length > 0 && (
              <Button onClick={exportCSV} variant="outline" size="sm">
                <Download className="w-3.5 h-3.5" /> Exportar CSV
              </Button>
            )}
          </div>

          {rows.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-border/60 rounded-xl">
              <Users className="w-8 h-8 mx-auto text-muted-foreground/40 mb-2" />
              <p className="text-sm text-muted-foreground">Nenhuma inscrição ainda.</p>
            </div>
          ) : (
            <>
              {/* Mobile cards */}
              <div className="grid gap-3 sm:hidden">
                {rows.map((r) => (
                  <article key={r.id} className="bg-background/40 border border-border/60 rounded-xl p-4 space-y-2 hover:border-primary/40 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground">{r.name}</h3>
                      <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                        {new Date(r.created_at).toLocaleDateString("pt-BR")}
                      </span>
                    </div>
                    <p className="text-sm flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">{r.email}</span></p>
                    <p className="text-sm flex items-center gap-2"><Building2 className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">{r.company}</span></p>
                    <p className="text-sm flex items-center gap-2"><Briefcase className="w-3.5 h-3.5 text-primary shrink-0" /> <span className="truncate">{r.job_title}</span></p>
                    <p className="text-sm flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-primary shrink-0" /> {r.phone}</p>
                    {r.message && (
                      <p className="text-sm text-muted-foreground flex gap-2 pt-1 border-t border-border/40">
                        <MessageSquare className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" /> {r.message}
                      </p>
                    )}
                  </article>
                ))}
              </div>

              {/* Desktop table */}
              <div className="hidden sm:block overflow-x-auto border border-border/60 rounded-xl">
                <table className="w-full text-sm">
                  <thead className="bg-secondary/40 text-left text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    <tr>
                      <th className="px-4 py-3 font-medium">Data</th>
                      <th className="px-4 py-3 font-medium">Nome</th>
                      <th className="px-4 py-3 font-medium">E-mail</th>
                      <th className="px-4 py-3 font-medium">Empresa</th>
                      <th className="px-4 py-3 font-medium">Cargo</th>
                      <th className="px-4 py-3 font-medium">Telefone</th>
                      <th className="px-4 py-3 font-medium">Mensagem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {rows.map((r) => (
                      <tr key={r.id} className="hover:bg-primary/5 transition-colors">
                        <td className="px-4 py-3 whitespace-nowrap text-muted-foreground text-xs">
                          {new Date(r.created_at).toLocaleString("pt-BR")}
                        </td>
                        <td className="px-4 py-3 font-medium">{r.name}</td>
                        <td className="px-4 py-3"><a href={`mailto:${r.email}`} className="text-primary hover:underline">{r.email}</a></td>
                        <td className="px-4 py-3">{r.company}</td>
                        <td className="px-4 py-3">{r.job_title}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{r.phone}</td>
                        <td className="px-4 py-3 max-w-xs truncate text-muted-foreground" title={r.message ?? ""}>{r.message ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Admin;
