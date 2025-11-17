import { Calendar, Clock, MapPin } from "lucide-react";
import nimalLogo from "@/assets/nimal-logo.png";
import zebraLogo from "@/assets/zebra-logo.svg";
import techBackground from "@/assets/tech-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${techBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
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
          Business Day
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
          Soluções Zebra para{" "}
          <span className="text-accent">Transformação Digital</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
          Descubra como as tecnologias Zebra podem{" "}
          <span className="text-accent font-semibold">revolucionar</span> seu negócio
          <br />
          com soluções de{" "}
          <span className="text-accent font-semibold">mobilidade</span> e{" "}
          <span className="text-accent font-semibold">captura de dados</span>
        </p>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-primary transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">TBD</h3>
            <p className="text-muted-foreground">Data do evento</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-accent transition-colors">
            <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">TBD</h3>
            <p className="text-muted-foreground">Horário do evento</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 backdrop-blur-sm hover:border-primary transition-colors">
            <div className="w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">TBD</h3>
            <p className="text-muted-foreground">Local do evento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
