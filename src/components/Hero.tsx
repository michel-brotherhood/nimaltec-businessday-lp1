import nimalLogo from "@/assets/nimal-logo.png";
import zebraLogo from "@/assets/zebra-logo.svg";
import backgroundVideo from "@/assets/fundo_video.mp4";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div 
        ref={ref}
        className={`relative z-10 max-w-6xl mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Logos */}
        <div className="flex items-center justify-center gap-8 mb-12 flex-wrap">
          <img 
            src={nimalLogo} 
            alt="Nimal Tecnologia" 
            className="h-12 md:h-16 object-contain"
          />
          <div className="w-px h-12 bg-border/50 hidden sm:block" />
          <img 
            src={zebraLogo} 
            alt="Zebra" 
            className="h-10 md:h-12 object-contain brightness-0 invert"
          />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
          Novidades Zebra
        </h1>
      </div>
    </section>
  );
};

export default Hero;
