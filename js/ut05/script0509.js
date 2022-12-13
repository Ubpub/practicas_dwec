let loginReg = document.querySelector('#boton');
let divOpaco = document.querySelector('#modal');
let formulario = document.querySelector('#formulario');
let alerta = document.querySelector('#alert');

renderPage(); // Inicializa la página

function renderPage() {
    loginReg.addEventListener('click', openForm); // Abre un formulario al pulsar el botón
}

function openForm() {

    // Inicialización de las variables del formulario
    let login = document.querySelector('#login');
    let register = document.querySelector('#register');
    let close = document.querySelector('.closeX');
    let loginForm = document.querySelector('#loginForm');
    let registerForm = document.querySelector('#registerForm');
    let loginBtn = document.querySelector('#loginBtn');
    let registerBtn = document.querySelector('#registerBtn');

    divOpaco.style.display = "block"; // Muestro el fondo negro transparente
    formulario.style.display = "block"; // Muestro el formulario
    loginForm.style.display = "block"; // Muestro el formulario de login
    registerForm.style.display = "none"; // Oculto si está abierto el formulario de registro

    // Cuando pulsa login muestra su formulario y oculta el de registro
    login.addEventListener('click', () => {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });

    // Cuando pulsa register muestra su formuario y oculta el de login
    register.addEventListener('click', () => {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });
    close.addEventListener('click', closeForm); // Cierra el formulario

    loginBtn.addEventListener('click', checkLogin); // Comprueba los campos del login
    registerBtn.addEventListener('click', checkRegister); // Comprueba los campos del register
}

// Comprueba los campos del login
function checkLogin() {

    // Inicialización de variables
    let email = document.querySelector('#emailInputLogin').value;
    let password = document.querySelector('#passLogin').value;

    // Comprueba cada campo y crea una alerta para cada uno de ellos
    if (email == "") {
        createAlert('Campo Email no se puede dejar vacío');
    } else if (password == "") {
        createAlert('Campo Contraseña no se puede dejar vacío');

    } else {
        if (!(email.includes('@') && email.includes('.'))) {
            createAlert('Email no válido');
        } else if (password.length < 8) {
            createAlert('La contraseña debe tener al menos 8 caracteres');
        }
        else {
            // Si los campos están bien, cierra la alerta e imprime los valores recibidos
            closeAlert();
            console.log("Correo:", email);
            console.log("Contraseña:", password);
        }
    }
}

// Comprueba los campos del register
function checkRegister() {

    // Inicialización de variables
    let name = document.querySelector('#nameInput').value;
    let email = document.querySelector('#emailInputReg').value;
    let password = document.querySelector('#passReg').value;

    // Comprueba cada campo y crea una alerta para cada uno de ellos
    if (name == "") {
        createAlert('Campo Nombre no se puede dejar vacío');
    } else if (email == "") {
        createAlert('Campo Email no se puede dejar vacío');
    } else if (password == "") {
        createAlert('Campo Contraseña no se puede dejar vacío');

    } else {
        if (!(email.includes('@') && email.includes('.'))) {
            createAlert('Email no válido');
        } else if (password.length < 8) {
            createAlert('La contraseña debe tener al menos 8 caracteres');
        }
        else {
            // Si los campos están bien, cierra la alerta e imprime los valores recibidos
            closeAlert();
            console.log("Nombre:", name);
            console.log("Correo:", email);
            console.log("Contraseña:", password);
        }
    }
}

// Crea una alerta con un mensaje
function createAlert(mensaje) {
    alerta.style.display = "block";
    alerta.textContent = mensaje;
    // La altura cambia el formulario para que los elementos no se salgan de él
    formulario.style.height = '21em';
}

// Oculta la alerta
function closeAlert() {
    alerta.textContent = "";
    alerta.style.display = "none";
    formulario.style.height = '20em';
}

// Cierra el formulario
function closeForm() {
    alerta.style.display = "none";
    formulario.style.display = "none";
    divOpaco.style.display = "none";
}
