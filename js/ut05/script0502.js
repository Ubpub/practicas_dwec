let tabla = document.querySelector("#tbl-casillas");

for (let i = 0; i < 10; i++) {
    let num = 1;
    let fila = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        let casilla = document.createElement("td");
        casilla.textContent = num;
        fila.append(casilla);
    }
    tabla.append(fila);
    num++;
}
