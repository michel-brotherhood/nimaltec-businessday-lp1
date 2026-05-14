import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, TrendingUp, Zap, AlertTriangle, BadgeCheck } from "lucide-react";

type Node = {
  icon: typeof CheckCircle2;
  label: string;
  pos: string; // absolute positioning
  delay: number;
};

const nodes: Node[] = [
  {
    icon: AlertTriangle,
    label: "Menos\nErros",
    pos: "top-0 left-0 sm:top-4 sm:left-4 md:top-8 md:left-8",
    delay: 100,
  },
  {
    icon: TrendingUp,
    label: "Mais\nEficiência",
    pos: "top-0 right-0 sm:top-4 sm:right-4 md:top-8 md:right-8",
    delay: 200,
  },
  {
    icon: Zap,
    label: "Decisões\nMais Rápidas",
    pos: "bottom-0 left-0 sm:bottom-4 sm:left-4 md:bottom-8 md:left-8",
    delay: 300,
  },
  {
    icon: BadgeCheck,
    label: "Resultados\nReais",
    pos: "bottom-0 right-0 sm:bottom-4 sm:right-4 md:bottom-8 md:right-8",
    delay: 400,
  },
];

const AIOperation = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="px-4 py-16 sm:py-20 lg:py-24 relative z-10">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative aspect-square w-full max-w-[640px] mx-auto">
          {/* Connecting SVG lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {[
              { x: 18, y: 18 },
              { x: 82, y: 18 },
              { x: 18, y: 82 },
              { x: 82, y: 82 },
            ].map((p, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={p.x}
                y2={p.y}
                stroke="url(#lineGrad)"
                strokeWidth="0.4"
                strokeDasharray="2 1.5"
                className={isVisible ? "animate-pulse-slow" : ""}
                style={{
                  animationDelay: `${i * 200}ms`,
                  strokeDashoffset: isVisible ? 0 : 100,
                  transition: `stroke-dashoffset 1.2s ease-out ${i * 150 + 200}ms`,
                }}
              />
            ))}
          </svg>

          {/* Pulsing rings around center */}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -inset-20 rounded-full border border-primary/20 animate-ping-slow" />
            <div
              className="absolute -inset-32 rounded-full border border-primary/10 animate-ping-slow"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Center IA orb (3D) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [perspective:1000px]">
            <div
              className={`group relative transition-all duration-1000 ${
                isVisible ? "scale-100 opacity-100 rotate-0" : "scale-50 opacity-0 -rotate-12"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Outer halo */}
              <div className="absolute -inset-6 rounded-full bg-primary/30 blur-3xl opacity-70 animate-pulse-slow" />

              {/* Rotating conic ring */}
              <div
                className="absolute -inset-3 rounded-full opacity-80"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--primary)) 0%, transparent 25%, hsl(var(--primary)) 50%, transparent 75%, hsl(var(--primary)) 100%)",
                  animation: "spin 8s linear infinite",
                  filter: "blur(6px)",
                }}
              />

              {/* 3D sphere */}
              <div
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full flex flex-col items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105"
                style={{
                  background:
                    "radial-gradient(circle at 30% 25%, hsl(72 100% 75%) 0%, hsl(72 100% 50%) 35%, hsl(72 100% 32%) 75%, hsl(72 100% 18%) 100%)",
                  boxShadow:
                    "inset -12px -16px 40px rgba(0,0,0,0.55), inset 10px 14px 30px rgba(255,255,255,0.35), 0 25px 60px hsl(var(--primary) / 0.55), 0 0 80px hsl(var(--primary) / 0.5)",
                }}
              >
                {/* Top specular highlight */}
                <div
                  className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[60%] h-[28%] rounded-[50%] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.25) 45%, transparent 75%)",
                    filter: "blur(2px)",
                  }}
                />
                {/* Bottom inner shadow */}
                <div
                  className="absolute bottom-0 inset-x-0 h-[55%] rounded-b-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 100%, rgba(0,0,0,0.45) 0%, transparent 65%)",
                  }}
                />
                {/* Rim light */}
                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 1px 1px rgba(255,255,255,0.35)",
                  }}
                />

                <span
                  className="relative text-4xl sm:text-5xl md:text-6xl font-black leading-none text-primary-foreground"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.4)" }}
                >
                  IA
                </span>
                <span
                  className="relative text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] mt-1 sm:mt-2 text-primary-foreground/90"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.35)" }}
                >
                  NA OPERAÇÃO
                </span>
              </div>

              {/* Ground shadow */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[80%] h-4 rounded-full bg-black/60 blur-xl" />
            </div>
          </div>

          {/* Corner nodes */}
          {nodes.map((n, i) => {
            const Icon = n.icon;
            return (
              <div
                key={i}
                className={`absolute ${n.pos} w-24 sm:w-28 md:w-32 transition-all duration-700`}
                style={{
                  transitionDelay: `${n.delay}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1)" : "scale(0.7)",
                }}
              >
                <div className="group flex flex-col items-center text-center">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-primary bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.3)] group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-foreground whitespace-pre-line leading-tight">
                    {n.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AIOperation;
