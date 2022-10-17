console.log(replaceWithPositionV2("hola amigos"));

function replaceWithPosition(str) {
    str = str.toUpperCase().replace(" ", "").split("");
    let cadena = "";
    for(let char of str) {
        let pos = char.charCodeAt()-64;
        cadena += " " + pos;
    }
    return cadena;
}

// Se puede hacer con una cadena y obteniendo el índice

function replaceWithPositionV2(str) {
    str = str.toUpperCase().replace(" ", "").split("");
    let cadena = "";
    for (let char of str) {
        let pos = parseInt(char, 36) -9;
        cadena += " " + pos;
    }
    return cadena;
}