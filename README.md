# Rio Preto Prospecção Ltda

Site institucional premium para a Rio Preto Prospecção Ltda, com foco em pesquisa mineral, sondagem RC e avaliação geológica.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Three.js para o elemento 3D experimental
- Lucide React para iconografia

## Funcionalidades

- Landing page responsiva e otimizada para desktop, tablet e celular.
- Seletor de idioma `PT/br`, `EN` e `ES`.
- Hero com asset mineral, métricas técnicas e elemento 3D discreto.
- Seções de serviços, sondagem RC, diferenciais, experiência, equipamentos e contato.
- Links funcionais para WhatsApp e e-mail.
- Metadados básicos de SEO atualizados conforme idioma.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estrutura

```text
src/
  components/       Componentes visuais e seções da página
  data/             Conteúdo e traduções
  i18n/             Estado de idioma
  styles.css        Tokens visuais, padrões e ajustes responsivos
public/
  assets/           Imagens públicas usadas pela aplicação
docs/
  design-concept.png
```

## Qualidade

Antes de publicar:

```bash
npm run build
```

O build executa `tsc --noEmit` e `vite build`.

## Branch Strategy

- `main`: versão estável pronta para produção.
- `develop`: integração de entregas aprovadas.
- `feature/*`: desenvolvimento de funcionalidades.
- `release/*`: preparação de versão.

## Contato

Rio Preto Prospecção Ltda  
E-mail: sondagensrp@gmail.com  
WhatsApp: (62) 99837-8540
