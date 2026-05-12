## Plano

### 1. Cadastro do primeiro admin (sem migration)

Criar uma **edge function `claim-admin`** que, usando service role key, atribui a função `admin` ao usuário logado **somente se ainda não existir nenhum admin no sistema** (auto-bootstrap do primeiro admin). Para qualquer admin posterior, a mesma função aceita um e-mail-alvo desde que o solicitante já seja admin.

Na tela `/admin`, quando o usuário logado **não tem** role admin:
- Mostra botão **"Tornar-me o primeiro admin"** se a tabela `user_roles` está vazia (a edge function valida e responde).
- Caso contrário, mostra mensagem atual ("Acesso restrito").

Quando o usuário **já é** admin, adiciona uma seção **"Gerenciar admins"** com:
- Input de e-mail + botão **"Promover a admin"** (chama `claim-admin` com `targetEmail`).
- Lista dos admins atuais com botão de remover (exceto a si mesmo).

Sem migration: a função `claim-admin` usa o service role para inserir/deletar em `user_roles` diretamente.

### 2. Remover "inspecionar elemento" e referências a Lovable

**Bloquear inspeção (apenas dissuasivo — devtools nativas sempre podem ser abertas):**
- Em `src/main.tsx` (somente em produção): bloquear menu de contexto (`contextmenu`), atalhos `F12`, `Ctrl/Cmd+Shift+I/J/C` e `Ctrl/Cmd+U`.
- Não aplicar no preview do Lovable para não atrapalhar desenvolvimento.

**Remover referências a Lovable visíveis ao público:**
- `index.html`: trocar `<meta name="twitter:site" content="@Lovable">` por `@nimaltecnologia`.
- Esconder o badge do Lovable no site publicado (via publish settings).
- Manter `lovable-tagger` no `vite.config.ts` (é dev-only e não vai para produção).

### 3. Hero — remover ícone Sparkles ao lado de "Nimal & Zebra 2026"

Em `src/components/Hero.tsx`:
- Remover `<Sparkles ... />` (linha 83) e o import de `Sparkles` (linha 1).
- Manter o título centralizado com o gradiente atual.

---

### Detalhes técnicos

- Edge function `claim-admin` (`supabase/functions/claim-admin/index.ts`): valida JWT do usuário, conta admins existentes; se 0 → promove o próprio usuário; se ≥1 → exige que o solicitante seja admin e aceita `targetEmail` para promover/rebaixar outros via `auth.admin.listUsers` + insert/delete em `user_roles`.
- `Admin.tsx`: adicionar fluxo de bootstrap + seção "Gerenciar admins".
- `main.tsx`: handler de `keydown`/`contextmenu` ativado por `import.meta.env.PROD`.

### Riscos / observações
- Bloquear devtools é **apenas cosmético** — qualquer dev consegue contornar. Útil só contra usuários casuais.
- A função `claim-admin` é o único caminho de escalada de privilégio: a regra "primeiro admin" só funciona enquanto a tabela está vazia, então é segura mesmo sendo pública.
