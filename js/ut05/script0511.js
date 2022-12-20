let patronFecha1 = /^(0[1-9]|1\d|2\d|3[0-1])\/(0[1-9]|1[0-2])\/([1-2][0-9]{3})$/;
let meses = {
    01: "enero", 02: "febrero", 03: "marzo", 04: "abril", 05: "mayo", 06: "junio",
    07: "julio", 08: "agosto", 09: "septiembre", 10: "octubre", 11: "noviembre", 12: "diciembre",
};

renderPage();

function renderPage() {
    let boton = document.querySelector('#enviar');
    boton.addEventListener('click', () => {
        let texto = document.querySelector('#texto');
        if (texto.value != "") {
            let fechas = texto.value.match(/(0[1-9]|1\d|2\d|3[0-1])\/(0[1-9]|1[0-2])\/([1-2][0-9]{3})/g);
            fechas.forEach( (item) => {
                console.log(item);
                let fecha = item.split("/");
                console.log(fecha);
                console.log(`${ fecha[0] } de ${ meses[fecha[1]] } de ${ fecha[2] }`)
            } );
            // Hoy es el día 20/12/2022, dentro de poco será Navidad, el día 25/12/2022
        }
    })
}
