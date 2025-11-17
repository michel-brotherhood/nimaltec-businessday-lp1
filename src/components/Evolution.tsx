import mc33Image from "@/assets/mc33.webp";
import mc34Image from "@/assets/mc34.webp";
import showcaseVideo from "@/assets/showcase-video.mp4";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Statistics from "./Statistics";

const Evolution = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: tableRef, isVisible: tableVisible } = useScrollAnimation();

  return (
    <section className="pt-0 pb-6 sm:pb-10 lg:pb-14 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 pb-4 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-foreground px-4 leading-tight">
            Do Confiável ao Imbatível:
          </h2>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent px-4 leading-tight pb-2">
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
              Agora, o MC34 representa a evolução da tecnologia móvel corporativa, apresentando um novo patamar de produtividade, 
              robustez e conectividade. Esta nova geração não é apenas uma atualização, mas uma 
              transformação completa na capacidade de sua equipe, projetada para os desafios do presente e as 
              demandas do futuro.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Para ilustrar o salto de performance do MC33 para o MC34, apresentamos um comparativo direto que detalha as principais 
              diferenças técnicas e seus benefícios práticos.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div 
          ref={tableRef}
          className={`mb-12 sm:mb-16 transition-all duration-1000 delay-400 ${
            tableVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
          }`}
        >
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-x-auto">
            <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl overflow-hidden min-w-[800px]">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 xl:p-6 text-foreground font-bold text-sm xl:text-base">Característica</th>
                    <th className="text-left p-4 xl:p-6 text-foreground font-bold text-sm xl:text-base">
                      <div className="flex items-center gap-3">
                        <img src={mc33Image} alt="MC33" className="h-16 xl:h-20 w-auto object-contain" />
                        <span>MC33</span>
                      </div>
                    </th>
                    <th className="text-left p-4 xl:p-6 text-foreground font-bold text-sm xl:text-base">
                      <div className="flex items-center gap-3">
                        <img src={mc34Image} alt="MC34" className="h-16 xl:h-20 w-auto object-contain" />
                        <span>MC34</span>
                      </div>
                    </th>
                    <th className="text-left p-4 xl:p-6 text-foreground font-bold text-sm xl:text-base">Vantagem Estratégica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:translate-x-2">
                    <td className="p-4 xl:p-6 font-semibold text-foreground text-sm xl:text-base">Sistema Operacional</td>
                    <td className="p-4 xl:p-6 text-muted-foreground text-sm xl:text-base">Android 8.1 (ou similar)</td>
                    <td className="p-4 xl:p-6 text-accent font-semibold text-sm xl:text-base">Android 13 com suíte Zebra DNA</td>
                    <td className="p-4 xl:p-6 text-muted-foreground text-sm xl:text-base">
                      <strong className="text-foreground">Segurança e Longevidade:</strong> Suporte estendido, 
                      patches de segurança atualizados e acesso a aplicativos modernos e mais pesados.
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:translate-x-2">
                    <td className="p-4 xl:p-6 font-semibold text-foreground text-sm xl:text-base">Conectividade</td>
                    <td className="p-4 xl:p-6 text-muted-foreground text-sm xl:text-base">Wi-Fi (padrões antigos)</td>
                    <td className="p-4 xl:p-6 text-accent font-semibold text-sm xl:text-base">Wi-Fi 6E, Bluetooth 5.3, 5G/WWAN (opcional)</td>
                    <td className="p-4 xl:p-6 text-muted-foreground text-sm xl:text-base">
                      <strong className="text-foreground">Operação Ininterrupta:</strong> Conexão ultrarrápida 
                      e estável, eliminando falhas de rede e acelerando a transmissão de dados.
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:translate-x-2">
                    <td className="p-4 xl:p-6 font-semibold text-foreground text-sm xl:text-base">Robustez e Vedação</td>
                    <td className="p-4 xl:p-6 text-muted-foreground text-sm xl:text-base">IP54, quedas de até 1,5 m (≈ 5 ft)</td>
                    <td className="p-4 xl:p-6 text-accent font-semibold text-sm xl:text-base">IP65/IP67, quedas de até 2,4 m (≈ 8 ft)</td>
                    <td className="p-4 xl:p-6 text-muted-foreground text-sm xl:text-base">
                      <strong className="text-foreground">Máximo Uptime:</strong> Resistência superior a poeira, 
                      jatos d'água, submersão e impactos, reduzindo drasticamente os custos com manutenção e o 
                      tempo de inatividade.
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50 transition-all duration-300 hover:translate-x-2">
                    <td className="p-4 xl:p-6 font-semibold text-foreground text-sm xl:text-base">Bateria e Gerenciamento</td>
                    <td className="p-4 xl:p-6 text-muted-foreground text-sm xl:text-base">Bateria padrão</td>
                    <td className="p-4 xl:p-6 text-accent font-semibold text-sm xl:text-base">7000 mAh com hot-swap e BLE beacon</td>
                    <td className="p-4 xl:p-6 text-muted-foreground text-sm xl:text-base">
                      <strong className="text-foreground">Autonomia e Rastreabilidade:</strong> Turnos completos 
                      sem interrupção para recarga e localização fácil de ativos, otimizando o uso e prevenindo perdas.
                    </td>
                  </tr>
                  <tr className="hover:bg-muted/50 transition-all duration-300 hover:translate-x-2">
                    <td className="p-4 xl:p-6 font-semibold text-foreground text-sm xl:text-base">Performance de Leitura</td>
                    <td className="p-4 xl:p-6 text-muted-foreground text-sm xl:text-base">Padrão</td>
                    <td className="p-4 xl:p-6 text-accent font-semibold text-sm xl:text-base">Leitura de longo alcance</td>
                    <td className="p-4 xl:p-6 text-muted-foreground text-sm xl:text-base">
                      <strong className="text-foreground">Eficiência Ampliada:</strong> Captura de códigos de 
                      barras a curtas e longas distâncias, ideal para armazéns altos e pátios (yards), minimizando 
                      movimentação e fadiga do operador.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile/Tablet Cards */}
          <div className="lg:hidden space-y-6">
            {[
              {
                feature: "Sistema Operacional",
                mc33: "Android 8.1 (ou similar)",
                mc34: "Android 13 com suíte Zebra DNA",
                advantage: "Segurança e Longevidade: Suporte estendido, patches de segurança atualizados e acesso a aplicativos modernos e mais pesados."
              },
              {
                feature: "Conectividade",
                mc33: "Wi-Fi (padrões antigos)",
                mc34: "Wi-Fi 6E, Bluetooth 5.3, 5G/WWAN (opcional)",
                advantage: "Operação Ininterrupta: Conexão ultrarrápida e estável, eliminando falhas de rede e acelerando a transmissão de dados."
              },
              {
                feature: "Robustez e Vedação",
                mc33: "IP54, quedas de até 1,5 m (≈ 5 ft)",
                mc34: "IP65/IP67, quedas de até 2,4 m (≈ 8 ft)",
                advantage: "Máximo Uptime: Resistência superior a poeira, jatos d'água, submersão e impactos, reduzindo drasticamente os custos com manutenção e o tempo de inatividade."
              },
              {
                feature: "Bateria e Gerenciamento",
                mc33: "Bateria padrão",
                mc34: "7000 mAh com hot-swap e BLE beacon",
                advantage: "Autonomia e Rastreabilidade: Turnos completos sem interrupção para recarga e localização fácil de ativos, otimizando o uso e prevenindo perdas."
              },
              {
                feature: "Performance de Leitura",
                mc33: "Padrão",
                mc34: "Leitura de longo alcance",
                advantage: "Eficiência Ampliada: Captura de códigos de barras a curtas e longas distâncias, ideal para armazéns altos e pátios (yards), minimizando movimentação e fadiga do operador."
              }
            ].map((item, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-md border border-border rounded-xl p-5 sm:p-6 hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,59,59,0.3)]">
                <h4 className="text-lg sm:text-xl font-bold text-foreground mb-4">{item.feature}</h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <img src={mc33Image} alt="MC33" className="h-12 sm:h-14 w-auto object-contain" />
                      <span className="font-semibold text-foreground text-sm sm:text-base">MC33</span>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.mc33}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      <img src={mc34Image} alt="MC34" className="h-12 sm:h-14 w-auto object-contain" />
                      <span className="font-semibold text-foreground text-sm sm:text-base">MC34</span>
                    </div>
                    <p className="text-sm sm:text-base text-accent font-semibold">{item.mc34}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm sm:text-base text-muted-foreground">{item.advantage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <Statistics />

        {/* Video Showcase */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16 mb-12 sm:mb-16">
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-xl overflow-hidden hover:scale-105 hover:shadow-[0_0_30px_rgba(255,59,59,0.3)] transition-all duration-300">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-auto"
            >
              <source src={showcaseVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Conclusion */}
        <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
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
