import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Invitation = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24 relative z-10">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight [text-wrap:balance]">
          <span className="block text-foreground">Mais eficiência, menos erro,</span>
          <span className="block text-primary drop-shadow-[0_0_25px_rgba(204,255,0,0.35)]">
            decisões mais rápidas.
          </span>
        </h2>

        <div className="mt-8 space-y-5 text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed [text-wrap:balance]">
          <p>
            Nimal e Zebra convidam você para o{" "}
            <strong className="text-primary font-semibold">Operação Inteligente 2026</strong>.
          </p>
          <p>
            Um encontro para quem busca evoluir a operação com o uso de Inteligência
            Artificial aplicada à logística, indústria e supply chain.
          </p>
          <p>
            Entenda como transformar dados em ganhos reais de produtividade e controle
            operacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
