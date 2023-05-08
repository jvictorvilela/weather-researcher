import express from 'express';
import LocationWeather from './src/routes/LocationWeather.mjs';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());
app.use('/', LocationWeather);

app.listen(3001);