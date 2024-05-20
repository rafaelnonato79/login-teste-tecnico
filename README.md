# B2BIT Sistema de Login - Teste técnico

## link para acesso: https://login-teste-tecnico.vercel.app/

## Descrição do Projeto

Esse projeto foi feito com a intenção de resolver um desafio técnico para vaga de desenvolvedor front-end react. Consiste em um sistema de login que solicita ao usuário o email e senha. Ao entrar com email e senha, o sistema valida as informações em uma API, e caso os dados constem na API, retorna um token que dá acesso à página de perfil do usuário (home). Na página de perfil é mostrado a foto do usuário, seu nome e seu email de acordo com o banco de dados. O token é guardado no localStorage que não permite que o usuário seja deslogado ao recarregar a página, deslogando apenas se apertar no botão logout que consta na página home no canto superior direito, que desloga o usuário e redireciona para página de login.

## Tecnologias Utilizadas

- React com TypeScript

## Dependências

    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.97",
    "@types/react": "^18.3.2",
    "@types/react-dom": "^18.3.0",
    "axios": "^1.6.8",
    "formik": "^2.4.6",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.23.1",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4",
    "yup": "^1.4.0"
    

## Como Instalar e Usar
- Instalação:
    * Ter um IDE instalada no computador.
    * Caso não tenha, instalar o Node.js e npm.
    * Fazer uma cópia do repositório
    * Abrir o terminal da IDE e digitar "npm start" para dá inicio ao aplicativo.
- Como usar:
    * A primeira página é a de Login, deve ser inserido email e senha.
    * Para ter sucesso no login, por favor inserir os seguintes dados:
          email: cliente@youdrive.com
          senha: password
    * Com login efetudo será redirecionado para página home com dados do usuário
    * Para fazer logout, deve se clica no botão com o nome "logout" no canto superior direito.  
    

## Contribuições
Até o momento, não há diretrizes específicas para contribuições. Sinta-se à vontade para abrir issues ou enviar pull requests.

