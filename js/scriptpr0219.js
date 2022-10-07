let num1 = Number(prompt("Introduce el primer número:"));
let num2 = Number(prompt("Introduce el segundo número:"));
console.log(sumOfMults(num1, num2));

function sumOfMults(n, k) {
    let resultado = 0;
    for (let i = 1; i <= k; i++) {
        resultado = resultado + (n*i);
    };
    return resultado;
}