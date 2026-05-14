import { useState } from "react";
import { Send } from "lucide-react";
import RegisterDialog from "./RegisterDialog";

type Props = {
  className?: string;
  label?: string;
};

const RegisterButton = ({ className = "", label = "Faça sua inscrição" }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Faça sua inscrição no Business Day Nimal & Zebra 2026"
        className={`group relative inline-block rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      >
        {/* Pulse rings */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-primary/40 animate-ping opacity-60" aria-hidden="true" />
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-40"
          style={{ animationDelay: "0.6s" }}
          aria-hidden="true"
        />

        {/* 3D base shadow layer */}
        <span
          aria-hidden="true"
          className="absolute inset-0 translate-y-[6px] rounded-full bg-primary/40 blur-[2px] transition-transform duration-200 group-hover:translate-y-[8px] group-active:translate-y-[1px]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 translate-y-[5px] rounded-b-full bg-[hsl(var(--primary)/0.7)] transition-transform duration-200 group-hover:translate-y-[7px] group-active:translate-y-[0px]"
        />

        {/* Top face */}
        <span
          className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-primary to-[hsl(var(--accent))] text-primary-foreground font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base shadow-[inset_0_1px_0_rgba(255,255,255,0.45),inset_0_-2px_0_rgba(0,0,0,0.15),0_0_30px_rgba(204,255,0,0.45)] transition-all duration-200 group-hover:-translate-y-[2px] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-2px_0_rgba(0,0,0,0.2),0_0_55px_rgba(204,255,0,0.85)] group-active:translate-y-[3px] group-active:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_0_20px_rgba(204,255,0,0.4)]"
        >
          <Send className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          <span>{label}</span>
        </span>
      </button>
      <RegisterDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default RegisterButton;
