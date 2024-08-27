<h1 align="center"> CLONE NETFLIX </h1>

<p align="center">
Desafio de replicar uma estrutura Front-End parecida com a NETFLIX. Este projeto permitirá a prática e o desenvolvimento de habilidades essenciais em desenvolvimento front-end.
</p>
<br>
<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura">Estrutura do código</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executar">Como executar localmente</a>&nbsp;&nbsp;&nbsp;
</p>
<br>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias e ferramentas:

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Vite**: Ferramenta de construção e desenvolvimento rápida.
- **React Router**: Biblioteca para gerenciamento de navegação e rotas em aplicações React.
- **Bootstrap**: Framework CSS para estilização rápida e responsiva.
- **Reactstrap**: Biblioteca de componentes React para Bootstrap.
- **Sass**: Pré-processador CSS para escrever estilos de forma mais eficiente.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **FontAwesome**: Biblioteca de ícones vetoriais para estilizar ícones.

### Ferramentas de Desenvolvimento
- **ESLint**: Ferramenta para identificar e corrigir problemas em código JavaScript.
- **@types/react** e **@types/react-dom**: Tipagens TypeScript para React.
- **@vitejs/plugin-react**: Plugin para integração do React com Vite.

## 📝 Estrutura

```
  src/
│
├── api/
│   ├── tmdb.jsx
│   └──
├── assets/
│   ├── images/
|   └── 
│   ├── styles/
│   │   ├── globalStyle.scss/
│   └──
├── Components/
│   ├── Layout/
│   │   ├── Footer/
|   |   |   ├── assets/
|   |   |   |   ├── images/
|   |   |   |   └──
|   |   |   |   ├── style/
|   |   |   |   |   ├── style.js
|   |   |   │   └──
|   |   |   ├── Footer.jsx
|   |   |   └──
│   │   ├── Header/
|   |   |   ├── assets/
|   |   |   |   ├── images/
|   |   |   |   └──
|   |   |   |   ├── style/
|   |   |   |   |   ├── style.js
|   |   |   │   └──
|   |   |   ├── Header.jsx
|   |   |   └──
│   └── └──
│   ├── Pages/
│   │   ├── Banners/
|   |   |   ├── assets/
|   |   |   |   ├── images/
|   |   |   |   └──
|   |   |   |   ├── style/
|   |   |   |   |   ├── style.js
|   |   |   │   └──
|   |   |   ├── InitialBanner.jsx
|   |   |   └──
│   │   ├── Login/
|   |   |   ├── assets/
|   |   |   |   ├── images/
|   |   |   |   └──
|   |   |   |   ├── style/
|   |   |   |   |   ├── style.js
|   |   |   │   └──
|   |   |   ├── Login.jsx
|   |   |   └──
│   │   ├── Movies/
|   |   |   ├── Components/
|   |   |   |   ├── MovieDetails.jsx
|   |   |   |   ├── style.scss
|   |   |   │   └──
|   |   |   ├── Movies.jsx
|   |   |   ├── style.scss
|   |   |   └──
│   │   ├── Search/
|   |   |   ├── SearchPage.jsx
|   |   |   ├── style.scss
|   |   |   └──
│   └── └──
│
├── Routes/
│   ├── Route.jsx
│   └──
|
├── Services/
│   ├── MoviesServices.jsx
│   ├── ProtectedRoute .jsx
│   └──
│
└── Home.jsx
│
└── main.jsx

```
<br>

## 🚀 Projeto

O projeto é um clone da interface da Netflix e inclui as seguintes funcionalidades:

1. **Página Inicial**: Exibe uma lista de filmes populares, em destaque e recomendações.
2. **Detalhes do Filme**: Mostra detalhes sobre um filme selecionado, incluindo sinopse, elenco e avaliações.
3. **Navegação**: Navegação entre diferentes seções da aplicação, incluindo home, detalhes e categorias de filmes.
4. **Estilização Responsiva**: Utiliza Bootstrap e Sass para garantir uma interface atraente e adaptável a diferentes tamanhos de tela.

<br>

## 🚀 Executar
Siga os passos abaixo para configurar e executar o projeto localmente em sua máquina:

### Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- Node.js (Versão recomendada: 16.x ou superior)
- Yarn ou npm (gerenciador de pacotes)
 
### Passos para Configuração

- Clone o repositório:
  ```
  git clone https://github.com/seu-usuario/desafio_codigo_-clone-_netflix.git
  ```
- Navegue até o diretório do projeto

- Instale as dependências:
  - Se você estiver usando Yarn:
   
    ```
    yarn install
    ```
  - Ou, se você estiver usando npm:
   
    ```
    npm install
    ```

### Executando o Projeto

- Inicie o servidor de desenvolvimento:
  - Com Yarn:

    ```
    yarn dev
    ```
    
  - Ou, com npm

    ```
    npm run dev
    ```

- O comando acima iniciará o servidor de desenvolvimento. Você poderá acessar o projeto através do seguinte endereço no navegador:

```
  http://localhost:5173/
  ```

### DADOS DE ACESSO

- Utilize estas credenciais:
  - SENHA: password
  - EMAIL: user@example.com
