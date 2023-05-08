import express from 'express';
import LocationWeatherController from '../controllers/LocationWeatherController.mjs';

const router = express.Router();

router.get('/location-weather', LocationWeatherController.show);

export default router;