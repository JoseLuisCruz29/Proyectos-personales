function obtenerClima() {

    const latitud = 52.52;
    const longitud = 13.419998;



    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.current_weather.weathercode;
            const consejo = generarConsejo(weather);
            document.getElementById('consejo').innerText = consejo;
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
            document.getElementById('consejo').innerText = "No se pudo obtener el clima. Inténtalo más tarde.";
        });
}

function generarConsejo(codigoClima) {

    switch (codigoClima) {
        case 0:
            return "Hoy está despejado: usa crema solar.";
        case 2:
            return "Hoy ta un chin nublado: lleva una sombrilla mio.";
        case 3:
            return "Hoy ta nublado mio: Lleva sombrilla mio paraguas.";
        case 45:
        case 48:
            return "Hay niebla mio: maneja con cuidado.";
        case 61:
        case 63:
        case 65:
            return "Mio tá lloviendo mio: no olvides tu paraguas.";
        case 95:
        case 96:
        case 99:
            return "Hay tormenta WUAIIIIIIIII: mejor quédate en casa.";
        default:
            return "No estoy seguro del clima mio. ¡Mantente preparado!";
    }
}