let boton = document.querySelector('#button');
let correo = document.querySelector('#correo');
let pass1 = document.querySelector('#pass1');
let pass2 = document.querySelector('#pass2');
let seguridad = document.querySelector('#segura');
let tipoPass = document.querySelector('.tipoPass');

let minusculas = "a b c d e f g h i j k l m n ñ o p q r s t u v w x y z".split(" ");
let mayusculas = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z".split(" ");
let numeros = "1 2 3 4 5 6 7 8 9".split(" ");
let simbolos = "@ ¿ ? ¡ ! # ~ % & / ( ) · \\ * ç".split(" ");

let num = false;
let min = false;
let may = false;
let simb = false;

let hasNum = false;
let hasMin = false;
let hasMay = false;
let hasSimb = false;


boton.addEventListener('click', comprobarCredenciales)
correo.onblur = comprobarCredenciales;

pass1.addEventListener('input', checkSecurity);

function comprobarCredenciales(e) {
    if ((!correo.value.includes("@") || !correo.value.includes(".") || correo.value == "") || 
        (pass1.value.length == 0) ||
        (pass1.value != pass2.value)) {
        console.log("CAMPOS NO ACEPTABLES");
    } else {
        console.log("Correo:", correo.value);
        console.log("Contraseña:", pass1.value);
    }
}

function checkSecurity(e) {
    let puntos = Math.trunc(e.target.value.length / 3);
    console.log("PUNTOS ANTES", puntos);
    console.log(pass1.value.length);
    checkPass();
    if (num && !hasNum) { 
        puntos++;
        console.log("SUMA 1");
        hasNum = true;
    }
    if (min && !hasMin) {
        puntos++;
        console.log("SUMA 2");
        hasMin = true;
    }
    if (may && !hasMay) {
        puntos ++;
        console.log("SUMA 3");
        hasMay = true;
    }
    if (simb && !hasSimb) {
        puntos++;
        console.log("SUMA 4");
        hasSimb = true;
    }
    console.log("PUNTOS DESPUÉS", puntos);
    seguridad.value = puntos <= 4 ? 0 :
                      puntos <= 5 ? 1 :
                      puntos <= 7 ? 2 :
                      puntos <= 8 ? 3 :
                      4;
    tipoPass.textContent = seguridad.value == 0 ? "Muy débil" :
                           seguridad.value == 1 ? "Débil" :
                           seguridad.value == 2 ? "Aceptable" :
                           seguridad.value == 3 ? "Fuerte" :
                           "Muy segura";
    console.log("SEG", seguridad.value);
    console.log("pass", pass1.value.length);
}

function checkPass(e) {
    console.log(pass1.value);

    numeros.forEach( (numero) => { if (pass1.value.includes(numero)) num = true; } );
    minusculas.forEach( letra => { if (pass1.value.includes(letra)) min = true; } );
    mayusculas.forEach( letra => { if (pass1.value.includes(letra)) may = true; } );
    simbolos.forEach( simbolo => { if (pass1.value.includes(simbolo)) simb = true; } );
    
    console.log("NÚMEROS:", num);
    console.log("MINÚSCULAS", min);
    console.log("MAYÚSCULAS", may);
    console.log("SÍMBOLOS", simb);
}