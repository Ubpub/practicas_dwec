let loginReg = document.querySelector('#boton');
console.log(loginReg);

function renderPage() {
    loginReg.addEventListener('click', openForm);
}

function openForm(e) {
    console.log("HOLA");
}