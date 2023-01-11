let url = 'https://swapi.dev/api/planets';
let tabla = document.querySelector('#tabla');

// obtenerPlanetas();
fetchPlanets(url);

function fetchPlanets(url) {
    
    fetch( url )
        .then( (response) => response.json() )
        .then( (json) => {
            console.log('Los datos que puedo utilizar');
            console.log(json);
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
            if (json.next) {
                fetchPlanets(json.next);
            }
        } )
        .catch( (error) => console.log(error) )
}