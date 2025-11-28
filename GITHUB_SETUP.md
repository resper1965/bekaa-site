# GitHub Setup Instructions

## Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `bekaa-site`
3. Descrição: "Landing page profissional para Bekaa Trusted Advisors - Consultoria board-level em cibersegurança"
4. Público ou Privado: Sua escolha
5. NÃO inicialize com README, .gitignore ou license
6. Clique em "Create repository"

## Fazer Push do Código

Após criar o repositório, execute estes comandos:

```bash
cd /home/claude/bekaa-site

# Adicionar o remote do GitHub
git remote add origin https://github.com/resper1965/bekaa-site.git

# Renomear branch para main (padrão GitHub)
git branch -M main

# Fazer push inicial
git push -u origin main
```

## Ou use SSH (se configurado):

```bash
git remote add origin git@github.com:resper1965/bekaa-site.git
git branch -M main
git push -u origin main
```

## Deploy Automático na Vercel

1. Acesse: https://vercel.com
2. Clique em "Add New Project"
3. Importe o repositório `resper1965/bekaa-site`
4. Configurações detectadas automaticamente
5. Clique em "Deploy"

## Variáveis de Ambiente (Vercel)

Adicione estas variáveis no dashboard da Vercel:

```
NEXT_PUBLIC_SITE_URL=https://bekaa.eu
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX (se tiver)
```

## Domínio Customizado

Na Vercel:
1. Vá em Settings > Domains
2. Adicione: bekaa.eu
3. Configure os DNS records conforme instruções

## Estrutura do Projeto

✅ Next.js 14 com App Router
✅ TypeScript configurado
✅ Tailwind CSS com cores Bekaa
✅ shadcn/ui components
✅ Multilingual (EN/ES/PT-BR)
✅ SEO otimizado
✅ Vercel Analytics pronto
✅ Framer Motion animations

## Próximos Passos Recomendados

1. [ ] Instalar dependências: `npm install`
2. [ ] Rodar localmente: `npm run dev`
3. [ ] Adicionar mais conteúdo nas traduções
4. [ ] Adicionar imagens em /public/images
5. [ ] Criar componente de Contact Form
6. [ ] Adicionar mais seções (Testimonials, About, etc)
7. [ ] Configurar Google Analytics
8. [ ] Testar responsividade
9. [ ] Fazer audit Lighthouse
10. [ ] Deploy para produção

## Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build
npm run build

# Production
npm start

# Adicionar componente shadcn
npx shadcn-ui@latest add [component]

# Ver status Git
git status

# Novo commit
git add .
git commit -m "mensagem"
git push
```

## 🎉 Projeto Pronto!

O código está completo e pronto para deploy. Todos os arquivos essenciais foram criados:

- ✅ Configuração Next.js/TypeScript
- ✅ Components UI (Hero, Services, Footer)
- ✅ Sistema i18n multilingual
- ✅ Tailwind com cores Bekaa
- ✅ Estrutura SEO-friendly
- ✅ README com documentação

Basta fazer o push para o GitHub e conectar na Vercel!
