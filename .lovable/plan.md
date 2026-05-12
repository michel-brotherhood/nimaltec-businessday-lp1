## Reestruturação da landing — ajustes do briefing (áudio do Michel)

Aplicar todos os ajustes ditados, reorganizando a página para focar em **Nimal & Zebra 2026 · IA aplicada à operação** e o ecossistema completo de dispositivos (não mais no comparativo MC33 vs MC34).

### 1. Hero (`src/components/Hero.tsx`)
- Promover **"Nimal & Zebra 2026"** como título principal em destaque (grande, gradiente neon).
- Adicionar **ícone/símbolo de IA** (lucide `Sparkles` ou `BrainCircuit`) ao lado do título.
- Substituir o H1 atual ("Não é só sobre coletar dados…") por:
  - **Nimal & Zebra 2026** (display, gradiente verde neon + negrito)
  - **IA aplicada à operação** (subtítulo médio, verde neon, negrito) — esta é a frase que precisa chamar a atenção.
- Manter "Não é só sobre coletar dados. É sobre transformar dados em decisões." como linha de apoio menor, **quase transparente** (`text-muted-foreground/60`).
- Adicionar **botão CTA "Faça sua inscrição"** logo abaixo do título (verde neon, clicável). Por enquanto abre `mailto:` ou link placeholder — Zebra fornecerá o link real depois (confirmar com usuário; default: placeholder `#inscricao`).
- Manter logos Nimal/Zebra e cards de canto.

### 2. Schedule (`src/components/Schedule.tsx`)
- Alterar o item das **13h45**: trocar `"Painel Técnico: Do MC33 ao MC34"` por **"Novidades Zebra 2026"** (manter horário e descrição adaptada).
- Layout e cores permanecem (já aprovados).

### 3. Remover seção Evolution comparativa
- **Deletar** o componente `Evolution.tsx` da página (não renderizar mais), pois contém:
  - Título "Do Confiável ao Imbatível"
  - Texto sobre MC33/MC34
  - Tabela/cards comparativos MC33 vs MC34
  - Conclusão "Salto Quântico"
- **Preservar** o componente `Statistics.tsx` (números) e o vídeo (`showcase-video.mp4`) — serão reutilizados como seções independentes.

### 4. Nova ordem das seções (`src/pages/Index.tsx`)
```text
1. Hero (Nimal & Zebra 2026 + CTA)
2. Schedule (programação)
3. Devices (ecossistema completo — 7 dispositivos, terminando em TC22R)
4. Statistics (números que comprovam a evolução)
5. Video (showcase)
6. Location (como chegar)
7. CTA "Te esperamos" + botão de inscrição
8. FAQ
9. Footer
```

### 5. Statistics como seção independente
- Extrair `<Statistics />` do Evolution e renderizar como `<section id="numeros">` logo após Devices.
- Adicionar header próprio: **"Números que comprovam a evolução"**.

### 6. Video como seção independente
- Criar `src/components/VideoShowcase.tsx` com o `showcase-video.mp4` no mesmo card visual usado hoje no Evolution.
- Renderizar como `<section id="video">` após Statistics.

### 7. Nova seção "Te esperamos" (`src/components/CallToAction.tsx`)
- Bloco final antes do FAQ com:
  - Título grande "Te esperamos no Business Day"
  - Resumo curto (data, local, horário)
  - **Botão CTA "Faça sua inscrição"** (mesmo do Hero)

### 8. AnchorNav (`src/components/AnchorNav.tsx`)
- Atualizar `sections` para a nova estrutura:
  `Início → Agenda → Dispositivos → Números → Vídeo → Local → Inscrição → FAQ`
- Remover o item "Evolução"; ajustar ícones (`BarChart3` para Números, `Play` para Vídeo, `Mail`/`Send` para Inscrição).

### 9. CTA reutilizável
- Criar `src/components/RegisterButton.tsx` (botão verde neon com glow) usado no Hero e na seção "Te esperamos".
- href: placeholder `#` (a Zebra fornecerá o link de inscrição/dashboard depois).

### Detalhes técnicos
- Tokens semânticos do design system, sem cores hardcoded.
- Sem novas dependências.
- Manter animações `useScrollAnimation` existentes.
- `Evolution.tsx` é apagado; `Statistics.tsx` permanece (importado direto pelo Index); `mc33.webp` permanece no assets caso seja reutilizado depois.

### Fora de escopo
- Integração real do formulário/dashboard de inscrição (link será fornecido pela Zebra).
- Mudanças no FAQ, Footer, VideoBackground.
- Mudanças no comparativo (será removido por completo, não editado).
