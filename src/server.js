const express = require('express');

const path = require('path');

const pages = require('./pages.js');

const server = express();

server

    // usar body do request
    .use(express.urlencoded({ extended: true }))

    // tornar todos os arquivos da pasta public estáticos
    .use(express.static('public'))

    // configurar Template Engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // rota da aplicação
    .get('/', pages.index)
    .post('/save-score', pages.saveScore)

server.listen(5500);