let numero = prompt("Introduce un número:");
console.log(getFibonacciAt(numero));

function getFibonacciAt(n) {
    if (n < 0) return "Es imposible";
    else if (n <= 1) return n;
    else {
        let num1 = 0;
        let num2 = 1;
        let suma = 0;
        for (let i = 0; i < n; i++) {
            suma = num1 + num2;
            num1 = num2;
            num2 = suma;
        }
        return num2;
    }

}