console.log(isHeterograma("Villabalter"));

function isHeterograma(str) {
    let letras = countLetters(str);
    for (key in letras) {
        if (letras[key] > 1) return false;
    }
    return true;
}

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