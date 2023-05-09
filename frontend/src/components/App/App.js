import { useEffect, useState } from 'react';
import Info from '../Info/Info';
import './App.css';
import axios from 'axios';

const BACKEND_API_BASE = 'http://localhost:3001';

function App() {

  const [inputLat, setInputLat] = useState('');
  const [inputLon, setInputLon] = useState('');
  const [infoResponse, setInfoResponse] = useState()

  return (
    <div className="app">
      <div className="app-box app__input-area">
        <input
          className="app-input"
          type="text"
          placeholder="Latitude"
          onChange={(event) => {
            setInputLat(event.target.value);
          }}
        ></input>
        <input
          className="app-input"
          type="text"
          placeholder="Longitude"
          onChange={(event) => {
            setInputLon(event.target.value);
          }}
        ></input>
        <button className="app-button" onClick={() => {
          getWeatherInfo({ lat: inputLat, lon: inputLon }).then((response) => {
            setInfoResponse(response)
          });
        }}>
          Buscar
        </button>
      </div>
      {renderInfoArea(infoResponse)}
    </div>
  );
}

function renderInfoArea(data) {
  if (data) {
    return (
      <div className="app-box app__info-area">
        {renderError(data)}
        {renderPlaceInfo(data)}
        {renderWeatherInfo(data)}
      </div>
    )
  }
}

function renderPlaceInfo(data) {
  if (data?.place) {
    return (
      <div>
        <h3>Lugar</h3>
        <Info content={data?.place} />
      </div>
    )
  }
}

function renderError(data) {
  if (data?.error) {
    return (<b>{data.error}</b>)
  }
}

function renderWeatherInfo(data) {
  if (data?.weather) {
    return (
      <div>
        <h3>Informações do clima</h3>
        <Info title="Temperatura" content={`${data.weather.temperature} °C`} />
        <Info title="Direção do vento" content={`${data.weather.winddirection} °`} />
        <Info title="Velocidade do vento" content={`${data.weather.windspeed} Km/h`} />
      </div>
    )
  }
}

async function getWeatherInfo(coordinates = { lat: 0, lon: 0 }) {
  if (!coordinates.lat) {
    return;
  }
  try {
    const response = await axios.get('location-weather', {
      baseURL: BACKEND_API_BASE,
      params: {
        lat: coordinates.lat,
        lon: coordinates.lon,
      }
    })
    return response.data;
  } catch (err) {
    return { error: 'Nenhum lugar encontrado :(' }
  }
}

export default App;
