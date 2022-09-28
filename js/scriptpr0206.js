let numeroN = prompt("Introduce un número");
// while(!(numeroN < Infinity) && !(numeroN > -Infinity) || numeroN == null) { // Uso del infinito para comprobar
while(isNaN(numeroN) || numeroN == "" || numeroN == null) {
    numeroN = prompt("Número no válido, vuelve a introducir un número");
}

let numeroK = prompt("Introduce otro número");
// while(!(numeroK < Infinity) && !(numeroK > -Infinity) || numeroK == null) {
while(isNaN(numeroK) || numeroK == "" || numeroK == null) {
    numeroK = prompt("Número no válido, vuelve a introducir otro número");
}

for(let i = 1; i <= numeroK; i++) {
    let multiplicacion = `${ numeroN } * ${ i }`;
    let resultado = numeroN * i;
    console.log(`${ multiplicacion } = ${ resultado }`);
}