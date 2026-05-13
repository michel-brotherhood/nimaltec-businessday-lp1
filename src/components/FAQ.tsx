import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como funciona o credenciamento?",
    a: "O credenciamento começa às 12h, na entrada do Restaurante Fogo de Chão. Basta apresentar um documento com foto e o nome utilizado na inscrição — não é necessário imprimir nada.",
  },
  {
    q: "Ainda há vagas disponíveis?",
    a: "O evento é por convite e tem lugares limitados para garantir conversas qualificadas. A confirmação é feita por ordem de inscrição diretamente com o time comercial Nimal.",
  },
  {
    q: "Qual é o endereço completo?",
    a: "Restaurante Fogo de Chão · Av. Repórter Nestor Moreira, S/N — Botafogo, Rio de Janeiro/RJ, CEP 22290-210. Há estacionamento no local.",
  },
  {
    q: "Para quem é este Business Day?",
    a: "Para gestores e decisores B2B de logística, supply chain, TI e operações industriais que querem entender, na prática, como aplicar IA sobre uma base confiável de captura de dados.",
  },
  {
    q: "Qual é o dress code?",
    a: "Business casual. O ambiente é executivo, mas confortável para um almoço de relacionamento.",
  },
  {
    q: "Haverá demonstrações dos produtos Zebra?",
    a: "Sim. Mostraremos ao vivo os coletores MC33 e MC34, além de cenários de uso com RFID, automação e a camada de IA aplicada à operação. Mostraremos as novidades da Zebra com equipamentos que suportam IA para 2026.",
  },
];

const FAQ = () => (
  <section className="relative z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
    <div className="max-w-3xl md:max-w-4xl mx-auto">
      <div className="text-center mb-10 sm:mb-12 md:mb-16">
        <p className="text-primary font-semibold text-xs sm:text-sm md:text-base mb-3 tracking-[0.2em] uppercase">
          Perguntas frequentes
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] [text-wrap:balance]">
          <span className="text-foreground">Tudo o que você precisa </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            saber antes do evento
          </span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="bg-card/80 backdrop-blur-md border border-border rounded-xl px-4 sm:px-6 md:px-8">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border last:border-0">
            <AccordionTrigger className="text-left text-base sm:text-lg md:text-xl font-semibold text-foreground hover:no-underline hover:text-primary py-5 md:py-6">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm sm:text-base md:text-[17px] text-muted-foreground leading-relaxed pb-5 md:pb-6">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
