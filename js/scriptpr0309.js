console.log(removeVowels("IES Villabalter de San Andres"));

function removeVowels (str) {
    let resultado = "";
    const vocales = "aeiouAEIOU";
    for (let char of str) {
        if (!vocales.includes(char)) {
            resultado = resultado + char;
        }
    }
    return resultado;
}