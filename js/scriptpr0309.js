console.log(removeVowelsv2("IES Villabalter de San Andres"));

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

function removeVowelsv2 (str) {
    return str.split("")
              .filter( item => !"aeiouAEIOU".includes(item) )
              .join("");
};