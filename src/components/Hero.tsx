import { Calendar, Clock, MapPin } from "lucide-react";
import nimalLogo from "@/assets/nimal-logo.png";
import zebraLogo from "@/assets/zebra-logo.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pb-8 pt-16 sm:pt-20">
      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Tagline */}
        <p className="text-primary font-semibold text-sm sm:text-base mb-4 tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(204,255,0,0.6)]">
          Business Day · Nimal &amp; Zebra
        </p>

        {/* Logos */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12 flex-wrap">
          <img
            src={nimalLogo}
            alt="Nimal Tecnologia"
            className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain"
          />
          <div className="w-px h-12 sm:h-14 bg-white/80 hidden sm:block" />
          <img
            src={zebraLogo}
            alt="Zebra"
            className="h-10 sm:h-12 md:h-14 lg:h-16 object-contain brightness-0 invert"
          />
        </div>

        {/* Main Title */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight transition-all duration-700 ${
            isVisible ? "drop-shadow-[0_0_25px_rgba(204,255,0,0.5)]" : ""
          }`}
        >
          <span className="block text-foreground">
            Não é só sobre coletar dados.
          </span>
          <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-pulse-slow animate-glow">
            É sobre transformar dados em decisões.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 sm:mb-12">
          IA aplicada à operação — logística, indústria e supply chain.
        </p>

        {/* Event details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {[
            { icon: Calendar, label: "Data", value: "30 de junho de 2026" },
            { icon: Clock, label: "Horário", value: "12h às 15h" },
            { icon: MapPin, label: "Local", value: "Restaurante Fogo de Chão" },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-4 flex items-center gap-3 text-left hover:border-primary/60 hover:shadow-[0_0_20px_rgba(204,255,0,0.2)] transition-all duration-300"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                <p className="text-sm sm:text-base font-semibold text-foreground truncate">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
