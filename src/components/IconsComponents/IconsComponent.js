import React from 'react';

import sunriselogo from './images/sunrise.png';
import windicon from './images/wind.png';
import sunsetlogo from './images/sunset.png';
import humiditylogo from './images/humidity.png';

export const Sunrise = () => {
    return (
        <img className='infos-icon'
            src={sunriselogo}
            alt="Sunrise icon"
        />
    );
}

export function Wind() {
    return (
        <img className='infos-icon'
            src={windicon}
            alt="Wind icon"
        />
    );
}

export function Sunset() {
    return (
        <img className='infos-icon'
            src={sunsetlogo}
            alt="Sunset icon"
        />
    );
}

export function Humidity() {
    return (
        <img className='infos-icon'
            src={humiditylogo}
            alt="Wind icon"
        />
    );
}