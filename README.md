## CRUD REACT NODE JS MONGODB COM DOCKER

# Sobre
API RESTFul backend e frontend baseada em CRUD de Produto com autenticação de usuario

Backend contem as seguintes partes:

- [Docker](https://www.docker.com/) como o serviço de contêiner para isolar o ambiente.
- [Node.js](https://nodejs.org/en/) como ambiente de execução Javascript no servidor.
- [Express.js](https://expressjs.com/) como a camada de estrutura / controlador do servidor.
- [MongoDB](https://www.mongodb.com/) como banco de dados que servirá aplicação.
- [Mongoose](https://mongoosejs.com/) como a camada de modelo.

Frontend contem as seguintes partes:
- [React](https://pt-br.reactjs.org/) para crição das interfaces de usuário.
- [Axios](https://www.npmjs.com/package/axios) para fazer requisições HTTP no backend nodejs.
- [React Rounter](https://github.com/ReactTraining/react-router) para gerencia as rotas.


# Como Instalar e Usar
Você precisará primeiro baixar e instalar o [Docker Desktop](https://www.docker.com/products/docker-desktop) ou [Linux](https://docs.docker.com/install/linux/docker-ce/ubuntu/), agora segue passo a passo abaixo.

- Faça um Fork ou Clone do Repositório.
- Abre a pasta em um Terminal, Command Prompt ou Shell e execulte `docker-compose up` para iniciar os containers, sendo eles:
  - DB-SERVER contendo o mongodb (banco de dados NoSQL).
  - BACKEND-SERVER contendo nodejs (api backend).
  - FRONTEND-SERVER contendo react (frontend).

- Para acessar utilize as seguintes URLs
  - API Node.js Backend: `http://localhost:8282/`
  - Interfaces React Frontend: `http://localhost:3000/`
