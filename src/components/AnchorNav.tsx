import { useEffect, useState } from "react";
import { CalendarDays, ListChecks, Cpu, MapPin, HelpCircle } from "lucide-react";

const sections = [
  { id: "hero", label: "Início", icon: CalendarDays },
  { id: "agenda", label: "Agenda", icon: ListChecks },
  { id: "evolucao", label: "Evolução", icon: Cpu },
  { id: "local", label: "Local", icon: MapPin },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

const AnchorNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Seções da página"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1rem)]"
    >
      <ul className="flex items-center gap-1 sm:gap-2 bg-card/80 backdrop-blur-xl border border-border/70 rounded-full px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        {sections.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                aria-current={isActive ? "true" : undefined}
                className={`group flex items-center gap-1.5 rounded-full px-2.5 sm:px-3.5 py-2 transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(204,255,0,0.45)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className={`text-xs sm:text-sm font-medium hidden sm:inline ${isActive ? "" : ""}`}>
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default AnchorNav;
