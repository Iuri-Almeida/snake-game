window.onload = function () {
    // referenciar a div#page-landing
    const divPageLanding = document.getElementById('page-landing');

    // criar a div#before-game
    const divBeforeGame = document.createElement('div');
    divBeforeGame.setAttribute('id', 'before-game');
    divPageLanding.appendChild(divBeforeGame);

    // criar a div#popup
    const divPopup = document.createElement('div');
    divPopup.setAttribute('id', 'popup');
    divBeforeGame.appendChild(divPopup);

    // criar main
    const main = document.createElement('main');
    divPopup.appendChild(main);

    // criar a div#popup-content
    const divPopupContent = document.createElement('div');
    divPopupContent.setAttribute('id', 'popup-content');
    main.appendChild(divPopupContent);

    // criar span#welcome
    const spanWelcome = document.createElement('span');
    spanWelcome.appendChild(document.createTextNode('Bem vindo ao jogo da cobrinha!'));
    spanWelcome.setAttribute('id', 'welcome');
    divPopupContent.appendChild(spanWelcome);

    // criar span#commands-info
    const spanCommandsInfo = document.createElement('span');
    spanCommandsInfo.setAttribute('id', 'commands-info');
    divPopupContent.appendChild(spanCommandsInfo);

    // criar span1
    const span1 = document.createElement('span');
    span1.setAttribute('class', 'commands');

    // criar img#up
    const imgUp = document.createElement('img');
    imgUp.setAttribute('id', 'up');
    imgUp.setAttribute('src', './images/arrow.png');
    imgUp.setAttribute('alt', 'Seta pra cima');
    span1.appendChild(imgUp);
    span1.appendChild(document.createTextNode('mover para cima'));
    spanCommandsInfo.appendChild(span1);

    // criar span2
    const span2 = document.createElement('span');
    span2.setAttribute('class', 'commands');

    // criar img#right
    const imgRight = document.createElement('img');
    imgRight.setAttribute('src', './images/arrow.png');
    imgRight.setAttribute('alt', 'Seta pra direita');
    span2.appendChild(imgRight);
    span2.appendChild(document.createTextNode('mover para direita'));
    spanCommandsInfo.appendChild(span2);

    // criar span3
    const span3 = document.createElement('span');
    span3.setAttribute('class', 'commands');

    // criar img#down
    const imgDown = document.createElement('img');
    imgDown.setAttribute('id', 'down');
    imgDown.setAttribute('src', './images/arrow.png');
    imgDown.setAttribute('alt', 'Seta pra baixo');
    span3.appendChild(imgDown);
    span3.appendChild(document.createTextNode('mover para baixo'));
    spanCommandsInfo.appendChild(span3);

    // criar span4
    const span4 = document.createElement('span');
    span4.setAttribute('class', 'commands');

    // criar img#left
    const imgLeft = document.createElement('img');
    imgLeft.setAttribute('id', 'left');
    imgLeft.setAttribute('src', './images/arrow.png');
    imgLeft.setAttribute('alt', 'Seta pra esquerda');
    span4.appendChild(imgLeft);
    span4.appendChild(document.createTextNode('mover para esquerda'));
    spanCommandsInfo.appendChild(span4);

    // criar button#ok-button
    const okButton = document.createElement('button');
    okButton.setAttribute('title', 'Ok');
    okButton.setAttribute('id', 'ok-button');
    okButton.setAttribute('onclick', 'ok(); snakeGame();');
    okButton.appendChild(document.createTextNode("Ok"));
    main.appendChild(okButton);
}