function snakeGame () {
    // referenciando a tag canvas, onde ficará o jogo
    var stage = document.getElementById('snake-game');

    // referenciando qual o contexto do jogo (2d)
    var contexto = stage.getContext("2d");

    // monitorando os cliques, toda vez que uma tecla for apertada, chamar a função keyPush
    document.addEventListener("keydown", keyPush);

    // chamando a função game
    setInterval(game, 110);

    // definindo algumas variáveis

    // * velocidade da cobra (anda 1 casinha)
    const vel = 1;

    // * velocidade X e Y
    var velX = velY = 0;

    // * iniciando a cobrinha nos pontos X e Y
    var posicaoX = 15;
    var posicaoY = 7;

    // * definindo o tamanho dos quadradinhos
    var tamanhoQuadrado = 10;

    // * definindo a quantidade de quadradinhos
    var quantidadeX = 30;
    var quantidadeY = 15;

    // * definindo a posição inicial da comida
    var comidaX = 25;
    var comidaY = 7;

    // * criando o rastro da cobrinha
    var rastro = [];

    // * criando o tamanho da cobrinha
    rabo = 1;

    function game () {
        posicaoX += velX;
        posicaoY += velY;

        // se a cobra chegar a borda esquerda, passe ela pro lado direito
        if (posicaoX < 0) {
            posicaoX = quantidadeX - 1;
        }

        // se a cobra chegar a borda direita, passe ela pro lado esquerdo
        if (posicaoX > quantidadeX - 1) {
            posicaoX = 0;
        }

        // se a cobra chegar a borda superior, passe ela para baixo
        if (posicaoY < 0) {
            posicaoY = quantidadeY - 1;
        }
        
        // se a cobra chegar a borda inferior, passe ela para cima
        if (posicaoY > quantidadeY - 1) {
            posicaoY = 0;
        }

        // preenchendo o fundo do stage
        contexto.fillStyle = "black";
        // dizendo de onde deve começar a preencher e até onde parar
        contexto.fillRect(0,0, stage.width, stage.height);

        // preenchendo o quadradinho da comida
        contexto.fillStyle = "red";
        // dizendo onde deve pintar
        contexto.fillRect(comidaX * tamanhoQuadrado, comidaY * tamanhoQuadrado, tamanhoQuadrado - 1,tamanhoQuadrado - 1);

        // preenchendo o rastro da cobra
        contexto.fillStyle = "green";
        // para cada quadradinho de rastro, preencha esses quadradinhos
        for (var i = 0; i < rastro.length; i++) {
            // dizendo onde deve pintar
            contexto.fillRect(rastro[i].x * tamanhoQuadrado, rastro[i].y * tamanhoQuadrado, tamanhoQuadrado - 1,tamanhoQuadrado - 1);

            // se a cabeça da cobra encostar alguma parte do seu rasto, perde
            if (rastro[i].x == posicaoX && rastro[i].y == posicaoY) {
                // se o tamanho da cobra for maior que o inicial, é porque perdeu
                if (rabo > 1) {
                    // chamar a pontuação
                    var tamanhoCobra = rabo - 1;
                    createElement(tamanhoCobra);
                }

                // parar a cobra
                velX = velY = 0;

                // voltar ao tamanho inicial do rabo
                rabo = 1;

                // voltar a cobra para a posiçnao inicial
                posicaoX = 15;
                posicaoY = 7;

                // voltar a comida para a posição inicial
                comidaX = 25;
                comidaY = 7;

                // voltar ao rastro inicial (0)
                rastro = [];
            }
        }

        // se ele não bateu no seu rastro, adicionar
        var posicao = { x:posicaoX, y:posicaoY };
        rastro.push(posicao);

        // enquanto o tamanho do rastro for maior que o rabo, retire o último quadradinho
        while (rastro.length > rabo) {
            rastro.shift();
        }

        // se a cobra comer a comida, adicionar um novo rabo
        if (comidaX == posicaoX && comidaY == posicaoY){
            rabo++;

            // reposicionar, aleatoriamente, a comida na tela
            comidaX = Math.floor(Math.random() * quantidadeX);
            comidaY = Math.floor(Math.random() * quantidadeY);

            // criando arrays vazios para armazenar as posições atuais do rastro
            var rastroX = [];
            var rastroY = [];

            // adicionando as posições X no array X e Y no array Y
            for (let i in rastro) {
                rastroX.push(rastro[i].x);
                rastroY.push(rastro[i].y);
            }

            // enquanto a posição da comida bater exatamente onde está o rastro do rabo, coloque a comida em um novo lugar
            while (rastroX.indexOf(comidaX) != -1 && rastroY.indexOf(comidaY) != -1) {
                comidaX = Math.floor(Math.random() * quantidadeX);
                comidaY = Math.floor(Math.random() * quantidadeY);
            }
        }

    }

    function keyPush (event) {
        switch (event.keyCode) {
            // Left
            case 37:
                velX = -vel;
                velY = 0;
                break;

            // up
            case 38:
                velX = 0;
                velY = -vel;
                break;

            // right
            case 39:
                velX = vel;
                velY = 0;
                break;

            // down
            case 40:
                velX = 0;
                velY = vel;
                break;
        }


    }

}

function createElement (tamanhoCobra) {
    // referenciar a div#page-landing
    const divPageLanding = document.getElementById('page-landing');

    // criar div#after-game
    const divAfterGame = document.createElement('div');
    divAfterGame.setAttribute('id', 'after-game');
    divAfterGame.setAttribute('class', 'animate-up');
    divPageLanding.appendChild(divAfterGame);

    // criar div#popup
    const divPopup = document.createElement('div');
    divPopup.setAttribute('id', 'popup');
    divAfterGame.appendChild(divPopup);

    // criar main
    const main = document.createElement('main');
    divPopup.appendChild(main);

    // criar div#popup-content
    const divPopupContent = document.createElement('div');
    divPopupContent.setAttribute('id', 'popup-content');
    main.appendChild(divPopupContent);

    // criar span1
    const span1 = document.createElement('span');
    span1.appendChild(document.createTextNode("Parabéns! Você marcou"));
    divPopupContent.appendChild(span1);

    // criar span2
    const span2 = document.createElement('span');
    span2.setAttribute('id', 'score');
    span2.appendChild(document.createTextNode(tamanhoCobra));
    divPopupContent.appendChild(span2);

    // criar span3
    const span3 = document.createElement('span');
    span3.appendChild(document.createTextNode("pontos!"));
    divPopupContent.appendChild(span3);

    // criar form#popup-form
    const form = document.createElement('form');
    form.setAttribute('id', 'popup-form');
    form.setAttribute('action', '/save-score');
    form.setAttribute('method', 'post');
    main.appendChild(form);

    // criar inputName
    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('name', 'name');
    inputName.setAttribute('placeholder', 'Digite seu nome');
    inputName.setAttribute('required', '');
    inputName.setAttribute('maxLength', '12');
    form.appendChild(inputName);

    // criar inputScore
    const inputScore = document.createElement('input');
    inputScore.setAttribute('type', 'hidden');
    inputScore.setAttribute('name', 'score');
    inputScore.setAttribute('value', tamanhoCobra);
    form.appendChild(inputScore);

    // criar span4
    const span4 = document.createElement('span');
    span4.appendChild(document.createTextNode('Máximo de 12 caracteres'));
    form.appendChild(span4);

    // criar button
    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.setAttribute('title', 'Salvar');
    button.appendChild(document.createTextNode("Salvar"));
    form.appendChild(button);
}