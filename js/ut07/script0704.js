let tiempo = document.querySelector('#tiempo');

renderPage();

function renderPage() {
    document.querySelector('#buscar').addEventListener('click', () => {
        let lat = document.querySelector('#lat').value;
        let long = document.querySelector('#long').value;
        let apikey = document.querySelector('#apikey').value;
        if (lat == "" || long == "" || apikey == "") {
            let campo = document.querySelector('#campo');
            if (lat == "") campo.textContent = 'latitud';
            else if (long == "") campo.textContent = 'longitud';
            else if (apikey == "") campo.textContent = 'ApiKey';
            document.querySelector('.alert').style.display = 'flex';
        } else {
            document.querySelector('.alert').style.display = 'none';
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apikey}&lang=es`;
            fetchWeather(url);
        }
        console.log(lat, long, apikey);
    });
}

function fetchWeather(url) {
    tiempo.innerHTML = ``;
    fetch( url )
        .then( (response) => response.json() )
        .then( (json) => {
            console.log('Los datos que puedo utilizar');
            console.log(json);
            let contenido = document.createElement('tr');
            contenido.innerHTML = 
                `<h2>${ json.name }</h2>
                <div>${ json.weather[0]['main'] }</div>
                <div>${ json.weather[0]['description'] }</div>`;
            tiempo.append(contenido);
        } )
        .catch( (error) => console.log(error) )
}
