# Craques do Futebol

Aplicativo Expo/React Native com galeria de jogadores, busca, filtros, menu lateral, telas internas e simulador de deep link.

## Como rodar

No Windows, voce pode iniciar pelo duplo clique:

- `start-web.bat`: abre o app no navegador.
- `start-mobile.bat`: inicia o Expo para usar no celular com Expo Go.

Pelo terminal, se Node.js e npm estiverem no PATH:

```bash
npm install
npm run web
```

ou:

```bash
npm run start
```

Se o PowerShell disser que `node`, `npm` ou `npx` nao foram encontrados, instale o Node.js ou adicione `C:\Program Files\nodejs` ao PATH. Os arquivos `.bat` ja tentam usar esse caminho automaticamente.

## Funcionalidades

- Galeria com cards de jogadores.
- Destaque do jogador selecionado.
- Busca por nome, clube ou pais.
- Filtro por posicao.
- Menu lateral com navegacao entre Inicio, Servico, Perfil, Contato e Sair.
- Modal para testar deep links como `pitangueira://servico`.

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `App.js` | Tela principal, galeria e navegação. |
| `components/` | Componentes compartilhados e telas em `paginas/`. |
| `assets/` | Ícones e imagens do aplicativo. |
| `assets/images/jogadores/` | Fotos locais usadas na galeria. |
| `assets/images/perfis/` | Imagens de perfil incluídas no projeto. |
| `index.js` e `app.json` | Entrada e configuração do Expo. |
