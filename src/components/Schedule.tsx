import { Clock } from "lucide-react";

const items = [
  { time: "12h00", title: "Credenciamento & Welcome Drink", desc: "Recepção dos convidados e networking inicial." },
  { time: "12h30", title: "Almoço de Boas-vindas", desc: "Rodízio Fogo de Chão com mesa executiva." },
  { time: "13h15", title: "Abertura · Nimal & Zebra", desc: "Visão estratégica: IA aplicada à operação." },
  { time: "13h45", title: "Painel Técnico: Do MC33 ao MC34", desc: "A nova base de hardware para a camada de IA em logística e supply chain." },
  { time: "14h15", title: "Casos de Uso & Demonstrações", desc: "RFID, coletores e automação transformando dados em decisões." },
  { time: "14h45", title: "Q&A e Networking de Encerramento", desc: "Conexões diretas com os times Nimal e Zebra." },
];

const Schedule = () => (
  <section className="relative z-10 px-4 py-16 sm:py-20">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-primary font-semibold text-xs sm:text-sm mb-3 tracking-[0.2em] uppercase">
          Agenda do dia
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] [text-wrap:balance]">
          <span className="text-foreground">Programação · </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Business Day
          </span>
        </h2>
      </div>

      <ol className="relative border-l border-border/60 pl-6 sm:pl-8 space-y-6">
        {items.map((it) => (
          <li key={it.time} className="relative">
            <span className="absolute -left-[34px] sm:-left-[42px] top-1 w-8 h-8 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
              <Clock className="w-4 h-4 text-primary" />
            </span>
            <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-5 sm:p-6 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-primary font-bold text-lg sm:text-xl">{it.time}</span>
                <h3 className="text-base sm:text-lg font-semibold text-foreground">{it.title}</h3>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Schedule;
