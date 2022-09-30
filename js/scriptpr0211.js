let numero = prompt("Introduce un núemro");
while(isNaN(numero) || numero == "" || numero == null || numero <= 0) {
    numero = prompt("Introduce un número");
}
let resultado = "impar";
if((numero % 2) == 0) {
    resultado = "par";
}
alert(`El número es ${ resultado }`);