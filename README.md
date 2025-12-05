# CineExplorer 🍿

Uma aplicação web moderna para exploração de filmes, desenvolvida para consolidar a migração do JavaScript Puro para o ecossistema **React**. O projeto consome dados reais da API do TMDB (The Movie Database).

🔗 **Acesse o projeto online:** [https://cine-explorer-react.vercel.app](https://cine-explorer-react.vercel.app)

##  Funcionalidades

Diferente dos projetos anteriores estáticos, este é uma **SPA (Single Page Application)** completa:

- **Catálogo em Tempo Real:** Listagem automática dos filmes mais populares do momento via API.
- **Busca Inteligente:** Pesquisa de filmes por título com atualização dinâmica.
- **Navegação Fluida (SPA):** Transição instantânea entre páginas (Home, Detalhes, Favoritos) sem recarregar o navegador.
- **Sistema de Favoritos:** O usuário pode salvar e remover filmes de uma lista pessoal.
- **Persistência de Dados:** Os favoritos ficam salvos no navegador (`LocalStorage`), mantendo a lista mesmo se fechar a aba.
- **Rotas Dinâmicas:** Uma única página de modelo renderiza detalhes de milhares de filmes diferentes baseada no ID da URL.

##  Tecnologias Utilizadas

- **React (Vite):**
  - `useState`: Para gerenciamento de estado (busca, lista de filmes).
  - `useEffect`: Para chamadas de API e efeitos colaterais.
  - Componentização: Reutilização de código (`MovieCard`, `Header`).
- **React Router DOM:** Para gerenciamento de rotas e links internos.
- **JavaScript (ES6+):**
  - `fetch` API com `async/await`.
  - Manipulação avançada de Arrays (`map`, `filter`, `some`).
- **CSS3:** Design responsivo e layout flexível.
- **Vercel:** Deploy contínuo e configuração de reescrita de rotas para SPA.

##  Aprendizados e Desafios

Este projeto marca a transição de "Lógica de Programação" para **"Engenharia de Front-end"**:
- **Migração de Mentalidade:** Sair da manipulação manual do DOM (`document.getElementById`) para o modelo declarativo do React (Estado -> Renderização).
- **Consumo de API Real:** Lidar com chaves de autenticação, parâmetros de URL e tratamento de promessas assíncronas.
- **Arquitetura de Projeto:** Organização profissional de pastas (`src/components`, `src/pages`, `src/services`).
- **Engenharia de Rotas:** Entender como configurar o servidor (Vercel) para lidar com rotas do lado do cliente (`rewrites`).

##  Autor

Desenvolvido por **Gustavo Scatigna** como parte da jornada de especialização em Front-end React.

---
*Dados fornecidos por [The Movie Database (TMDB)](https://www.themoviedb.org/).*