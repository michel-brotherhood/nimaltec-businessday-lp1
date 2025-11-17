import { useEffect, useState, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CounterProps {
  end: number;
  duration: number;
  suffix: string;
  label: string;
}

const Counter = ({ end, duration, suffix, label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = end / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
        {count}{suffix}
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  );
};

const Statistics = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 px-4 relative z-10">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Números que Comprovam a Evolução
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <Counter end={60} duration={2000} suffix="%" label="Aumento de Performance" />
            <Counter end={40} duration={2000} suffix="%" label="Redução de Custos" />
            <Counter end={99} duration={2000} suffix="%" label="Uptime Garantido" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
