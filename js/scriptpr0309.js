console.log(removeVowels("IES Villabalter de San Andres"));

function removeVowels (str) {
    str = str.toLowerCase();
    let resultado = "";
    for (let char of str) {
        if (
            (char != "a") &&
            (char != "e") &&
            (char != "i") &&
            (char != "o") &&
            (char != "u"))
        {
            resultado = resultado + char;
        }
    }
    return resultado;
}