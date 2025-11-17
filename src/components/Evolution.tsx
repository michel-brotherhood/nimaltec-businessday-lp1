import mc33Image from "@/assets/mc33.webp";
import mc34Image from "@/assets/mc34.webp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Evolution = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-foreground px-4">
            Do Confiável ao Imbatível:
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent px-4">
            A Evolução que Sua Operação Exige
          </h2>
        </div>

        {/* Introduction */}
        <div 
          ref={contentRef}
          className={`max-w-5xl mx-auto mb-12 sm:mb-16 transition-all duration-1000 delay-200 ${
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 lg:p-10">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              O coletor de dados MC33 estabeleceu um padrão de confiança e eficiência em operações por anos. 
              No entanto, a evolução da tecnologia móvel corporativa apresenta um novo patamar de produtividade, 
              robustez e conectividade. A nova geração de dispositivos não é apenas uma atualização, mas uma 
              transformação completa na capacidade de sua equipe, projetada para os desafios do presente e as 
              demandas do futuro.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Para ilustrar o salto de performance, apresentamos um comparativo direto que detalha as principais 
              diferenças técnicas e seus benefícios práticos.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div 
          ref={tableRef}
          className={`mb-12 sm:mb-16 overflow-x-auto transition-all duration-1000 delay-400 ${
            tableVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl overflow-hidden min-w-[800px]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 text-foreground font-bold">Característica</th>
                  <th className="text-left p-6 text-foreground font-bold">
                    <div className="flex items-center gap-4">
                      <img src={mc33Image} alt="MC33" className="h-20 w-auto object-contain" />
                      <span>MC33</span>
                    </div>
                  </th>
                  <th className="text-left p-6 text-foreground font-bold">
                    <div className="flex items-center gap-4">
                      <img src={mc34Image} alt="MC34" className="h-20 w-auto object-contain" />
                      <span>MC34</span>
                    </div>
                  </th>
                  <th className="text-left p-6 text-foreground font-bold">Vantagem Estratégica</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-6 font-semibold text-foreground">Sistema Operacional</td>
                  <td className="p-6 text-muted-foreground">Android 8.1 (ou similar)</td>
                  <td className="p-6 text-accent font-semibold">Android 13 com suíte Zebra DNA</td>
                  <td className="p-6 text-muted-foreground">
                    <strong className="text-foreground">Segurança e Longevidade:</strong> Suporte estendido, 
                    patches de segurança atualizados e acesso a aplicativos modernos e mais pesados.
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-6 font-semibold text-foreground">Conectividade</td>
                  <td className="p-6 text-muted-foreground">Wi-Fi (padrões antigos)</td>
                  <td className="p-6 text-accent font-semibold">Wi-Fi 6E, Bluetooth 5.3, 5G/WWAN (opcional)</td>
                  <td className="p-6 text-muted-foreground">
                    <strong className="text-foreground">Operação Ininterrupta:</strong> Conexão ultrarrápida 
                    e estável, eliminando falhas de rede e acelerando a transmissão de dados.
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-6 font-semibold text-foreground">Robustez e Vedação</td>
                  <td className="p-6 text-muted-foreground">IP54, quedas de até 1,5 m (≈ 5 ft)</td>
                  <td className="p-6 text-accent font-semibold">IP65/IP67, quedas de até 2,4 m (≈ 8 ft)</td>
                  <td className="p-6 text-muted-foreground">
                    <strong className="text-foreground">Máximo Uptime:</strong> Resistência superior a poeira, 
                    jatos d'água, submersão e impactos, reduzindo drasticamente os custos com manutenção e o 
                    tempo de inatividade.
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition-colors">
                  <td className="p-6 font-semibold text-foreground">Bateria e Gerenciamento</td>
                  <td className="p-6 text-muted-foreground">Bateria padrão</td>
                  <td className="p-6 text-accent font-semibold">7000 mAh com hot-swap e BLE beacon</td>
                  <td className="p-6 text-muted-foreground">
                    <strong className="text-foreground">Autonomia e Rastreabilidade:</strong> Turnos completos 
                    sem interrupção para recarga e localização fácil de ativos, otimizando o uso e prevenindo perdas.
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition-colors">
                  <td className="p-6 font-semibold text-foreground">Performance de Leitura</td>
                  <td className="p-6 text-muted-foreground">Padrão</td>
                  <td className="p-6 text-accent font-semibold">Leitura de longo alcance</td>
                  <td className="p-6 text-muted-foreground">
                    <strong className="text-foreground">Eficiência Ampliada:</strong> Captura de códigos de 
                    barras a curtas e longas distâncias, ideal para armazéns altos e pátios (yards), minimizando 
                    movimentação e fadiga do operador.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Conclusion */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-6 sm:p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Conclusão: Um Salto Quântico em Performance
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A transição para a nova geração de coletores representa um investimento direto na eficiência e 
              na resiliência da sua operação. As melhorias não são apenas incrementais; elas redefinem o que 
              é possível em campo e no armazém.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>
                  <strong className="text-foreground">Maior conectividade</strong> se traduz em menos falhas 
                  de rede e mais rapidez na conclusão de tarefas.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>
                  A <strong className="text-foreground">leitura de longo alcance</strong> permite que os 
                  operadores trabalhem com mais agilidade e menos interrupções, aumentando a produtividade 
                  em ambientes complexos.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>
                  A <strong className="text-foreground">robustez superior</strong> garante que os dispositivos 
                  resistam às condições mais adversas, resultando em menos custos de manutenção e mais tempo 
                  em operação (uptime).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span>
                  Com <strong className="text-foreground">memória e processador avançados</strong>, sua empresa 
                  está preparada para o futuro, com suporte garantido para os aplicativos mais exigentes que 
                  sua operação possa necessitar.
                </span>
              </li>
            </ul>
            <p className="text-lg text-accent font-semibold mt-8">
              A atualização é mais do que uma simples troca de hardware; é a garantia de uma operação mais 
              inteligente, rápida e à prova de futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evolution;
