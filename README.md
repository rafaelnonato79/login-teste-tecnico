# B2BIT Sistema de Login

## Descrição do Projeto

Esse projeto foi feito com a intenção de resolver um desafio técnico para vaga de desenvolvedor front-end react. Consiste em um sistema de login que solicita ao usuário o email e senha. Ao entrar com email e senha, o sistema valida as informações em uma API, e caso os dados constem na API, retorna um token que dá acesso à página de perfil do usuário (home). Na página de perfil é mostrado a foto do usuário, seu nome e seu email de acordo com o banco de dados. O token é guardado no localStorage que não permite que o usuário seja deslogado ao recarregar a página, deslogando apenas se apertar no botão logout que consta na página home no canto superior direito, que desloga o usuário e redireciona para página de login.

## Tecnologias Utilizadas

- React com TypeScript

## Dependências

```json
"dependencies": {
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
    
}
## Como Instalar e Usar

Com o repositório na máquina, o usuário deve ter uma IDE, Node e JavaScript instalado. Com isso instalado, deve ir até o terminal e digitar npm start.

## Contribuições
Até o momento, não há diretrizes específicas para contribuições. Sinta-se à vontade para abrir issues ou enviar pull requests.

