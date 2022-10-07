let cadena = prompt("Introduce una cadena para comprobar si es un número:");
console.log(isNumber(cadena));

function isNumber(str) {
    // if (!isNaN(str)) return true;
    // else return false;
    return (!isNaN(str));
}