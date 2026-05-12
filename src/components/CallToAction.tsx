import { CalendarDays, Clock, MapPin } from "lucide-react";
import RegisterButton from "./RegisterButton";

const CallToAction = () => (
  <section id="inscricao" className="px-4 py-16 sm:py-20 lg:py-24 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 sm:p-12 lg:p-16 hover:border-primary/60 hover:shadow-[0_0_40px_rgba(204,255,0,0.25)] transition-all">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] [text-wrap:balance] mb-6">
          <span className="block text-foreground">Te esperamos no</span>
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-1 drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
            Business Day 2026
          </span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-8 [text-wrap:balance]">
          Reserve seu lugar e participe das novidades Zebra 2026 com a Nimal.
        </p>

        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10 text-sm sm:text-base text-muted-foreground">
          <li className="flex items-center gap-2"><CalendarDays className="w-4 h-4 text-primary" aria-hidden="true" /> 30 · Junho · 2026</li>
          <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" aria-hidden="true" /> 12h às 15h</li>
          <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" aria-hidden="true" /> Fogo de Chão · Botafogo, RJ</li>
        </ul>

        <RegisterButton />
      </div>
    </div>
  </section>
);

export default CallToAction;
