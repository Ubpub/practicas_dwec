let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getOdd(numeros));

function getOdd(arr) {
    return arr.filter( item => item%2 != 0 );
}