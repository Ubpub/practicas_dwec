let numero = prompt("Introduce un número:");
console.log(getFibonacciAt(numero));

function getFibonacciAt(n) {
    if (n <= 1) return n;
    return (n - 1) + (n - 2);
}