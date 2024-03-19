import React from 'react';
import { Wind, Humidity, Sunrise, Sunset } from './IconsComponent';

const WeatherInfo = ({ data }) => {
    return (
        <div className="bottom">
            <div className="sunrise">
                <Sunrise />
                <p>35°C</p>
                <h5>Sunrise</h5>
            </div>
            <div className="humidity">
                <Humidity />
                {data.main ? <p>{data.main.humidity}%</p> : null}
                <h5>Humidity</h5>
            </div>
            <div className="wind">
                <Wind />
                <p>16 km/h</p>
                <h5>Wind</h5>
            </div>
            <div className="sunset">
                <Sunset />
                <p>35°C</p>
                <h5>Sunset</h5>
            </div>
        </div>
    );
};

export default WeatherInfo;