import { Send } from "lucide-react";

type Props = {
  className?: string;
  label?: string;
};

const RegisterButton = ({ className = "", label = "Faça sua inscrição" }: Props) => (
  <a
    href="#inscricao"
    aria-label="Faça sua inscrição no Business Day Nimal & Zebra 2026"
    className={`inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-bold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base shadow-[0_0_30px_rgba(204,255,0,0.45)] hover:shadow-[0_0_45px_rgba(204,255,0,0.7)] hover:scale-[1.03] transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
  >
    <Send className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
    <span>{label}</span>
  </a>
);

export default RegisterButton;
