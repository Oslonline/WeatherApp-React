import React from 'react';

import clear_icon from './images/sun.png';
import clouds_icon from './images/cloudy-day.png';
import scatClouds_icon from './images/cloud.png';
import brokenClouds_icon from './images/cloudy.png';
import rain_icon from './images/rain.png';
import heavyRain_icon from './images/rainy.png';
import thunderstorm_icon from './images/thunder.png';
import snow_icon from './images/snowy.png';
import mist_icon from './images/mist.png';
import tornado_icon from './images/mist.png';

function Clear() {
    return (
        <img className='main-icon'
            src={clear_icon}
            alt="Clear sky icon"
        />
    );
}

function Clouds() {
    return (
        <img className='main-icon'
            src={clouds_icon}
            alt="Clouds icon"
        />
    );
}

function ScatteredClouds() {
    return (
        <img className='main-icon'
            src={scatClouds_icon}
            alt="Scattered clouds icon"
        />
    );
}

function BrokenClouds() {
    return (
        <img className='main-icon'
            src={brokenClouds_icon}
            alt="Broken clouds icon"
        />
    );
}

function Drizzle() {
    return (
        <img className='main-icon'
            src={rain_icon}
            alt="Rain icon"
        />
    );
}

function HeavyRain() {
    return (
        <img className='main-icon'
            src={heavyRain_icon}
            alt="Heavy Rain icon"
        />
    );
}

function Thunderstorm() {
    return (
        <img className='main-icon'
            src={thunderstorm_icon}
            alt="Thunderstorm icon"
        />
    );
}

function Snow() {
    return (
        <img className='main-icon'
            src={snow_icon}
            alt="Snow icon"
        />
    );
}

function Mist() {
    return (
        <img className='main-icon'
            src={mist_icon}
            alt="Mist icon"
        />
    );
}

function Tornado() {
    return (
        <img className='main-icon'
            src={tornado_icon}
            alt="Tornado icon"
        />
    );
}

export function WeatherIcon({ data }) {
    let weather = data.weather[0].main
    let weatherDetails = data.weather[0].description

    switch (weather) {
        case 'Clear':
            return <Clear />;
        case 'Clouds':
            if (weatherDetails === 'few clouds' || weatherDetails === 'scattered clouds') {
                return <Clouds />;
            } else if (weatherDetails === 'broken clouds') {
                return <BrokenClouds />
            } else {
                return <ScatteredClouds />
            }
        case 'Drizzle':
            return <Drizzle />;
        case 'Rain':
            if (weatherDetails === 'light rain' || weatherDetails === 'moderate rain') {
                return <Drizzle />
            } else {
                return <HeavyRain />;
            }
        case 'Thunderstorm':
            return <Thunderstorm />;
        case 'Snow':
            return <Snow />;
        case 'Mist':
            return <Mist />;
        case 'Tornado':
            return <Tornado />;
        default:
            break;
    }
}