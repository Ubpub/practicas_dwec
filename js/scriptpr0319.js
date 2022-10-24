let numeros = [1, 6, 3, 9, 10, 7, 5];
console.log(max(numeros));

function max(arr) {
    return arr.reduce( (acum, item) => Math.max(acum, item), -Infinity );
}