let comunidadSelect = document.querySelector('#comunidad');
let provinciaSelect = document.querySelector('#provincia');
let localidadSelect = document.querySelector('#localidad');

renderPage();

function renderPage() {
    // Añadir las comunidades al select
    let com = Object.keys(localidades);
    for (let i = 0; i < com.length; i++) {
        let comunidad = document.createElement('option')
        comunidad.textContent = com[i];
        comunidadSelect.append(comunidad);
    }
    comunidadSelect.addEventListener('select', obtenerProvincias);
}

function obtenerProvincias() {
    provinciaSelect.innerHTML = "";
    if (comunidadSelect.value != "") {
        let prov = Object.keys(localidades[comunidadSelect.value]);
        for (let i = 0; i < prov.length; i++) {
            let provincia = document.createElement('option')
            provincia.textContent = prov[i];
            provinciaSelect.append(provincia);
        }
    }
    provinciaSelect.addEventListener('select', obtenerLocalidades);
}

function obtenerLocalidades() {
    console.log("LOCALIDADES");
    localidadSelect.innerHTML = "";
    if (localidadSelect.value != "") {
        let local = Object.keys(localidades[comunidadSelect.value][provinciaSelect.value]);
        console.log(local);
        /* for (let i = 0; i < local.length; i++) {
            let localidad = document.createElement('option')
            localidad.textContent = local[i];
            localidadSelect.append(localidad);
        } */
    }
}