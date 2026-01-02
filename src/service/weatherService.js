const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.OPENWEATHER_API_KEY;

const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    const d = response.data;
    return {
        city: d.name,
        temp: d.main.temp,
        description: d.weather[0].description,
        icon: d.weather[0].icon,
        coords: d.coord,
        feels_like: d.main.feels_like,
        humidity: d.main.humidity,
        pressure: d.main.pressure,
        wind_speed: d.wind.speed,
        country: d.sys.country,
        rain_3h: d.rain ? d.rain['3h'] : 0
    };
};

const fetchForecast = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    return response.data.list[8]; // Прогноз на завтра (через 24 часа)
};

module.exports = { fetchWeather, fetchForecast };