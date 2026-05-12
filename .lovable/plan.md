# Plano: Trocar vídeo de fundo + ajustar Hero e título da Evolution

## 1. Vídeo de fundo

- Copiar `user-uploads://video-fundo-nimal.mp4` para `src/assets/fundo_video.mp4` (sobrescrevendo o atual). Como `VideoBackground.tsx` já importa esse caminho, nenhuma mudança de código é necessária.

## 2. Hero — responsividade do título e do bloco de detalhes

Problemas atuais:
- O título de duas linhas ("Não é só sobre coletar dados." / "É sobre transformar dados em decisões.") fica grande demais e quebra mal em desktop, notebook e mobile.
- No card "Local", o texto "Restaurante Fogo de Chão" está sendo cortado por `truncate`, então a informação some.

Ajustes em `src/components/Hero.tsx`:
- Reduzir e calibrar a escala tipográfica do `<h1>` para evitar quebras feias:
  - Mobile: `text-3xl`
  - sm: `text-4xl`
  - md: `text-5xl`
  - lg: `text-6xl`
- Acrescentar `text-balance` (e `leading-[1.1]`) para melhor distribuição das linhas.
- Limitar largura do título com `max-w-5xl mx-auto` para evitar linhas excessivamente largas em telas grandes.
- Subtítulo: manter, ajustando margem se necessário.
- Cards de evento: remover `truncate` do valor e permitir quebra (`whitespace-normal break-words leading-tight`), reduzindo levemente a fonte (`text-sm`) para que "Restaurante Fogo de Chão" caiba sem cortes em duas linhas, se preciso.

## 3. Evolution — título "Do Confiável ao Imbatível"

Problema: a segunda linha "A Evolução que Sua Operação Exige" usa gradiente verde neon, ficando visualmente "bruta" e desconectada da primeira linha.

Ajuste em `src/components/Evolution.tsx`:
- Unificar o estilo do título em duas linhas com hierarquia consistente:
  - Linha 1: foreground, peso bold, `text-3xl sm:text-4xl md:text-5xl`.
  - Linha 2: gradiente verde neon, mesmo tamanho da linha 1 (não maior), com `leading-[1.15]`, `text-balance` e `pb-1` para não cortar descendentes.
- Centralizar e limitar largura com `max-w-4xl mx-auto` para evitar quebras estranhas em telas largas.
- Reduzir a sombra/`drop-shadow` para um glow mais suave, mantendo a paleta verde neon.

## Fora do escopo

- Não alterar paleta, layout geral, tabela MC33/MC34, Statistics, Footer ou SEO.
- Não tocar em VideoBackground além da troca de arquivo.

## Detalhes técnicos

- `text-balance` requer Tailwind ≥3.4 (já no projeto). Se indisponível, usar `[text-wrap:balance]`.
- A cópia do vídeo será via `code--copy` para `src/assets/fundo_video.mp4` com `overwrite: true`. O Vite re-bundlará automaticamente.
