import { useEffect, useState } from "react";
import { CalendarDays, ListChecks, Cpu, MapPin, HelpCircle } from "lucide-react";

const sections = [
  { id: "hero", label: "Início", icon: CalendarDays },
  { id: "agenda", label: "Agenda", icon: ListChecks },
  { id: "evolucao", label: "Evolução", icon: Cpu },
  { id: "local", label: "Local", icon: MapPin },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

const useActiveSection = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    // Use scroll-based detection for reliable sync regardless of section heights.
    const onScroll = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.offsetTop <= probe) current = s.id;
      }
      // Edge: bottom of page → force last section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return active;
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isMobile;
};

const handleClick = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const NavPill = ({ active }: { active: string }) => (
  <ul
    role="list"
    className="flex items-center gap-1 sm:gap-2 bg-card/80 backdrop-blur-xl border border-border/70 rounded-full px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
  >
    {sections.map(({ id, label, icon: Icon }) => {
      const isActive = active === id;
      return (
        <li key={id}>
          <button
            type="button"
            onClick={() => handleClick(id)}
            aria-label={`Ir para a seção ${label}`}
            aria-current={isActive ? "true" : undefined}
            className={`group flex items-center gap-1.5 rounded-full px-2.5 sm:px-3.5 py-2 transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              isActive
                ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(204,255,0,0.45)]"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
            }`}
          >
            <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium hidden sm:inline">{label}</span>
          </button>
        </li>
      );
    })}
  </ul>
);

const AnchorNav = () => {
  const active = useActiveSection();
  const isMobile = useIsMobile();
  const hideFixed = isMobile && active === "hero";

  return (
    <nav
      aria-label="Seções da página"
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-1rem)] transition-opacity duration-300 ${
        hideFixed ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <NavPill active={active} />
    </nav>
  );
};

export { NavPill, useActiveSection };
export default AnchorNav;
