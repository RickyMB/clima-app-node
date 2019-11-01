const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLon(argv.direccion)
//     .then(console.log);

// clima.getClima(40.700000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {

        const infoLugar = await lugar.getLugarLatLon(direccion);
        const infoClima = await clima.getClima(infoLugar.lat, infoLugar.lon);
        return `El clima de ${infoLugar.direccion} es de ${infoClima} grados Celcius`
    } catch (err) {
        return `No se pudo determinar el clima para ${infoLugar.direccion}`, err;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)