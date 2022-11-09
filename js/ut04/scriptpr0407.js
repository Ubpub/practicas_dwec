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
    ordenAleatorio();
} );

function colocarImagenes() {
    for (let i = 0; i < imagenes.length; i++) {
        let imagen = document.createElement("img");
        imagen.src = `../../imgs/${imagenes[i]}`;
        imagen.alt = imagenes[1];
        div.append(imagen);
    }
}

function ordenAleatorio() {
    imagenes.sort( (a, b) => Math.random() - 0.5 );
    div.textContent = "";
    colocarImagenes();
}