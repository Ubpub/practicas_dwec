let parrafosResul = document.getElementsByTagName("p");

let enlaces = document.getElementsByTagName("a");

enlacesGoogle = 0;
Array.from(enlaces).forEach( (item) => {
    if(item.href == "https://www.google.es/") enlacesGoogle++;
} )

let palabras = parrafosResul[1].innerHTML.split(' ').length;

let parrafos = document.getElementById("parrafos");
let segundo_enlace = document.getElementById("segundo-enlace");
let links_google_es = document.getElementById("links-google-es");
let palabras_segundo_parrafo = document.getElementById("palabras-segundo-parrafo");

parrafos.textContent = parrafosResul.length;
segundo_enlace.textContent = enlaces[1].href;
links_google_es.textContent = enlacesGoogle;
palabras_segundo_parrafo.textContent = palabras;
