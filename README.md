## CRUD REACT NODE JS MONGODB COM DOCKER

# Sobre
API RESTFul backend e frontend baseada em CRUD de Produto com autenticação de usuario

Backend contem as seguintes tecnologias:

- [Docker](https://www.docker.com/) como o serviço de contêiner para isolar o ambiente.
- [Node.js](https://nodejs.org/en/) como ambiente de execução Javascript no servidor.
- [Express.js](https://expressjs.com/) como a camada de estrutura / controlador do servidor.
- [MongoDB](https://www.mongodb.com/) como banco de dados que servirá aplicação.
- [Mongoose](https://mongoosejs.com/) como a camada de modelo.

Frontend contem as seguintes tecnologias:
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
  
  
## Documentações Utilizadas
https://docs.docker.com/docsarchive/

https://nodejs.org/en/docs/

https://expressjs.com/en/4x/api.html

https://mongodb.github.io/node-mongodb-native/3.5/

https://mongoosejs.com/docs/api.html

https://pt-br.reactjs.org/docs/getting-started.html

https://www.npmjs.com/package/axios

https://github.com/ReactTraining/react-router

## Referências
https://mherman.org/blog/dockerizing-a-react-app/

https://www.digitalocean.com/community/tutorials/como-construir-uma-aplicacao-node-js-com-o-docker-pt

https://medium.com/@lameckanao/fazendo-um-crud-com-node-js-mongodb-e-docker-70ee6c8da8ca

## Videos
https://www.youtube.com/watch?v=BN_8bCfVp88&list=PL85ITvJ7FLoiXVwHXeOsOuVppGbBzo2dp

https://www.youtube.com/watch?v=lJsgUOj73zg&t=2895s
