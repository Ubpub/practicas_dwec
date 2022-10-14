console.log(replaceWithPosition("hola amigos"));

function replaceWithPosition(str) {
    str = str.toUpperCase().replace(" ", "").split("");
    let cadena = "";
    for(let char of str) {
        let pos = char.charCodeAt()-64;
        if(pos > 0 && pos < 27) cadena += " " + pos;
        else if (pos > 14 && pos < 27) cadena += " " + (pos + 1);
        else if (pos === 145) cadena += " " + 15;
    }
    return cadena;
}