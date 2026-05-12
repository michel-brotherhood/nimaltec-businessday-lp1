import nimalLogo from "@/assets/nimal-logo.png";
import zebraLogo from "@/assets/zebra-logo.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { NavPill, useActiveSection } from "@/components/AnchorNav";

const cornerCards = [
  {
    label: "Data",
    value: "30 · Junho · 2026",
    sub: "Business Day",
    pos: "top-3 left-3 sm:top-6 sm:left-6 md:top-8 md:left-8",
  },
  {
    label: "Horário",
    value: "12h às 15h",
    sub: "Almoço executivo",
    pos: "top-3 right-3 sm:top-6 sm:right-6 md:top-8 md:right-8",
  },
  {
    label: "Local",
    value: "Fogo de Chão",
    sub: "Botafogo · RJ",
    pos: "bottom-20 left-3 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8",
  },
  {
    label: "Acesso",
    value: "Por convite",
    sub: "Vagas limitadas",
    pos: "bottom-20 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8",
  },
];

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const active = useActiveSection();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft top/bottom gradient for legibility of corner cards */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />

      {/* Floating corner cards (all viewports) */}
      {cornerCards.map((c) => (
        <div
          key={c.label}
          className={`absolute ${c.pos} z-20 max-w-[42vw] sm:max-w-[240px] md:max-w-[260px] bg-card/75 backdrop-blur-md border border-border/60 rounded-xl px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3.5 hover:border-primary/60 transition-colors`}
        >
          <p className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-0.5 sm:mb-1">
            {c.label}
          </p>
          <p className="text-xs sm:text-sm md:text-base font-semibold text-foreground leading-tight">
            {c.value}
          </p>
          <p className="text-[10px] sm:text-[11px] md:text-xs text-muted-foreground mt-0.5 sm:mt-1 hidden sm:block">{c.sub}</p>
        </div>
      ))}

      {/* Center content */}
      <div
        ref={ref}
        className={`relative z-10 w-full max-w-5xl mx-auto text-center px-2 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-primary font-semibold text-[11px] sm:text-xs md:text-sm mb-5 sm:mb-7 md:mb-10 tracking-[0.28em] uppercase drop-shadow-[0_0_10px_rgba(204,255,0,0.6)]">
          Business Day · Nimal &amp; Zebra · 2026
        </p>

        <div className="flex items-center justify-center gap-5 sm:gap-7 md:gap-10 mb-8 sm:mb-10 md:mb-14 flex-wrap">
          <img src={nimalLogo} alt="Nimal Tecnologia" className="h-9 sm:h-11 md:h-14 lg:h-14 object-contain" />
          <div className="w-px h-9 sm:h-11 md:h-14 bg-white/60 hidden sm:block" />
          <img src={zebraLogo} alt="Zebra" className="h-7 sm:h-9 md:h-12 lg:h-12 object-contain brightness-0 invert" />
        </div>

        <h1
          className={`text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-7 md:mb-10 leading-[1.08] md:leading-[1.05] [text-wrap:balance] max-w-4xl mx-auto ${
            isVisible ? "drop-shadow-[0_0_25px_rgba(204,255,0,0.35)]" : ""
          }`}
        >
          <span className="block font-light text-foreground tracking-tight">
            Não é só sobre coletar dados.
          </span>
          <span className="block font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-pulse-slow animate-glow pb-1 tracking-tight">
            É sobre transformar dados em decisões.
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-md sm:max-w-lg md:max-w-2xl mx-auto [text-wrap:balance] leading-relaxed">
          IA aplicada à operação — logística, indústria e supply chain.
        </p>

        {/* Inline anchor nav on mobile only — replaces fixed bar while in hero */}
        <div className="sm:hidden mt-8 flex justify-center">
          <NavPill active={active} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
