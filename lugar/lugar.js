const axios = require('axios');


const getLugarLatLon = async(sitio) => {

    const encodedUrl = encodeURI(sitio);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'a5633f7a0cmsh8013101bf7244adp1b6795jsn55c7419046fd' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${sitio}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLon
}