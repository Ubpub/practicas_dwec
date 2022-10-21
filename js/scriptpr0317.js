let numeros = [1, 5, 23, 7, 18];
console.log(createPow(numeros, 3))

function createPow(arr, pow) {
    return arr.map( item => item**pow );
}