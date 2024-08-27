<h1 align="center"> MULT APP </h1>

<p align="center">
Desafio de aplicar melhorias em várias áreas, incluindo arquitetura, autenticação, trabalho com JSON e qualidade de código. Este projeto permitirá a pratica e o desenvolvimento de habilidades essenciais em desenvolvimento front-end.
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

Esse projeto foi desenvolvido com as seguintes tecnologias:

- React
- Vite
- React Router
- Styled Components
- Axios
- Git e Github

### Tecnologias de Autenticação e Segurança

- bcryptjs
- jsonwebtoken

### Bibliotecas de Interface de Usuário
- react-icons
- react-responsive-carousel
- qrcode.react

### Ferramentas de Desenvolvimento
- ESLint
- @types/react e @types/react-dom

### Backend e API Mocking
- express
- json-server


## 📝 Estrutura

```
  src/
│
├── components/
│   ├── Pages/
│   │   ├── IpFinder/
|   |   |   ├── styles/
|   |   |   |   ├── Style.js
|   |   |   ├── IPAddressFinders.jsx
│   │   ├── Login/
|   |   |   ├── styles/
|   |   |   |   ├── Style.js
|   |   |   ├── Login.jsx
│   │   ├── MovieSearch/
|   |   |   ├── styles/
|   |   |   |   ├── Style.js
|   |   |   ├── MovieSearchEngine.jsx
│   │   ├── QRCodeGenerator/
|   |   |   ├── styles/
|   |   |   |   ├── Style.js
|   |   |   ├── QRCodeGenerator.jsx
│   │   ├── QuizApp/
|   |   |   ├── styles/
|   |   |   |   ├── Style.js
|   |   |   ├── QuizApp.jsx
│   │   ├── TodoApp/
|   |   |   ├── styles/
|   |   |   |   ├── Style.js
|   |   |   ├── TodoApp.jsx
│   │   ├── Translator/
|   |   |   ├── styles/
|   |   |   |   ├── Style.js
|   |   |   ├── LanguageTranslator.jsx
│   └──
│
├── Services/
│   ├── IpService/
|   |   ├── index.js
|   ├── MovieSearchService/
|   |   ├── index.js
|   ├── TodoService/
|   |   ├── index.js
|   ├── TranslatorService/
|   |   ├── index.js
│   └──
|
├── styles/
│   ├── App.css
│   ├── Styles.js
│   └──
│
├── utils/
│   ├── dataQuestions.js
│   ├── quizUtils.js
│   └──
│
└── App.jsx
│
└── main.jsx

```
<br>

## 🚀 Projeto

O projeto é um aplicativo multifuncional, que integra várias ferramentas úteis em uma única plataforma. As principais funcionalidades incluem:

1 - Localizador de IP: Permite encontrar o endereço IP de um dispositivo ou site rapidamente.

2 - Pesquisa de Filmes: Uma aplicação para buscar informações sobre filmes, como sinopse, elenco, e avaliações.

3 - Gerador de QR Codes: Ferramenta para criar QR Codes personalizados, facilitando o compartilhamento de links e informações.

4 - Quiz de Perguntas e Respostas: Um jogo interativo com perguntas em diversos temas, ideal para testar conhecimentos e aprender de forma divertida.

5- Gerenciador de Tarefas: Uma aplicação para organizar e gerenciar tarefas diárias, com funcionalidades como adicionar, editar, e marcar tarefas como concluídas.

6 - Tradutor de Textos: Um tradutor integrado que facilita a tradução de textos entre diferentes idiomas de forma rápida e eficiente.

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
  git clone https://github.com/seu-usuario/multi-app.git
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