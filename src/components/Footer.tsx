import { Mail, Phone } from "lucide-react";
import nimalLogo from "@/assets/nimal-logo-new.webp";
import zebraLogo from "@/assets/zebra-logo.svg";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-border bg-background/90 backdrop-blur-sm py-12 px-4">
      <div className="max-w-7xl mx-auto">
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
                alt="Nimal Tecnologia" 
                className="h-12 object-contain"
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
              © 2025 Nimal Connect. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
