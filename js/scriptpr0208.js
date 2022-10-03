let ano = parseInt(prompt("Introduce tu año de nacimiento: "));

while(isNaN(ano) || ano == "" || ano == null || ano < 0) {
    ano = parseInt(prompt("Introduce tu año de nacimiento: "));
}

/* if(ano < 1949)
    alert("Tu generación es anterior a la de Baby Boomer");
else if (ano <= 1968)
    alert("Tu generación es Baby Boomer");
else if (ano <= 1980)
    alert("Tu generación es Generación X");
else if (ano <= 1993)
    alert("Tu generación es Generación Millenial");
else if (ano <= 2010)
    alert("Tu generación es Generación Z");
else
    alert("Tu generación es posterior a Generación Z"); */

let msg = ano < 1946 ? "No disponible" :
          ano < 1968 ? "Baby Boomer" :
          ano < 1980 ? "Generación X" :
          ano < 1993 ? "Generación Millenial" :
          ano < 2010 ? "Generación Z" :
          "Te has pasado de edad";
console.log(msg);