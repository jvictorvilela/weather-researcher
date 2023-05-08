import WeatherRepository from "../repositories/WeatherRepository.mjs";
import PlaceRepository from '../repositories/PlaceRepository.mjs';

class LocationWeatherController {
    static async show(req, res) {
        console.log(req)
        try {
            if (req.query.lat && req.query.lon) {
                const weatherRepository = new WeatherRepository();
                const placeRepository = new PlaceRepository();

                const coordinates = {
                    lat: req.query.lat,
                    lon: req.query.lon,
                }
    
                const response = {
                    weather: await weatherRepository.getWeatherInfoByCoordinates(coordinates),
                    place: await placeRepository.getPlaceInfoByCoordinates(coordinates),
                }

                res.json(response)
            } else {
                res.status(400).json({message: 'Parâmetros inválidos'})
            }
        } catch (err) {
            res.status(500).json({message: 'Erro!'})
        }
    }
}

export default LocationWeatherController;