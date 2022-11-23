let tabla = document.querySelector("#tbl-casillas");
let num = 1;

for (let i = 0; i < 10; i++) {
    let fila = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        let casilla = document.createElement("td");
        casilla.textContent = num;
        fila.append(casilla);
        num++;
    }
    tabla.append(fila);
}

tabla.addEventListener('click', (e) => {
    e.target.classList.toggle('selected');
} );
tabla.addEventListener('contextmenu', (e) => {
    e.target.classList.add('right-click');
} )
