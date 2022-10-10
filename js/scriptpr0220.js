let numero = Number(prompt("Introduce un número:"));
console.log(getFibonacciAt(numero));

function getFibonacciAt(n) {
    if (n < 0) return "Es imposible";
    else if (n <= 1) return n;
    else {
        let num1 = 0;
        let num2 = 1;
        for (let i = 2; i < n; i++) {
            let temp = num1 + num2;
            num1 = num2;
            num2 = temp;
        }
        return num2;
    }
}

function funcionRecursiva(n) {
    if (n == 0 || n == 1) return n;
    else return funcionRecursiva(n-1) + funcionRecursiva(n-2);
}