let url = 'https://swapi.dev/api/planets';
let nextUrl = "";
let prevUrl = "";

let tabla = document.querySelector('#tabla');
let pagActual = 1;
let totalPages = 6;

document.querySelector('#anterior').addEventListener('click', changePage);
document.querySelector('#siguiente').addEventListener('click', changePage);

fetchPlanets(url);

function changePagination() {
    document.querySelector('#pag-actual').textContent = pagActual;
    document.querySelector('#pag-totales').textContent = totalPages;
    
}

function changePage(e) {
    if (e.target.id == 'anterior' && prevUrl) {
        pagActual--;
        url = prevUrl;
        fetchPlanets(url);
    } else if (e.target.id == 'siguiente' && nextUrl) {
        pagActual++;
        url = nextUrl;
        fetchPlanets(url);
    }
}

function fetchPlanets(url) {
    tabla.innerHTML = ``;
    fetch( url )
        .then( (response) => response.json() )
        .then( (json) => {
            console.log('Los datos que puedo utilizar');
            console.log(json);
            nextUrl = json.next;
            prevUrl = json.previous;
            changePagination();
            json.results.forEach( (item) => {
                let fila = document.createElement('tr');
                fila.innerHTML = 
                    `<th>${ item.name }</th>
                    <td>${ item.gravity }</td>
                    <td>${ item.diameter }</td>
                    <td>${ item.climate }</td>
                    <td>${ item.terrain }</td>
                    <td>${ item.population }</td>`
                tabla.append(fila);
            })
        } )
        .catch( (error) => console.log(error) )
}