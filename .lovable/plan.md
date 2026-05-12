# Plano: Hero cinematográfico + esconder scrollbar

## 1. Esconder a barra de rolagem (mantendo o scroll funcional)

Em `src/index.css`, adicionar utilitário global:

```css
html { scrollbar-width: none; }            /* Firefox */
html::-webkit-scrollbar { display: none; } /* Chrome/Safari */
body { -ms-overflow-style: none; }         /* IE/Edge legado */
```

A página continua rolando normalmente — apenas a barra some.

## 2. Reorganizar a primeira seção (Hero) inspirado na referência Protetta

Referência observada na imagem: vídeo full-bleed ocupando a tela toda, título central elegante, eyebrow discreto acima, subtítulo curto abaixo, e **cards flutuantes nos cantos** (canto superior esquerdo e canto inferior esquerdo) com micro-informações — em vez do bloco grid de 3 cards centralizados que temos hoje.

Mudanças apenas em `src/components/Hero.tsx` (sem tocar em `VideoBackground`, paleta ou outras seções):

### 2.1. Layout geral
- Transformar a seção em **full viewport**: `min-h-screen` em vez de `min-h-[60vh]`, com o conteúdo centralizado vertical e horizontalmente (`flex items-center justify-center`).
- Manter o vídeo de fundo atual (já é global via `VideoBackground`), apenas reforçando o gradiente inferior para legibilidade dos cards flutuantes (overlay leve via `bg-gradient-to-b from-background/30 via-transparent to-background/70` interno à seção).

### 2.2. Bloco central (eyebrow + logos + título + subtítulo)
- **Eyebrow** (já existe): "BUSINESS DAY · NIMAL & ZEBRA" — manter em verde neon, tracking largo, tamanho `text-xs sm:text-sm`.
- **Logos Nimal + Zebra**: manter como hoje, levemente menores (`h-10 sm:h-12 md:h-14`) e com mais respiração (`mb-8`).
- **Título** (`h1`): manter as duas linhas, mas refinar a hierarquia ao estilo editorial da referência:
  - Linha 1 em `font-light` / `font-normal` foreground.
  - Linha 2 com gradiente verde neon mantido, em `font-bold`.
  - Escala: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`, `leading-[1.05]`, `[text-wrap:balance]`, `max-w-5xl`.
- **Subtítulo**: 1 linha curta, `text-base sm:text-lg`, `text-muted-foreground`, `max-w-xl mx-auto`.

### 2.3. Cards flutuantes nos cantos (substituem o grid central)
Quatro micro-cards posicionados em `absolute` dentro da seção, estilo "tags" da referência. Em mobile viram um stack vertical no rodapé da seção (não absolutos), para evitar sobreposição.

Layout desktop (≥ lg):
- **Topo-esquerdo**: card "DATA · 30/06/2026 · Business Day".
- **Topo-direito**: card "12h às 15h · Almoço executivo".
- **Inferior-esquerdo**: card "Restaurante Fogo de Chão · Botafogo/RJ".
- **Inferior-direito**: card "Por convite · Vagas limitadas".

Estilo dos cards (consistente com o restante da landing):
- `bg-card/70 backdrop-blur-md border border-border/60 rounded-xl px-4 py-3`
- Eyebrow em `text-[10px] uppercase tracking-wider text-muted-foreground`
- Valor em `text-sm font-semibold text-foreground`
- Hover sutil com `hover:border-primary/60`

Mobile (< lg):
- Cards renderizam como grid 2x2 abaixo do subtítulo, com `gap-3`, ainda dentro do hero (sem `absolute`). Ícones removidos para deixar mais leve, idêntico à referência.

### 2.4. Remover elementos pesados
- Remover o grid central atual de 3 cards grandes com ícones (Calendar/Clock/MapPin) — toda essa info agora vive nos cards flutuantes/cantos.
- Manter a animação de entrada (`useScrollAnimation`) só no bloco central.

## Fora do escopo

- Não criar header/navegação superior (a referência tem nav, mas a memória do projeto diz "No navigation header" — respeitar).
- Não tocar em Schedule, Evolution, Location, FAQ, Footer ou VideoBackground.
- Não alterar paleta, tokens ou tipografia base.

## Detalhes técnicos

- Cards absolutos usam `hidden lg:block` + `absolute top-6 left-6` etc.; versão mobile usa `grid grid-cols-2 gap-3 lg:hidden mt-10`.
- A seção precisa de `relative overflow-hidden` para conter os cards absolutos.
- O scroll continua funcionando após esconder a scrollbar — testado pelo padrão CSS acima, sem JS.
