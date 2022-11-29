let hanged = document.querySelector('#hanged');
let espacioDiv = document.querySelector('#spaces');
let keyboard = document.querySelector('#keyboard');
let msg = document.querySelector('#msg');

let palabra = words[Math.trunc(Math.random() * words.length)];
let letras = "a b c d e f g h i j k l m n ñ o p q r s t u v w x y z".split(" ");
let restantes = palabra.length;
let fallos = 0;
console.log(palabra);
renderScreen();

function loadImage() {
    let img = document.createElement('img');
    img.src = "../imgs/hangman/hangman_00.png";
    hanged.append(img);
}

function renderScreen() {
    loadImage();
    for (let i = 0; i < palabra.length; i++) {
        let espacio = document.createElement('span');
        espacio.classList.add('space');
        espacio.setAttribute('data-id', palabra[i]);
        espacioDiv.append(espacio);
    }
    for(let i = 0; i < letras.length; i++) {
        let letra = document.createElement('span');
        letra.classList.add('key');
        letra.setAttribute("onmousedown", "return false");
        letra.textContent = letras[i];
        letra.setAttribute('key', letra.textContent);
        letra.setAttribute('code', letra.textContent);
        keyboard.append(letra);
    }
    keyboard.addEventListener('click', pulsarLetra);
    keyboard.addEventListener('keydown', pulsarTeclado);
}

function pulsarTeclado(e) {
    console.log(`Pulsada tecla ${e.target.key} - Valor de repeat: ${e.target.repeat}`)
}

function pulsarLetra(e) {
    if (e.target.textContent.length < 2) {
        if (palabra.includes(e.target.textContent)) {
            e.target.classList.add('succeed');
            let acertadas = document.querySelectorAll(`span[data-id=${e.target.textContent}]`);
            Array.from(acertadas).forEach( item => item.textContent = e.target.textContent);
            restantes -= acertadas.length;
            if (restantes == 0) {
                msg.style.background = "green";
                msg.textContent = "Has ganado";
            }
        } else {
            fallos++;
            e.target.classList.add('fail');
            changeImage();
        }
    }
}
function changeImage() {
    let img = document.querySelector('img');
    img.src = `../imgs/hangman/hangman_0${ fallos }.png`;
    if (fallos == 9) {
        msg.style.background = "red";
        msg.textContent = "Has fallado";
    }
}
