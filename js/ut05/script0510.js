let patrones = {
    "fecha": /^(0[1-9]|1\d|2\d|3[0-1])\/(0[1-9]|1[0-2])\/([1-2][0-9]{3})$/,
    "numero": /^(\(\+\d{2}\))\s*((\d{3}\s\d{6})$|(\d{9}$))/,
    "correo": /^\w+[-]*\w+@(mail(.com|.es)|educa.jcyl.es)$/,
    "color": /^#([a-f0-9]{6}|[A-F0-9]{6})$/,
    "ip": /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9])\.((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){2}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    "url": /^(http|https)\:\/\/(www\.)?\w+\.(com|es|org)$/,
    "contrasena": /^(?=.*)(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
    "nif": /^\d{8}[A-Z]$/,
    "matricula": /^\d{4}[A-Z]{3}$/,
}

renderPage();

function renderPage() {
    let btn_submit = document.querySelector('#btn-submit');
    console.log(btn_submit);
    btn_submit.addEventListener('click', recogerCampos);
}

function recogerCampos() {
    let valido = false;
    let ajustado = "";
    let fecha = document.querySelector('#fecha');
    let numero = document.querySelector('#numero');
    let correo = document.querySelector('#correo');
    let color = document.querySelector('#color');
    let ip = document.querySelector('#ip');
    let url = document.querySelector('#url');
    let contrasena = document.querySelector('#contrasena');
    let nif = document.querySelector('#nif');
    let matricula = document.querySelector('#matricula');

    console.log("------------");
    if (fecha.value != "") {
        valido = comprobarCampos(fecha);
        if (!valido) ajustado = "NO ";
        else ajustado = "";
        console.log(`La fecha ${ ajustado }se ajusta a la expresión regular`);
    }
    if (numero.value != "") {
        valido = comprobarCampos(numero);
        if (!valido) ajustado = "NO ";
        else ajustado = "";
        console.log(`El número ${ ajustado }se ajusta a la expresión regular`);
    }
    if (correo.value != "") {
        valido = comprobarCampos(correo);
        if (!valido) ajustado = "NO ";
        else ajustado = "";
        console.log(`El correo ${ ajustado }se ajusta a la expresión regular`);
    }
    if (color.value != "") {
        valido = comprobarCampos(color);
        if (!valido) ajustado = "NO ";
        else ajustado = "";
        console.log(`El color ${ ajustado }se ajusta a la expresión regular`);
    }
    if (ip.value != "") {
        valido = comprobarCampos(ip);
        if (!valido) ajustado = "NO ";
        else ajustado = "";
        console.log(`La IP ${ ajustado }se ajusta a la expresión regular`);
    }
    if (url.value != "") {
        valido = comprobarCampos(url);
        if (!valido) ajustado = "NO ";
        else ajustado = "";
        console.log(`La url ${ ajustado }se ajusta a la expresión regular`);
    }
    if (contrasena.value != "") {
        valido = comprobarCampos(contrasena);
        if (!valido) ajustado = "NO ";
        else ajustado = "";
        console.log(`La contraseña ${ ajustado }se ajusta a la expresión regular`);
    }
    if (nif.value != "") {
        valido = comprobarCampos(nif);
        if (!valido) ajustado = "NO ";
        else ajustado = "";
        console.log(`El NIF ${ ajustado }se ajusta a la expresión regular`);
    }
    if (matricula.value != "") {
        valido = comprobarCampos(matricula);
        if (!valido) ajustado = "NO ";
        else ajustado = "";
        console.log(`La matrícula de coche ${ ajustado }se ajusta a la expresión regular`);
    }
}

function comprobarCampos(campo) {
    return patrones[campo.id].test(campo.value);
}
