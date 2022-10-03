let capacidad = Number(prompt("Introduce la capacidad (un número):"));
let from = prompt("De qué lo quieres convertir (Ej: MB / Megabyte)");
let to = prompt("A qué lo quieres convertir (Ej: MB / Megabyte)");
convertCapacity(capacidad, from, to);

function convertCapacity(n, from, to) {
    let bytes = from == "B" || from == "Byte" ? n * 1 :
                from == "KB" || from == "Kilobyte" ? n * 1000 : // 1.000
                from == "MB" || from == "Megabyte" ? n * 1000000 : // 1.000.000
                from == "GB" || from == "Gigabyte" ? n * 1000000000 : // 1.000.000.000 // 10**9 || 1e9
                from == "TB" || from == "Terabyte" ? n * 1000000000000 : // 1.000.000.000.000
                from == "PB" || from == "Petabyte" ? n * 1000000000000000 : // 1.000.000.000.000.000
                from == "EB" || from == "Exabyte" ? n * 1000000000000000000 : // 1.000.000.000.000.000.000
                0;
    let resultado = to == "B" || to == "Byte" ? bytes / 1 :
                    to == "KB" || to == "Kilobyte" ? bytes / 1000 : // 1.000
                    to == "MB" || to == "Megabyte" ? bytes / 1000000 : // 1.000.000
                    to == "GB" || to == "Gigabyte" ? bytes / 1000000000 : // 1.000.000.000
                    to == "TB" || to == "Terabyte" ? bytes / 1000000000000 : // 1.000.000.000.000
                    to == "PB" || to == "Petabyte" ? bytes / 1000000000000000 : // 1.000.000.000.000.000
                    to == "EB" || to == "Exabyte" ? bytes / 1000000000000000000 : // 1.000.000.000.000.000.000
                    0;
    console.log(resultado);

}