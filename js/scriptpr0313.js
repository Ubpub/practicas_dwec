console.log(isIsograma("acondicionar"));

function isIsograma(str) {
    let letras = countLetters(str);
    console.log("Letras: ", letras);
    for (key in letras) {
        console.log("Key: ", key);
        console.log("Letra: ", letras[key]);
        // if (letras[key] = 1) return false;
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