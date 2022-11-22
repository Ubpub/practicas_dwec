let todos = [];
let lista = document.getElementsByTagName("ul")[0];

let anadir = document.getElementById("add-button");
anadir.addEventListener('click', () => {
    addTodo();
} );

/*
 * FUNCIONES DEL PROGRAMA
 */

function addTodo() {
    let texto = document.getElementById("input-text");
    if (texto.value != "") {
        let id = generarId();
        todos.push(
            {
                "id": id,
                "name": texto.value,
            }
        );
    }
    lista.textContent = "";
    

    for (let i = 0; i < todos.length; i++) {
        let element = document.createElement("li");
        let marcar = document.createElement("span");
        let boton = document.createElement("span");

        element.classList.add("todo");
        element.textContent = todos[i]['name'];
        element.id = todos[i]['id'];

        marcar.textContent = "X";
        marcar.classList.add("buttonMarcar");
        marcar.setAttribute("data-id", todos[i]['id']);

        marcar.addEventListener('click', (e) => {
            let id = e.target.getAttribute("data-id");
            console.log(id);
            let tareaHecha = document.getElementById(id);
            switch(tareaHecha.classList.value) { // No he conseguido que cambie a verde
                case "todo":
                    tareaHecha.classList.add("done");
                    break;
                case "todo done":
                    tareaHecha.classList.remove("done");
                    break;
            }
            
        });

        boton.classList.add("btn");
        boton.setAttribute("data-id", todos[i]['id']);
        boton.textContent = "Borrar";

        boton.addEventListener('click', (e) => {
            let id = e.target.getAttribute("data-id");
            let index = todos.findIndex(item => item.id == id);
            todos.splice(index, 1);
            addTodo();
        } )

        element.append(marcar);
        element.append(boton);
        lista.append(element);
    }
    texto.value = "";
}

function generarId(){
    let fecha = new Date().getTime();
    let id = 'xx4xxxyxx'.replace(/[xy]/g, item => {
        let num = (fecha + Math.random() * 16) % 16 | 0;
        fecha = Math.floor(fecha / 16);
        return (item == 'x' ? num : (num & 0x3 | 0x8)).toString(16);
    } );
    return id;
}