import axios from 'axios';

const apiKey = '90b1c1a17cdfef3df9d3bd54b1f994b1'; // Place your OpenWeatherMap API KEY here

export const fetchWeatherData = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    return axios.get(url);
};
