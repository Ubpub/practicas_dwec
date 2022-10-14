let cadena = "Hola, me llamo Cecilia Llamazares Lopez";
console.log(countVowels(cadena));

function countVowels(str) {
    str = str.toLowerCase();
    let vocales = 0;
    for (let char of str) {
        if (
            (char == "a") || 
            (char == "e") ||
            (char == "i") ||
            (char == "o") ||
            (char == "u"))
        {
            vocales += 1;
        }
    }
    return "Vocales totales: " + vocales;
}