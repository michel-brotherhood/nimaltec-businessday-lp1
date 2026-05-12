import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import mc34 from "@/assets/mc34.webp";
import mc94 from "@/assets/mc94.webp";
import tc501 from "@/assets/tc501.webp";
import tc701 from "@/assets/tc701.webp";
import et401 from "@/assets/et401.webp";
import ws300 from "@/assets/ws300.webp";
import tc22r from "@/assets/tc22r.webp";

type Device = {
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
};

const devices: Device[] = [
  {
    name: "MC34",
    category: "Mobile Computer · Próxima Geração",
    image: mc34,
    description:
      "Coletor moderno com Snapdragon 8cx Gen 3, Android 13 e suíte Zebra DNA — base ideal para a camada de IA aplicada à operação.",
    specs: ["Wi-Fi 6E + 5G opcional", "Bateria 7000 mAh hot-swap", "IP65/IP67 · queda 2,4 m"],
  },
  {
    name: "MC94",
    category: "Ultra-Rugged",
    image: mc94,
    description:
      "Backward compatible com gerações anteriores, com versões freezer e non-incendive para áreas críticas e ambientes severos.",
    specs: ["Versões Freezer e Non-Incendive", "Compatível com acessórios MC9x", "Robustez extrema para 24/7"],
  },
  {
    name: "TC501",
    category: "AI-Powered Touch",
    image: tc501,
    description:
      "Touch computer com tela AMOLED 6\" e RFID UHF integrado, preparado para processamento de IA na borda.",
    specs: ["AMOLED 6\" · brilho extremo", "RFID UHF integrado", "IA on-device"],
  },
  {
    name: "TC701",
    category: "Ultra-Rugged AI",
    image: tc701,
    description:
      "Touch computer ultra-rugged projetado para os ambientes mais exigentes, com Wi-Fi 7 e resistência a quedas de 12 ft.",
    specs: ["Queda de até 12 ft (3,6 m)", "Wi-Fi 7 · conectividade total", "Selado IP68"],
  },
  {
    name: "ET401",
    category: "Enterprise Tablet",
    image: et401,
    description:
      "Tablet corporativo nas versões 8\" e 10.1\", IP68 e Wi-Fi 7 — ideal para campo, supervisão e operações móveis.",
    specs: ["Telas 8\" e 10.1\"", "Wi-Fi 7 + 5G", "IP68 · classe enterprise"],
  },
  {
    name: "WS300",
    category: "Wearable",
    image: ws300,
    description:
      "Wearable hands-free para voice picking e separação contínua, otimizando produtividade e ergonomia do operador.",
    specs: ["Hands-free · voice picking", "Leveza e ergonomia", "Turnos completos sem fadiga"],
  },
  {
    name: "TC22R",
    category: "Touch + RFID Integrado",
    image: tc22r,
    description:
      "Touch computer com RFID integrado, leitura de até 1.300 tags/s e display 6\" FHD+ — agilidade máxima em inventário e rastreabilidade.",
    specs: ["1.300 tags/s · RFID UHF", "Display 6\" FHD+", "Compacto e ágil"],
  },
];

const Devices = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section className="pt-6 pb-12 sm:pb-16 lg:pb-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] [text-wrap:balance] px-4">
            <span className="block text-foreground mb-2">O Ecossistema Completo</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-1 drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
              para sua Operação Inteligente
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed [text-wrap:balance]">
            Sete dispositivos que formam a base de hardware sobre a qual a IA aplicada à
            logística, indústria e supply chain transforma <strong className="text-foreground">dados em decisões</strong>.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {devices.map((d, i) => (
            <article
              key={d.name}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`group bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 flex flex-col hover:border-accent transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(204,255,0,0.3)] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              } ${i === devices.length - 1 ? "md:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 mb-5 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={d.image}
                  alt={`Dispositivo Zebra ${d.name}`}
                  loading="lazy"
                  className="relative max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Category badge */}
              <span className="inline-block self-start text-xs font-semibold uppercase tracking-wider text-primary border border-primary/40 bg-primary/10 rounded-full px-3 py-1 mb-3">
                {d.category}
              </span>

              {/* Name */}
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {d.name}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                {d.description}
              </p>

              {/* Specs */}
              <ul className="mt-auto space-y-2 pt-4 border-t border-border">
                {d.specs.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent font-bold mt-0.5" aria-hidden="true">›</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Devices;
