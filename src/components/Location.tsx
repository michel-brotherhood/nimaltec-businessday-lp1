import { MapPin, Navigation, Clock, ParkingSquare, Calendar, Utensils, Shirt, Ticket } from "lucide-react";
import fogoFachada from "@/assets/fogo-de-chao-fachada.webp";

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
        <div className="lg:col-span-2 relative overflow-hidden bg-card/80 backdrop-blur-md border border-border rounded-2xl p-6 sm:p-8 flex flex-col gap-7">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

          {/* Header */}
          <div className="relative z-10 flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_15px_rgba(204,255,0,0.1)]">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-1">
                Endereço
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                Restaurante Fogo de Chão
              </h3>
            </div>
          </div>

          {/* Address */}
          <div className="relative z-10">
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              Av. Repórter Nestor Moreira, S/N
              <br />
              <span className="text-muted-foreground">Botafogo · Rio de Janeiro/RJ</span>
            </p>
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-border">
              <span className="text-xs font-mono text-muted-foreground">CEP 22290-210</span>
            </div>
          </div>

          {/* Logistics */}
          <div className="relative z-10 space-y-4 pt-5 border-t border-border">
            <div className="flex items-start gap-3 group">
              <ParkingSquare className="w-5 h-5 mt-0.5 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground/90 font-medium block">Estacionamento</strong>
                Disponível no local para convidados.
              </p>
            </div>
            <div className="flex items-start gap-3 group">
              <Clock className="w-5 h-5 mt-0.5 text-primary/60 group-hover:text-primary transition-colors shrink-0" />
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground/90 font-medium block">Recomendação de chegada</strong>
                Até 11h45 para credenciamento tranquilo.
              </p>
            </div>
          </div>

          {/* Event details grid */}
          <div className="relative z-10 pt-5 border-t border-border">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-3">
              Detalhes do evento
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/5 border border-border p-3">
                <Calendar className="w-4 h-4 text-primary mb-1.5" />
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Data</p>
                <p className="text-sm font-semibold text-foreground leading-tight">30 · Junho · 2026</p>
              </div>
              <div className="rounded-lg bg-white/5 border border-border p-3">
                <Clock className="w-4 h-4 text-primary mb-1.5" />
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Horário</p>
                <p className="text-sm font-semibold text-foreground leading-tight">12h às 15h</p>
              </div>
              <div className="rounded-lg bg-white/5 border border-border p-3">
                <Utensils className="w-4 h-4 text-primary mb-1.5" />
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Formato</p>
                <p className="text-sm font-semibold text-foreground leading-tight">Almoço executivo</p>
              </div>
              <div className="rounded-lg bg-white/5 border border-border p-3">
                <Shirt className="w-4 h-4 text-primary mb-1.5" />
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Dress code</p>
                <p className="text-sm font-semibold text-foreground leading-tight">Business casual</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/20 px-3 py-2">
              <Ticket className="w-4 h-4 text-primary shrink-0" />
              <p className="text-xs text-foreground/80">
                <span className="font-semibold text-primary">Por convite</span> · Vagas limitadas para conversas qualificadas.
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-4 rounded-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_30px_rgba(204,255,0,0.15)]"
          >
            <Navigation className="w-4 h-4" />
            Como chegar
          </a>

          {/* Decorative pattern */}
          <div className="pointer-events-none absolute bottom-0 right-0 p-4 opacity-[0.04]">
            <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-foreground" />
              <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" className="text-foreground" />
            </svg>
          </div>
        </div>

        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="rounded-xl overflow-hidden border border-border bg-card/80 relative aspect-[16/9]">
            <img
              src={fogoFachada}
              alt="Fachada do Restaurante Fogo de Chão · Botafogo, Rio de Janeiro, à noite"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-4 right-4 text-xs sm:text-sm text-foreground/90 font-medium">
              Fogo de Chão · Botafogo, Rio de Janeiro
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border border-border bg-card/80 min-h-[260px] lg:min-h-[280px]">
            <iframe
              title="Mapa Fogo de Chão Botafogo"
              src={embedUrl}
              className="w-full h-full min-h-[260px] lg:min-h-[280px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Location;
