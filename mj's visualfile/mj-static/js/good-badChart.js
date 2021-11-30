const vitD2 = document.querySelector('#vitD2');
const vitD3 = document.querySelector('#vitD3');
const selenium = document.querySelector('#sel');
const total = document.querySelector('#total');
const milk = document.querySelector('#milk');
const nai = document.querySelector('#nai');
const ay = document.querySelector('#ay');




vitD2.addEventListener('mouseover', function () {
    const Div = document.querySelector('.left-container');
    const newCanvas = Div.createElement('canvas');
    newCanvas.classList('vit_d2_element');

    Div.appendChild(newCanvas);



});

