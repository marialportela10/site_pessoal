# MLPP · Portfólio pessoal

Site React + Vite no estilo Editorial Tropical Tech, com páginas HTML separadas (MPA):

- `index.html`: Home editorial e apresentação.
- `sobre.html`: trajetória, experiências e soft skills.
- `projetos.html`: Mapeia, Ouro e Cachaça e The Bunker, com galerias independentes.

## Desenvolvimento

Use Node.js 24. Execute nesta pasta:

```sh
npm ci
npm run dev
```

A navegação usa links HTML reais. O tema claro/escuro segue a preferência do sistema no primeiro acesso e salva a escolha em localStorage. As galerias mantêm navegação circular e permitem usar botões, indicadores e as setas do teclado quando o foco está na galeria.

## Validação e publicação

```sh
npm run lint
npm run build
npm run preview
```

Publique **todo o conteúdo de `dist/`**, incluindo os três arquivos HTML e as pastas de imagens. Os caminhos relativos permitem publicação na raiz ou em um subdiretório, como `/~mlpp/`. Não é necessário configurar fallback de SPA: cada página possui seu próprio HTML.
