import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Loader2, LogOut, Mail, Phone, Building2, User, Briefcase, MessageSquare } from "lucide-react";

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

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [rows, setRows] = useState<Registration[]>([]);
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    document.title = "Inscrições · Nimal Admin";
  }, []);

  useEffect(() => {
    const init = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData.session;
      if (!session) {
        navigate("/auth", { replace: true });
        return;
      }
      setUserEmail(session.user.email ?? "");

      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (!roleData) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }
      setIsAdmin(true);

      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast({ title: "Erro ao carregar", description: error.message, variant: "destructive" });
      } else {
        setRows(data as Registration[]);
      }
      setLoading(false);
    };
    init();
  }, [navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-primary" />
      </main>
    );
  }

  if (!isAdmin) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="max-w-md text-center space-y-4 bg-card border border-border rounded-2xl p-8">
          <h1 className="text-2xl font-bold">Acesso restrito</h1>
          <p className="text-sm text-muted-foreground">
            Sua conta ({userEmail}) ainda não tem permissão de administrador.
            Solicite que um admin atribua a função à sua conta.
          </p>
          <Button onClick={signOut} variant="outline" className="w-full">
            <LogOut className="w-4 h-4" /> Sair
          </Button>
          <Link to="/" className="block text-xs text-muted-foreground hover:text-primary">
            ← Voltar ao site
          </Link>
        </div>
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {rows.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">Nenhuma inscrição ainda.</p>
        ) : (
          <>
            {/* Mobile cards */}
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

            {/* Desktop table */}
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
