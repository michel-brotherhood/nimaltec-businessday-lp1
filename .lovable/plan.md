# Plano: Reposicionamento Business Day – IA aplicada à operação

Manter a estrutura atual (Hero → Evolution com tabela MC33/MC34 → Statistics → Vídeo → Conclusão → Footer) e reposicionar o discurso para o tema **IA aplicada à operação**, adicionando dados do evento.

## 1. Hero (`src/components/Hero.tsx`)

- Trocar tagline "Business Day 2025" por **"Business Day · Nimal & Zebra"**.
- Trocar título "Novidades Zebra" por algo alinhado ao novo conceito, por exemplo:
  - Linha 1 (foreground): "Não é só sobre coletar dados."
  - Linha 2 (gradiente verde neon, destaque): "É sobre transformar dados em decisões."
- Subtítulo curto: "IA aplicada à operação — logística, indústria e supply chain."
- Bloco de detalhes do evento logo abaixo do título (cards/pílulas com ícones lucide):
  - 📅 30 de junho de 2026
  - 🕛 12h às 15h
  - 📍 Restaurante Fogo de Chão
- Manter logos Nimal + Zebra e animações/glow já existentes em verde neon.

## 2. Evolution (`src/components/Evolution.tsx`)

Manter a tabela e os cards MC33 vs MC34 (sem alteração de dados), mas reescrever os textos de moldura para amarrar com IA:

- Título da seção: manter "Do Confiável ao Imbatível: A Evolução que Sua Operação Exige".
- Parágrafo introdutório: reescrever conectando captura de dados → camada de IA sobre RFID/coletores/automação. Mensagem: a evolução do MC33 para o MC34 é a base de hardware que habilita decisões inteligentes em tempo real.
- Conclusão: reforçar que hardware moderno + IA = decisões que impactam a operação.
- Statistics, vídeo e tabela permanecem como estão.

## 3. Footer (`src/components/Footer.tsx`)

Adicionar uma nova coluna/bloco "Evento" (ou substituir a coluna "Realização" para acomodar) com:

- Data: 30/06/2026
- Horário: 12h às 15h
- Local: Restaurante Fogo de Chão
- Tema: IA aplicada à operação

Manter contato, redes sociais e logos Nimal/Zebra como hoje. Atualizar o copyright para 2026 se fizer sentido.

## 4. SEO (`index.html`)

- `<title>`: "Business Day Nimal & Zebra · IA aplicada à operação"
- `<meta description>`: frase curta com data, local e tema.

## 5. Memória do projeto

Atualizar:
- `mem://index.md` Core: registrar tema IA + data 30/06/2026 + local Fogo de Chão.
- `mem://project/landing-page-structure`: refletir Hero com bloco de detalhes do evento e Footer com bloco Evento.

## Fora do escopo

- Não alterar paleta (verde neon mantido).
- Não trocar produtos: MC33 e MC34 permanecem.
- Não adicionar formulários nem header de navegação.
- Não mexer em VideoBackground, Statistics ou no vídeo showcase.

## Detalhes técnicos

- Ícones de data/hora/local via `lucide-react` (`Calendar`, `Clock`, `MapPin`) — pacote já instalado.
- Cards de evento no Hero usando `bg-card/80 backdrop-blur-md border border-border` para consistência visual.
- Todos os destaques continuam em `text-primary` / gradiente `from-primary to-accent` (tokens semânticos, sem cores hardcoded).
- Animações existentes (`animate-pulse-slow`, `animate-glow`, `useScrollAnimation`) preservadas.
