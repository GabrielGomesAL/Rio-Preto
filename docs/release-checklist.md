# Release Checklist

## Validação técnica

- [ ] `npm install` concluído sem vulnerabilidades críticas.
- [ ] `npm run build` aprovado.
- [ ] Sem arquivos sensíveis versionados.
- [ ] `dist/`, `node_modules/`, logs e artefatos temporários ignorados.

## Validação visual

- [ ] Hero revisado em desktop.
- [ ] Header legível sobre seções claras e escuras.
- [ ] Layout revisado em 320px, 390px, 1024px, 1280px e desktop.
- [ ] Sem overflow horizontal.
- [ ] Idiomas `PT/br`, `EN` e `ES` testados.
- [ ] Links de WhatsApp e e-mail funcionando.

## Publicação

- [ ] Merge aprovado em `develop`.
- [ ] Release branch criada.
- [ ] Merge em `main`.
- [ ] Tag semântica criada.
- [ ] Deploy executado.
