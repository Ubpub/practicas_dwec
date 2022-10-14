// let cadena = "Hola, me llamo Cecilia Llamazares Lopez";
console.log(countLetters("DAW DWEC"));

function countLetters(str) {
    str = str.toLowerCase();
    let letras = {};
    for (let char of str) { // letras.char = 0;
        if (char != "," && char != " ") {
            if(letras[char] >= 1) letras[char] += 1;
            else letras[char] = 1;
        }
    }
    return letras;
}