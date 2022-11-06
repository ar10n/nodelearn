import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

import CityWeather from '../interfaces/weather.interface.js';

dotenv.config({ path: '../../.env' });

const cityRouter = express.Router();

const getWeather = async (city: string) => {
    const token: string | undefined = process.env.OWM_TOKEN;
    const url: string | undefined = process.env.OWM_GET_CITY;

    const data: CityWeather = await axios.get(`${url}?q=${city}&appid=${token}`).then(res => res.data);

    return data;
};

cityRouter.get('/:city', async (req, res) => {
    const city: string = req.params.city;
    const data: CityWeather = await getWeather(city);
    res.send(data);
});

export { cityRouter };