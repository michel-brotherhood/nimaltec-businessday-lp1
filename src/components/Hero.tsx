import nimalLogo from "@/assets/nimal-logo.png";
import zebraLogo from "@/assets/zebra-logo.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cornerCards = [
  {
    label: "Data",
    value: "30 · Junho · 2026",
    sub: "Business Day",
    pos: "top-3 left-3 sm:top-6 sm:left-6",
  },
  {
    label: "Horário",
    value: "12h às 15h",
    sub: "Almoço executivo",
    pos: "top-3 right-3 sm:top-6 sm:right-6",
  },
  {
    label: "Local",
    value: "Fogo de Chão",
    sub: "Botafogo · RJ",
    pos: "bottom-20 left-3 sm:bottom-6 sm:left-6",
  },
  {
    label: "Acesso",
    value: "Por convite",
    sub: "Vagas limitadas",
    pos: "bottom-20 right-3 sm:bottom-6 sm:right-6",
  },
];

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft top/bottom gradient for legibility of corner cards */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />

      {/* Floating corner cards (desktop only) */}
      {cornerCards.map((c) => (
        <div
          key={c.label}
          className={`hidden lg:block absolute ${c.pos} z-20 max-w-[240px] bg-card/70 backdrop-blur-md border border-border/60 rounded-xl px-4 py-3 hover:border-primary/60 transition-colors`}
        >
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-1">
            {c.label}
          </p>
          <p className="text-sm font-semibold text-foreground leading-tight">
            {c.value}
          </p>
          <p className="text-[11px] text-muted-foreground mt-1">{c.sub}</p>
        </div>
      ))}

      {/* Center content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-primary font-semibold text-xs sm:text-sm mb-6 tracking-[0.25em] uppercase drop-shadow-[0_0_10px_rgba(204,255,0,0.6)]">
          Business Day · Nimal &amp; Zebra
        </p>

        <div className="flex items-center justify-center gap-6 sm:gap-8 mb-8 flex-wrap">
          <img src={nimalLogo} alt="Nimal Tecnologia" className="h-10 sm:h-12 md:h-14 object-contain" />
          <div className="w-px h-10 sm:h-12 bg-white/70 hidden sm:block" />
          <img src={zebraLogo} alt="Zebra" className="h-8 sm:h-10 md:h-12 object-contain brightness-0 invert" />
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.05] [text-wrap:balance] max-w-5xl mx-auto ${
            isVisible ? "drop-shadow-[0_0_25px_rgba(204,255,0,0.35)]" : ""
          }`}
        >
          <span className="block font-light text-foreground">
            Não é só sobre coletar dados.
          </span>
          <span className="block font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-pulse-slow animate-glow pb-1">
            É sobre transformar dados em decisões.
          </span>
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto [text-wrap:balance]">
          IA aplicada à operação — logística, indústria e supply chain.
        </p>

        {/* Mobile / tablet info grid */}
        <div className="grid grid-cols-2 gap-3 lg:hidden mt-10 max-w-md mx-auto">
          {cornerCards.map((c) => (
            <div
              key={c.label}
              className="bg-card/70 backdrop-blur-md border border-border/60 rounded-xl px-3 py-2.5 text-left"
            >
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                {c.label}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">
                {c.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
