# Nova paleta de cores — Verde Neon

Substituir a paleta atual (vermelho Nimal + ciano) pela nova identidade verde neon, mantendo o tema escuro com neutros (preto/branco/cinza) para garantir legibilidade.

## Paleta

- Verde Neon `#CCFF00` → cor **primária** (títulos, destaques, CTAs, números das estatísticas, footer)
- Verde Limão `#D4FF00` → **accent** (destaques secundários, valores MC34 na tabela, bullets)
- Verde Escuro `#7CB342` → tom suave para hovers/elementos secundários
- Neutros: preto/cinza escuro (background/cards) + branco (texto)

## Onde aplicar

1. **`src/index.css`** — atualizar tokens HSL: `--primary`, `--accent`, `--ring`, `--tech-glow`, gradientes, e o keyframe `glow` (rgba 255,59,59 → rgba do verde neon). Foregrounds em preto para contraste sobre verde neon.
2. **`src/components/Hero.tsx`** — substituir `drop-shadow rgba(255,59,59,*)` por rgba verde neon (204,255,0).
3. **`src/components/Evolution.tsx`** — substituir `shadow rgba(255,59,59,0.3)` por rgba verde neon.
4. **Memória de design** — atualizar de "Nimal red" para "Verde Neon".

Componentes que usam tokens semânticos (`text-primary`, `text-accent`, etc.) atualizam automaticamente.

## Detalhes técnicos

HSL aproximados: `#CCFF00` → `72 100% 50%`, `#D4FF00` → `70 100% 50%`, `#7CB342` → `88 50% 47%`. Foreground sobre verde: `0 0% 8%`.