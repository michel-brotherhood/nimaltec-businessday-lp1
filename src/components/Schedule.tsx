import { Clock } from "lucide-react";

const items = [
  { time: "12h00", title: "Credenciamento & Welcome Drink", desc: "Recepção dos convidados e networking inicial." },
  { time: "12h30", title: "Almoço de Boas-vindas", desc: "Rodízio Fogo de Chão com mesa executiva." },
  { time: "13h15", title: "Abertura · Nimal & Zebra", desc: "Visão estratégica: IA aplicada à operação." },
  { time: "13h45", title: "Novidades Zebra 2026", desc: "Apresentação do ecossistema completo de dispositivos com IA aplicada à operação." },
  { time: "14h15", title: "Casos de Uso & Demonstrações", desc: "RFID, coletores e automação transformando dados em decisões." },
  { time: "14h45", title: "Q&A e Networking de Encerramento", desc: "Conexões diretas com os times Nimal e Zebra." },
];

const Schedule = () => (
  <section className="relative z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <p className="text-primary font-semibold text-xs sm:text-sm md:text-base mb-3 tracking-[0.2em] uppercase">
          Agenda do dia
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] [text-wrap:balance]">
          <span className="text-foreground">Programação · </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Business Day
          </span>
        </h2>
      </div>

      <ol className="relative border-l border-border/60 pl-6 sm:pl-8 md:pl-10 space-y-6 md:space-y-8">
        {items.map((it) => (
          <li key={it.time} className="relative">
            <span className="absolute -left-[34px] sm:-left-[42px] md:-left-[50px] top-1 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
              <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </span>
            <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-5 sm:p-6 md:p-7 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(204,255,0,0.15)] transition-all">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="text-primary font-bold text-lg sm:text-xl md:text-2xl">{it.time}</span>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">{it.title}</h3>
              </div>
              <p className="text-sm sm:text-base md:text-[17px] text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Schedule;
