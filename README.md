# CRUD - Master Detail (Angular 7+)

O projeto foi desenvolvido com aulas do curso ["Angular Avançado: Criando uma Arquitetura Master/Detail" do Nonato Costa](https://www.udemy.com/course/angular-avancado/), onde a proposta do curso é desenvolver uma aplicação **front-end** através de reaproveitamento de código e componentização com a arquitetura **Master/Detail**.

## Sobre o projeto

Durante o curso, a ideia é criar um "Gerenciador Financeiro Pessoal", chamado **"Finansys"**, onde o usuário gerencia suas contas, incluindo, editando, visualizando e excluindo o que desejar, além disso, gerar um relatório mensal com gráficos.

## Visualizar o projeto em modo de desenvolvimento

Faça o clone do repositório:

``
git clone https://github.com/nicolasaigner/crud-master-detail.git
``

Após finalizar, acesse a pasta do projeto:

``
cd crud-master-detail
``

Instale as dependências:

``
npm install
``

E "sirva" com o comando do Angular:

``
npm run start
``

Acesse o host abaixo em seu navegador:

``
http://localhost:4200/
``

## Visualizar o projeto em produção:

## Manualmente

Se você quiser ver o projeto rodando em produção mas em um servidor localhost ou em cloud com nginx:

Faça o clone do repositório:

``
git clone https://github.com/nicolasaigner/crud-master-detail.git
``

Após finalizar, acesse a pasta do projeto:

``
cd crud-master-detail
``

Instale as dependências:

``
npm install
``

Realize o build:

``
npm run build
``

Quando finalizar, copie os arquivos:

./dist/finansys

Para a pasta onde o Nginx serve seus projetos:

/nginx/html

E utilize o nginx.conf para servir a página:

`` 
server {
  listen 80;
  location / {
    root /usr/share/nginx/html;
    index index.html index.htm;
    try_files $uri $uri/ /index.html =404;
  }
}
``

Após isso, acesse o host abaixo em seu navegador:

``
http://localhost
``

## Docker

Com Docker fica mais fácil, basta fazer o comando:

``
docker run --name finansys -p 8081:80 -d nicolasaigner/crud-master-detail:latest
``

Após isso, acesse o host abaixo em seu navegador:

``
http://localhost:8081
``

Lembrando que a porta 80 é a porta padrão de exposição do container e a porta 8081 é a porta que você pode colocar você acessar pelo seu navegador.
