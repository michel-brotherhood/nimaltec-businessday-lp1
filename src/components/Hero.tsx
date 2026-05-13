import nimalLogo from "@/assets/nimal-logo.png";
import zebraLogo from "@/assets/zebra-logo.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { NavPill, useActiveSection } from "@/components/AnchorNav";
import RegisterButton from "@/components/RegisterButton";

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
    pos: "hidden lg:block bottom-3 left-3 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8",
  },
  {
    label: "Acesso",
    value: "Por convite",
    sub: "Vagas limitadas",
    pos: "hidden lg:block bottom-3 right-3 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8",
  },
];

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();
  const active = useActiveSection();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft top/bottom gradient for legibility of corner cards */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />

      {/* Floating corner cards */}
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
        <div className="flex items-center justify-center gap-5 sm:gap-7 md:gap-10 mb-8 sm:mb-10 md:mb-12 flex-wrap">
          <img src={nimalLogo} alt="Nimal Tecnologia" className="h-12 sm:h-14 md:h-18 lg:h-20 object-contain" />
          <div className="w-px h-12 sm:h-14 md:h-18 lg:h-20 bg-white/60 hidden sm:block" />
          <img src={zebraLogo} alt="Zebra" className="h-10 sm:h-12 md:h-16 lg:h-16 object-contain brightness-0 invert" />
        </div>

        <h1
          className={`mb-5 sm:mb-6 md:mb-8 leading-[1.05] [text-wrap:balance] max-w-5xl mx-auto ${
            isVisible ? "drop-shadow-[0_0_25px_rgba(204,255,0,0.35)]" : ""
          }`}
        >
          <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-pulse-slow tracking-tight pb-1">
            Business Day 2026
          </span>
          <span className="block mt-3 sm:mt-4 md:mt-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
            IA aplicada à operação
          </span>
        </h1>

        <p className="text-xs sm:text-sm md:text-base text-muted-foreground/60 max-w-md sm:max-w-lg md:max-w-2xl mx-auto [text-wrap:balance] leading-relaxed mb-7 sm:mb-9 md:mb-10">
          Não é só sobre coletar dados. É sobre transformar dados em decisões.
        </p>

        <div className="flex justify-center">
          <RegisterButton />
        </div>

        {/* Inline anchor nav for mobile + tablet */}
        <div className="lg:hidden mt-7 sm:mt-10 md:mt-12 flex justify-center">
          <NavPill active={active} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
