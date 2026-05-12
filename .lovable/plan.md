# Nova paleta de cores — Verde Neon

Substituir a paleta atual (vermelho Nimal + ciano) pela nova identidade verde neon, mantendo o tema escuro com neutros (preto/branco/cinza) para garantir legibilidade.

## Paleta

- Verde Neon `#CCFF00` → cor **primária** (títulos, destaques, CTAs, números das estatísticas, footer)
- Verde Limão `#D4FF00` → **accent** (destaques secundários, valores MC34 na tabela, bullets)
- Verde Escuro `#7CB342` → tom suave para hovers/elementos secundários
- Neutros: preto/cinza escuro (background/cards) + branco (texto)

## Onde aplicar

1. **`src/index.css`** — atualizar tokens HSL:
   - `--primary` → verde neon (#CCFF00)
   - `--accent` → verde limão (#D4FF00)
   - `--ring`, `--tech-glow`, `--gradient-primary`, `--gradient-accent` alinhados ao novo verde
   - Atualizar keyframe `glow` (rgba 255,59,59 → rgba do verde neon)
   - Garantir `--primary-foreground` / `--accent-foreground` em **preto** para contraste sobre verde neon
2. **`src/components/Hero.tsx`** — trocar os `drop-shadow-[0_0_*_rgba(255,59,59,*)]` por rgba do verde neon (204,255,0)
3. **`src/components/Evolution.tsx`** — trocar os `shadow-[0_0_30px_rgba(255,59,59,0.3)]` por rgba verde neon
4. **Memória de design** — atualizar nota da paleta (de "Nimal red" para "Verde Neon")

Componentes que já usam tokens semânticos (`text-primary`, `text-accent`, `bg-card`, etc.) atualizam automaticamente — não precisam de edição.

## Detalhes técnicos

HSL aproximados:
- `#CCFF00` → `72 100% 50%`
- `#D4FF00` → `70 100% 50%`
- `#7CB342` → `88 50% 47%`
- foreground sobre verde: `0 0% 8%` (quase preto) para contraste WCAG
