let calle = prompt("Introduce la calle en donde vives");
while (calle == null)
    calle = prompt("Introduce la calle en donde vives");
calle = calle.toLowerCase();

let linea = null;

if (
    calle == "calle los claveles" || 
    calle == "calle el rosal" || 
    calle == "calle las hortensias" ||
    calle == "calle las margaritas"
    )
{
    linea = "Línea 1"
} else if (
    calle == "calle teleno" ||
    calle == "calle catoute" ||
    calle == "calle peña ubiña" ||
    calle == "calle vizcodillo"
) {
    linea = "Línea 2";
} else if (
    calle == "calle astorga" ||
    calle == "calle la bañeza" ||
    calle == "calle benavente"
) {
    linea = "Línea 3";
};
if(linea != null)
    alert(`Tienes que tomar la ${ linea } para ir desde la ${ calle } hasta el trabajo.`);
else
    alert("No hay líneas de autobuses para esa calle");
