// Variables globales
let lat = 0;
let lon = 0;

renderPage();

function renderPage() {
    document.querySelector('#buscar').addEventListener('click', () => {
        localidad = document.querySelector('#localidad').value;
        document.querySelector('#localidadTitulo').textContent = localidad;
        document.querySelector('#localidadTitulo').style.display = 'block';
        apikey = document.querySelector('#apikey').value;

        if (localidad == "" || apikey == "") {
            let campo = document.querySelector('#campo');
            if (localidad == "") campo.textContent = 'localidad';
            else if (apikey == "") campo.textContent = 'ApiKey';
            document.querySelector('.alert').style.display = 'flex';
        } else {
            document.querySelector('.alert').style.display = 'none';
            const urlLatLong = `http://api.openweathermap.org/geo/1.0/direct?q=${localidad}&limit=5&appid=${apikey}`;
            console.log(localidad, apikey, urlLatLong);
            fetchLocation(urlLatLong);
        }
    });
}

function fetchLocation(url) {
    fetch( url )
        .then( (response) => response.json() )
        .then( (json) => {
            console.log('Los datos que puedo utilizar');
            console.log(json);
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&lang=es`;
            console.log("MAIN URL", url);
            lat = json[0]['lat'];
            lon = json[0]['lon'];
            fetchWeather(url);
        } )
        .catch( (error) => console.log(error) )
}

function fetchWeather(url) {
    document.querySelector('#detalles').innerHTML = ``;
    fetch( url )
        .then( (response) => response.json() )
        .then( (json) => {
            console.log(json);
            const urlIcon = `http://openweathermap.org/img/wn/${json.weather[0]['icon']}@2x.png`;
            console.log(urlIcon)
            obtainIcon(urlIcon);
            let hasRain = checkRain(json.rain);
            if (hasRain) {
                console.log("LLUVIA", json.rain);
                document.querySelector('#detalles').innerHTML =
                `<tr>
                    <td colspan="2">Lluvia / nieve en las últimas 3h: ${ json.rain['3h'] }</td>
                </tr>
                <tr>
                    <td>${ json.weather[0]['main'] }</td>
                    <td>${ json.weather[0]['description'] }</td>
                </tr>
                <tr>
                    <td colspan="2">${ json.main.temp }</td>
                </tr>
                <tr>
                    <td colspan="2">${ json.main.humidity }</td>
                </tr>`;
            } else {
                document.querySelector('#detalles').innerHTML =
                    `<tr>
                        <td>${ json.weather[0]['main'] }</td>
                        <td>${ json.weather[0]['description'] }</td>
                    </tr>
                    <tr>
                        <td colspan="2">${ json.main.temp }</td>
                    </tr>
                    <tr>
                        <td colspan="2">${ json.main.humidity }</td>
                    </tr>`;
            }
            document.querySelector('#detalles').style.display='block';
            document.querySelector('.icono').style.display='block';
        } )
        .catch( (error) => console.log(error) );
}

function obtainIcon(url) {
    let image = document.createElement('img');
    image.src = url;
    image.alt = 'tiempo';
    document.querySelector('#icono').append(image);
}

function checkRain(rain) {
    let hasRain = false;
    if (rain != undefined) {
        if (rain['3h'] != undefined) {
            hasRain = true;
        }
    }
    return hasRain;
}
