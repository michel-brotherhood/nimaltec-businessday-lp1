import { Mail, Phone, Facebook, Instagram, Youtube, Linkedin, Calendar, Clock, MapPin, Sparkles } from "lucide-react";
import nimalLogo from "@/assets/nimal-zebra-logos.png";
import zebraLogo from "@/assets/zebra-logo.svg";

const Footer = () => {
  return (
    <footer id="site-footer" className="relative z-10 border-t border-border bg-background/90 backdrop-blur-sm py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Event Details */}
        <div className="mb-10 bg-card/60 backdrop-blur-md border border-border rounded-xl p-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="text-primary text-sm font-bold uppercase tracking-[0.2em]">
              Business Day · IA aplicada à operação
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm">30 de junho de 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm">12h às 15h</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm">Restaurante Fogo de Chão</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h3 className="text-primary text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <a 
                href="mailto:atendimento@nimaltecnologia.com.br" 
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">atendimento@nimaltecnologia.com.br</span>
              </a>
              <a 
                href="tel:+552136207777" 
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">(21) 3620-7777</span>
              </a>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
              <a 
                href="https://www.facebook.com/nimal.tecnologia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/nimaltecnologia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCrbgEVs1sAnsA95DkJ-xTNg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/2050410/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Realization Section */}
          <div className="text-center">
            <h3 className="text-primary text-xl font-bold mb-4">Realização</h3>
            <div className="flex flex-col items-center gap-4">
              <img 
                src={zebraLogo} 
                alt="Zebra Technologies" 
                className="h-10 object-contain brightness-0 invert"
              />
              <img 
                src={nimalLogo} 
                alt="Nimal Tecnologia & Zebra" 
                className="h-32 object-contain"
              />
            </div>
          </div>

          {/* Credits Section */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm mb-2">
              <a 
                href="https://nimaltecnologia.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                Desenvolvido por Nimal Tecnologia
              </a>
            </p>
            <p className="text-muted-foreground text-sm">
              © 2026 Nimal Connect. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
