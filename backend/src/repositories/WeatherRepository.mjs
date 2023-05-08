import OpenMeteoApi from "../apis/OpenMeteoApi.mjs";

class WeatherRepository {

    getWeatherInfoByCoordinates(coordinates = {lat: 0, lon: 0}) {
        const weatherApi = new OpenMeteoApi();
        return weatherApi.getCurrentWeatherByCoordinates(coordinates);
    }
}

export default WeatherRepository;