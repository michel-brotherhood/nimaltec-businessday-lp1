import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold">Inscrição confirmada!</h1>
        <p className="text-muted-foreground">
          Obrigado por se inscrever no <strong className="text-foreground">Business Day · Nimal &amp; Zebra 2026</strong>.
          Em instantes você receberá um e-mail de confirmação. Nossa equipe entrará em contato em breve.
        </p>

        <div className="bg-card/60 backdrop-blur-md border border-border rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary shrink-0" />
            30 de junho de 2026
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            12h às 15h
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary shrink-0" />
            Fogo de Chão
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar à página inicial
        </Link>
      </div>
    </main>
  );
};

export default ThankYou;
