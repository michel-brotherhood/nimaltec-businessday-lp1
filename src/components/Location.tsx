import { MapPin, Navigation } from "lucide-react";

const directionsUrl =
  "https://www.google.com/maps/dir/-22.8772091,-43.0863537/Fogo+de+Ch%C3%A3o,+Av.+Reporter+Nestor+Moreira,+S%2FN+-+Botafogo,+Rio+de+Janeiro+-+RJ,+22290-210/@-22.9093105,-43.2346177,32527m/data=!3m2!1e3!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x997ff1451e2ddf:0x42a8cedf0c582d46!2m2!1d-43.1803052!2d-22.9487718?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D";

const embedUrl =
  "https://www.google.com/maps?q=Fogo+de+Ch%C3%A3o,+Av.+Rep%C3%B3rter+Nestor+Moreira,+Botafogo,+Rio+de+Janeiro&output=embed";

const Location = () => (
  <section className="relative z-10 px-4 py-16 sm:py-20">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-primary font-semibold text-xs sm:text-sm mb-3 tracking-[0.2em] uppercase">
          Como chegar
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] [text-wrap:balance]">
          <span className="text-foreground">Te esperamos no </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Fogo de Chão · Botafogo
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
        <div className="lg:col-span-2 bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-start gap-3 mb-5">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">Endereço</p>
                <p className="text-base sm:text-lg font-semibold text-foreground leading-tight">
                  Restaurante Fogo de Chão
                </p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  Av. Repórter Nestor Moreira, S/N<br />
                  Botafogo · Rio de Janeiro/RJ<br />
                  CEP 22290-210
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              Estacionamento disponível no local. Recomendamos chegar até 11h45 para um credenciamento tranquilo.
            </p>
          </div>

          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(204,255,0,0.45)] transition-all"
          >
            <Navigation className="w-4 h-4" />
            Como chegar
          </a>
        </div>

        <div className="lg:col-span-3 rounded-xl overflow-hidden border border-border bg-card/80 min-h-[320px] lg:min-h-[420px]">
          <iframe
            title="Mapa Fogo de Chão Botafogo"
            src={embedUrl}
            className="w-full h-full min-h-[320px] lg:min-h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

export default Location;
