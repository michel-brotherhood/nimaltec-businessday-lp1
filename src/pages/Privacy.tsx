import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar à página inicial
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Política de Privacidade</h1>
        <p className="text-sm text-muted-foreground mb-10">
          Última atualização: 12 de maio de 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">1. Quem somos</h2>
            <p>
              Esta Política de Privacidade descreve como a Nimal Tecnologia ("nós") coleta, usa e
              protege as informações pessoais coletadas no formulário de inscrição do evento
              <strong className="text-foreground"> Business Day · Nimal &amp; Zebra 2026</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">2. Dados coletados</h2>
            <p>Ao se inscrever, coletamos os seguintes dados:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Nome completo</li>
              <li>E-mail corporativo</li>
              <li>Empresa</li>
              <li>Cargo</li>
              <li>Telefone</li>
              <li>Mensagem (opcional)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">3. Finalidade do uso</h2>
            <p>Utilizamos seus dados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Confirmar e gerenciar sua inscrição no evento;</li>
              <li>Enviar comunicações relacionadas ao evento (lembretes, agenda, local);</li>
              <li>Eventual contato comercial sobre soluções da Nimal Tecnologia e Zebra.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">4. Compartilhamento</h2>
            <p>
              Seus dados podem ser compartilhados com a Zebra Technologies, parceira do evento, e
              com fornecedores de infraestrutura (e-mail e hospedagem) estritamente para a operação
              da inscrição. Não vendemos seus dados a terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">5. Base legal (LGPD)</h2>
            <p>
              O tratamento ocorre com base no <strong className="text-foreground">consentimento</strong> do titular
              (Lei 13.709/2018 — LGPD), manifestado ao enviar o formulário de inscrição.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">6. Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso
              não autorizado, perda ou divulgação indevida.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">7. Seus direitos</h2>
            <p>
              Você pode, a qualquer momento, solicitar acesso, correção, portabilidade, anonimização
              ou exclusão dos seus dados, bem como revogar o consentimento, entrando em contato pelo
              e-mail{" "}
              <a
                href="mailto:atendimento@nimaltecnologia.com.br"
                className="text-primary hover:underline"
              >
                atendimento@nimaltecnologia.com.br
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">8. Retenção</h2>
            <p>
              Mantemos seus dados pelo tempo necessário para a realização do evento e por até 24
              meses após, para fins de relacionamento, salvo solicitação anterior de exclusão.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">9. Contato</h2>
            <p>
              Dúvidas sobre esta política:{" "}
              <a
                href="mailto:atendimento@nimaltecnologia.com.br"
                className="text-primary hover:underline"
              >
                atendimento@nimaltecnologia.com.br
              </a>{" "}
              · (21) 3620-7777
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
