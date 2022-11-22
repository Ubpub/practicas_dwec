let imagenes = [
    "mountain_1.jpg",
    "mountain_2.jpg",
    "mountain_3.jpg",
    "mountain_4.jpg",
    "mountain_5.jpg",
]

let div = document.getElementsByClassName('images')[0];
colocarImagenes();

let boton = document.getElementById("button");
boton.addEventListener('click', () => {
    moverDerecha();
} );

function colocarImagenes() {
    for (let i = 0; i < imagenes.length; i++) {
        let imagen = document.createElement("img");
        imagen.src = `../../imgs/${imagenes[i]}`;
        imagen.alt = imagenes[i];
        div.append(imagen);
    }
}

function moverDerecha() {
    imagenes.unshift(imagenes.pop());
    div.textContent = "";
    colocarImagenes();
}
