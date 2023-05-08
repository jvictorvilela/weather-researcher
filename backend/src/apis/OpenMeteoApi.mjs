import axios from 'axios';

class OpenMeteoApi {
    apiBase = 'https://api.open-meteo.com/v1/';

    async getCurrentWeatherByCoordinates(coordinates = { lat: 1.0, lon: 1.0 }) {
        try {
            const res = await axios.get('forecast', {
                baseURL: this.apiBase,
                params: {
                    latitude: coordinates.lat,
                    longitude: coordinates.lon,
                    current_weather: true,
                }
            })
            return res.data.current_weather;
        } catch (err) {
            throw new Error('Erro ao se comunicar com a API do Open Meteo');
        }
    }
}

export default OpenMeteoApi;