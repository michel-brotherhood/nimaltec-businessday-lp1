import { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Loader2, LogOut, Mail, Phone, Building2, Briefcase, MessageSquare, Shield, UserPlus, Trash2 } from "lucide-react";

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

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/40 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-lg sm:text-xl font-bold">Inscrições · Business Day 2026</h1>
            <p className="text-xs text-muted-foreground">{rows.length} {rows.length === 1 ? "inscrição" : "inscrições"} · {userEmail}</p>
          </div>
          <Button onClick={signOut} variant="outline" size="sm">
            <LogOut className="w-4 h-4" /> Sair
          </Button>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        {/* Manage admins */}
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <h2 className="font-semibold">Gerenciar admins</h2>
          </div>
          <form onSubmit={promote} className="flex flex-col sm:flex-row gap-2 mb-4">
            <Input
              type="email"
              placeholder="email@empresa.com"
              value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
              required
            />
            <Button type="submit" disabled={promoting}>
              {promoting ? <Loader2 className="w-4 h-4 animate-spin" /> : <UserPlus className="w-4 h-4" />}
              Promover a admin
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mb-3">
            O usuário precisa primeiro criar conta em <Link to="/auth" className="text-primary hover:underline">/auth</Link>.
          </p>
          <ul className="divide-y divide-border">
            {admins.map((a) => (
              <li key={a.user_id} className="flex items-center justify-between py-2 text-sm">
                <span>{a.email} {a.user_id === userId && <span className="text-xs text-muted-foreground">(você)</span>}</span>
                {a.user_id !== userId && (
                  <Button onClick={() => revoke(a.user_id)} size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Registrations */}
        {rows.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">Nenhuma inscrição ainda.</p>
        ) : (
          <>
            <div className="grid gap-4 sm:hidden">
              {rows.map((r) => (
                <article key={r.id} className="bg-card border border-border rounded-xl p-4 space-y-2">
                  <h2 className="font-semibold text-foreground">{r.name}</h2>
                  <p className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleString("pt-BR")}</p>
                  <p className="text-sm flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-primary" /> {r.email}</p>
                  <p className="text-sm flex items-center gap-2"><Building2 className="w-3.5 h-3.5 text-primary" /> {r.company}</p>
                  <p className="text-sm flex items-center gap-2"><Briefcase className="w-3.5 h-3.5 text-primary" /> {r.job_title}</p>
                  <p className="text-sm flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-primary" /> {r.phone}</p>
                  {r.message && <p className="text-sm text-muted-foreground flex gap-2"><MessageSquare className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" /> {r.message}</p>}
                </article>
              ))}
            </div>

            <div className="hidden sm:block overflow-x-auto bg-card border border-border rounded-xl">
              <table className="w-full text-sm">
                <thead className="bg-secondary/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Data</th>
                    <th className="px-4 py-3">Nome</th>
                    <th className="px-4 py-3">E-mail</th>
                    <th className="px-4 py-3">Empresa</th>
                    <th className="px-4 py-3">Cargo</th>
                    <th className="px-4 py-3">Telefone</th>
                    <th className="px-4 py-3">Mensagem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {rows.map((r) => (
                    <tr key={r.id} className="hover:bg-secondary/20">
                      <td className="px-4 py-3 whitespace-nowrap text-muted-foreground text-xs">
                        {new Date(r.created_at).toLocaleString("pt-BR")}
                      </td>
                      <td className="px-4 py-3 font-medium">{r.name}</td>
                      <td className="px-4 py-3"><a href={`mailto:${r.email}`} className="text-primary hover:underline">{r.email}</a></td>
                      <td className="px-4 py-3">{r.company}</td>
                      <td className="px-4 py-3">{r.job_title}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{r.phone}</td>
                      <td className="px-4 py-3 max-w-xs truncate" title={r.message ?? ""}>{r.message ?? "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </main>
  );
};

export default Admin;
