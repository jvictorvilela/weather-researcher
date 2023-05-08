import GeoCodeApi from '../apis/GeoCodeApi.mjs';

class PlaceRepository {

    getPlaceInfoByCoordinates(coordinates = {lat: 0, lon: 0}) {
        const placeApi = new GeoCodeApi();
        return placeApi.getPlaceByCoordinates(coordinates);
    }
}

export default PlaceRepository;