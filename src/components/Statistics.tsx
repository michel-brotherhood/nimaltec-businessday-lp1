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
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
        {end % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}{suffix}
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  );
};

const Statistics = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4">
      <div 
        ref={ref}
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-8 md:p-12 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,59,59,0.3)] transition-all duration-300">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Números que Comprovam a Evolução
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <Counter end={2.5} duration={2000} suffix="x mais" label="processamento" />
            <Counter end={43} duration={2000} suffix="% maior" label="alcance de leitura" />
            <Counter end={50} duration={2000} suffix="% mais" label="Memória RAM" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
