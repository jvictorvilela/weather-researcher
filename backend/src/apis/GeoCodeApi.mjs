import axios from 'axios';

class GeoCodeApi {
    apiBase = 'https://geocode.maps.co/';

    async getPlaceByCoordinates(coordinates = { lat: 1.0, lon: 1.0 }) {
        try {
            const res = await axios.get('reverse', {
                baseURL: this.apiBase,
                params: {
                    lat: coordinates.lat,
                    lon: coordinates.lon,
                }
            })

            return res.data.display_name;
        } catch (err) {
            throw new Error('Erro ao se comunicar com a API do Geo Code');
        }
    }
}

export default GeoCodeApi;