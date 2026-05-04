# Git Flow

Este projeto usa uma variação simples de GitFlow para manter a entrega limpa.

## Branches

- `main`: código estável e publicável.
- `develop`: branch de integração.
- `feature/rio-preto-institutional-site`: implementação inicial do site.
- `release/v1.0.0`: preparação da primeira versão.

## Convenção de commits

Formato recomendado:

```text
tipo: resumo objetivo
```

Tipos:

- `feat`: nova funcionalidade.
- `fix`: correção.
- `docs`: documentação.
- `chore`: manutenção e configuração.
- `style`: ajuste visual sem mudança estrutural.

## Fluxo de entrega

1. Desenvolvimento em `feature/*`.
2. Merge em `develop` após validação.
3. Criação de `release/*`.
4. Build final.
5. Merge em `main`.
6. Tag de versão.
