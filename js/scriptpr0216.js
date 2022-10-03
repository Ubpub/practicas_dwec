let capacidad = prompt("Introduce la capacidad (un número):");
let from = prompt("A qué lo quieres convertir (Ej: MB / Megabyte)");
convertToBytes(capacidad, from);

function convertToBytes(capacity, from) {
    let resultado = from == "B" || from == "Byte" ? capacity * 1 :
                    from == "KB" || from == "Kilobyte" ? capacity * 1000 :
                    from == "MB" || from == "Megabyte" ? capacity * 1000000 :
                    from == "GB" || from == "Gigabyte" ? capacity * 1000000000 :
                    from == "TB" || from == "Terabyte" ? capacity * 1000000000000 :
                    from == "PB" || from == "Petabyte" ? capacity * 1000000000000000 :
                    from == "EB" || from == "Exabyte" ? capacity * 1000000000000000000 :
                    "No permitido";
    console.log(resultado);
}