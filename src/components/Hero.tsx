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
        {/* Logos - Larger */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 flex-wrap">
          <img 
            src={nimalLogo} 
            alt="Nimal Tecnologia" 
            className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain"
          />
          <div className="w-px h-16 sm:h-20 bg-border/50 hidden sm:block" />
          <img 
            src={zebraLogo} 
            alt="Zebra" 
            className="h-14 sm:h-16 md:h-20 lg:h-24 object-contain brightness-0 invert"
          />
        </div>

        {/* Main Title with Animation */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight animate-fade-in">
          Novidades Zebra
        </h1>
      </div>
    </section>
  );
};

export default Hero;
