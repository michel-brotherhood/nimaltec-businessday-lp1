import { Link } from "react-router-dom";
import { CheckCircle2, ArrowLeft, Calendar, Clock, MapPin, Download } from "lucide-react";

const EVENT = {
  title: "Business Day · Nimal & Zebra 2026",
  description:
    "IA aplicada à operação — logística, indústria e supply chain. Realização: Nimal Tecnologia & Zebra.",
  location: "Restaurante Fogo de Chão · Botafogo, Rio de Janeiro",
  // 30/06/2026 12:00 → 15:00 (America/Sao_Paulo = UTC-3 → 15:00–18:00 UTC)
  startUtc: "20260630T150000Z",
  endUtc: "20260630T180000Z",
};

const googleCalendarUrl = () => {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT.title,
    dates: `${EVENT.startUtc}/${EVENT.endUtc}`,
    details: EVENT.description,
    location: EVENT.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

const outlookCalendarUrl = () => {
  // Outlook expects ISO with timezone
  const toIso = (s: string) =>
    `${s.slice(0, 4)}-${s.slice(4, 6)}-${s.slice(6, 8)}T${s.slice(9, 11)}:${s.slice(11, 13)}:${s.slice(13, 15)}+00:00`;
  const params = new URLSearchParams({
    path: "/calendar/action/compose",
    rru: "addevent",
    startdt: toIso(EVENT.startUtc),
    enddt: toIso(EVENT.endUtc),
    subject: EVENT.title,
    body: EVENT.description,
    location: EVENT.location,
  });
  return `https://outlook.live.com/calendar/0/deeplink/compose?${params.toString()}`;
};

const downloadIcs = () => {
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nimal Tecnologia//Business Day 2026//PT-BR",
    "BEGIN:VEVENT",
    `UID:business-day-2026@nimaltecnologia.com.br`,
    `DTSTAMP:${EVENT.startUtc}`,
    `DTSTART:${EVENT.startUtc}`,
    `DTEND:${EVENT.endUtc}`,
    `SUMMARY:${EVENT.title}`,
    `DESCRIPTION:${EVENT.description}`,
    `LOCATION:${EVENT.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "business-day-nimal-zebra-2026.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const ThankYou = () => {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30">
          <CheckCircle2 className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold">Inscrição confirmada!</h1>
        <p className="text-muted-foreground">
          Obrigado por se inscrever no{" "}
          <strong className="text-foreground">Business Day · Nimal &amp; Zebra 2026</strong>. Em
          instantes você receberá um e-mail de confirmação. Nossa equipe entrará em contato em
          breve.
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

        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Adicione à sua agenda</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border bg-card hover:bg-card/70 hover:border-primary/60 transition text-sm font-medium"
            >
              <Calendar className="w-4 h-4 text-primary" />
              Google Agenda
            </a>
            <a
              href={outlookCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border bg-card hover:bg-card/70 hover:border-primary/60 transition text-sm font-medium"
            >
              <Calendar className="w-4 h-4 text-primary" />
              Outlook
            </a>
            <button
              type="button"
              onClick={downloadIcs}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-border bg-card hover:bg-card/70 hover:border-primary/60 transition text-sm font-medium"
            >
              <Download className="w-4 h-4 text-primary" />
              .ics (Apple/outros)
            </button>
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
