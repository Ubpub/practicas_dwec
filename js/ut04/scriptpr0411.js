let lista = document.getElementsByTagName("ul")[0];

let anadir = document.getElementById("add-button");
anadir.addEventListener('click', () => {
    let elemento = addTodo(); // Llama a la función addTodo y almacena su valor
    // Solo se ejecuta si la función no ha devuelto false
    // Devuelve false si el input no contiene nada
    if (elemento != false) {
        lista.append(elemento); // Añade el elemento obtenido a la lista
    }
    console.log(todos);
} );

function addTodo() {
    let elemento = false; // Variable a devolver inicializada a false
    let texto = document.getElementById("input-text");
    // Comprueba que el input no está vacío
    if (texto.value != "") {
        elemento = document.createElement("li");
        elemento.textContent = texto.value; // Asigna el contenido del input al elemento lista
        texto.value = ""; // vacía el contenido del input
    }
    return elemento;
}