console.log(replaceWithPosition("hola amigos"));

function replaceWithPosition(str) {
    str = str.toUpperCase().replace(" ", "").split("");
    let cadena = "";
    for(let char of str) {
        let pos = char.charCodeAt()-64;
        cadena += " " + pos;
    }
    return cadena;
}