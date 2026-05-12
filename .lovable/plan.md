# Nova seção: Portfólio de Dispositivos Zebra

Adicionar uma seção apresentando os 7 dispositivos (MC34, MC94, TC501, TC701, ET401, WS300, TC22R) com imagem, nome, categoria e descrição curta — posicionada **logo após a seção "Evolução"** (comparativo MC33 vs MC34), reforçando a narrativa "do hardware confiável ao ecossistema completo de IA aplicada".

## O que será criado

1. **Assets** — copiar as 7 imagens enviadas (`MC34-2.webp`, `MC94-2.webp`, `TC501-2.webp`, `TC701-2.webp`, `ET401-2.webp`, `WS300-2.webp`, `TC22R-2.webp`) para `src/assets/` com nomes limpos (`mc34.webp` já existe — reutilizar; demais como `mc94.webp`, `tc501.webp`, etc.).

2. **Novo componente** `src/components/Devices.tsx`:
   - Header da seção: título "O Ecossistema Completo para sua Operação Inteligente" + subtítulo conectando ao tema (IA aplicada sobre hardware confiável).
   - Grid responsivo de cards: 1 col (mobile), 2 cols (tablet), 3 cols (desktop), com o 7º card centralizado na última linha.
   - Cada card contém:
     - Imagem do dispositivo (object-contain, ~h-48)
     - Badge com categoria (ex: "Ultra-Rugged", "AI-Powered", "Wearable", "RFID Integrado")
     - Nome do modelo (destaque tipográfico)
     - Descrição curta (2–3 linhas, extraída do `.md` enviado)
     - Lista compacta de 2–3 specs-chave (ícones + texto)
   - Hover: borda neon + leve scale + glow (consistente com Evolution).
   - Animação de entrada via `useScrollAnimation` (fade/translate stagger).

3. **Index.tsx** — adicionar `<section id="dispositivos"><Devices /></section>` entre Evolution e Location.

4. **AnchorNav.tsx** — adicionar item "Dispositivos" (ícone `Smartphone` ou `Boxes` do lucide) ao array `sections`, mantendo a sincronização do scroll spy.

## Conteúdo dos cards (resumo do .md)

| Modelo | Categoria | Resumo |
|---|---|---|
| MC34 | Mobile Computer · Próxima geração | Snapdragon 8cx Gen 3, Wi-Fi 6E, 5G opcional, Android 13 + Zebra DNA |
| MC94 | Ultra-Rugged | Backward compatible, versões freezer e non-incendive para áreas críticas |
| TC501 | AI-Powered Touch | AMOLED 6", RFID UHF integrado, processamento de IA na borda |
| TC701 | Ultra-Rugged AI | Queda de 12 ft, Wi-Fi 7, projetado para ambientes severos |
| ET401 | Enterprise Tablet | 8"/10.1", IP68, Wi-Fi 7, ideal para campo e supervisão |
| WS300 | Wearable | Hands-free, voice picking, otimizado para separação contínua |
| TC22R | Touch + RFID | RFID integrado, leitura de 1.300 tags/s, display 6" FHD+ |

## Detalhes técnicos

- Tokens semânticos do design system (sem cores hardcoded): `bg-card/80`, `border-border`, `text-primary`, `text-accent`, `text-muted-foreground`.
- Mesma linguagem visual de Evolution: `backdrop-blur-md`, `rounded-xl`, hover `shadow-[0_0_30px_rgba(204,255,0,0.3)]`.
- Imagens com `loading="lazy"` e `alt` descritivo (SEO/a11y).
- Sem alteração de business logic, sem novas dependências.

## Fora de escopo

- Página de detalhe por dispositivo.
- Filtros/categorias interativas.
- Reescrita do comparativo MC33 vs MC34 (permanece como está).
