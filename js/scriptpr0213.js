let numero = prompt("Introduce un número:");
primerosNumeros(numero);

function primerosNumeros(k) {
    let num = 0;
    let i = 0;
    while (i < k) {
        if(isPrime(num)) {
            console.log(num);
            i++;
        };
        num++;
    };
};

function isPrime(n) {
    if(n == 0 || n == 4) return false;
    for (let x = 2; x < (n / 2); x++) { // (let i = 2; i <= n-1; i++)
        if (n % x == 0) return false;
    }
    return true;
};