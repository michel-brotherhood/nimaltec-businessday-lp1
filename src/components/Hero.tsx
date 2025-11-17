import nimalLogo from "@/assets/nimal-logo.png";
import zebraLogo from "@/assets/zebra-logo.svg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Content */}
      <div 
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Business Day 2025 */}
        <p className="text-primary font-semibold text-sm sm:text-base mb-4 tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(255,59,59,0.6)]">
          Business Day 2025
        </p>
        
        {/* Logos - Smaller */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 flex-wrap">
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

        {/* Main Title with Animation */}
        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight animate-pulse-slow transition-all duration-700 ${
          isVisible ? 'drop-shadow-[0_0_25px_rgba(255,59,59,0.8)] animate-glow' : ''
        }`}>
          Novidades Zebra
        </h1>
      </div>
    </section>
  );
};

export default Hero;
