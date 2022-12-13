let loginReg = document.querySelector('#boton');
let divOpaco = document.querySelector('#modal');
let formulario = document.querySelector('#formulario');
let alerta = document.querySelector('#alert');

renderPage();

function renderPage() {
    loginReg.addEventListener('click', openForm);
}

function openForm() {
    let login = document.querySelector('#login');
    let register = document.querySelector('#register');
    let close = document.querySelector('.closeX');
    let loginForm = document.querySelector('#loginForm');
    let registerForm = document.querySelector('#registerForm');
    let loginBtn = document.querySelector('#loginBtn');
    let registerBtn = document.querySelector('#registerBtn');

    divOpaco.style.display = "block";
    formulario.style.display = "block";
    loginForm.style.display = "block";
    registerForm.style.display = "none";

    login.addEventListener('click', () => {
        registerForm.style.display = "none";
        loginForm.style.display = "block";
    });
    register.addEventListener('click', () => {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    });
    close.addEventListener('click', closeForm);

    loginBtn.addEventListener('click', checkLogin);
    registerBtn.addEventListener('click', checkRegister);
}

function closeForm() {
    alerta.style.display = "none";
    formulario.style.display = "none";
    divOpaco.style.display = "none";
}

function checkLogin() {
    let email = document.querySelector('#emailInputLogin').value;
    let password = document.querySelector('#passLogin').value;
    let altura = '21em';
    if (email == "") {
        createAlert('Campo Email no se puede dejar vacío', altura);
    } else if (password == "") {
        createAlert('Campo Contraseña no se puede dejar vacío', altura);

    } else {
        if (!(email.includes('@') && email.includes('.'))) {
            createAlert('Email no válido', altura);
        } else if (password.length < 8) {
            createAlert('La contraseña debe tener al menos 8 caracteres', altura);
        }
        else {
            closeAlert();
            console.log("Correo:", email);
            console.log("Contraseña:", password);
        }
    }
}

function checkRegister() {
    let name = document.querySelector('#nameInput').value;
    let email = document.querySelector('#emailInputReg').value;
    let password = document.querySelector('#passReg').value;
    let altura = '21em';
    if (name == "") {
        createAlert('Campo Nombre no se puede dejar vacío', altura);
    } else if (email == "") {
        createAlert('Campo Email no se puede dejar vacío', altura);
    } else if (password == "") {
        createAlert('Campo Contraseña no se puede dejar vacío', altura);

    } else {
        if (!(email.includes('@') && email.includes('.'))) {
            createAlert('Email no válido', altura);
        } else if (password.length < 8) {
            createAlert('La contraseña debe tener al menos 8 caracteres', altura);
        }
        else {
            closeAlert();
            console.log("Nombre:", name);
            console.log("Correo:", email);
            console.log("Contraseña:", password);
        }
    }
}

function createAlert(mensaje, altura) {
    alerta.style.display = "block";
    alerta.textContent = mensaje;
    formulario.style.height = altura;
}

function closeAlert() {
    alerta.textContent = "";
    alerta.style.display = "none";
    formulario.style.height = '20em';
}
