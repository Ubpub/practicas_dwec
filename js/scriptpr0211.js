let numero = prompt("Introduce un núemro");
while(isNaN(numero) || numero == "" || numero == null || numero <= 0) {
    numero = prompt("Introduce un número");
}
let resultado = "El número es impar";
if((numero % 2) == 0) {
    resultado = "El número es par";
}
alert(resultado);