const google = "https://google.com";
const duckduckgo = "https://duckduckgo.com";
const bing = "https://www.bing.com";
const ecosia = "https://www.ecosia.org/";
const wolframalpha = "https://www.wolframalpha.com/";

let links = {
    google: "https://google.com",
    duckduckgo: "https://duckduckgo.com",
    bing: "https://www.bing.com",
    ecosia: "https://www.ecosia.org/",
    wolframalpha: "https://www.wolframalpha.com/",
}

let elementos = document.getElementsByTagName("li");
Array.from(elementos).forEach( (item) => {
    let enlace = document.createElement("a"); // Crea un elemento enlace
    enlace.textContent = item.textContent; // Escribe como texto del enlace el contenido del texto del item
    enlace.href = links[item.textContent.toLowerCase()]; // Almacena el enlace de la posición con mismo nombre del item

    item.textContent = ""; // Elimina el contenido del elemento li
    item.append(enlace); // Añado el enlace creado
} )