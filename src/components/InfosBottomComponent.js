import React from 'react';
import { Wind, Humidity, Sunrise, Sunset } from './IconsComponents/IconsComponent';
import { mpsToKmph } from '../utils/utils'

export function WeatherInfo({ data }) {
    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunriseTimeString = sunriseTime.toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' });
    const sunsetTime = new Date(data.sys.sunset * 1000);
    const sunsetTimeString = sunsetTime.toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' });

    return (
        <div className="bottom">
            <div className="sunrise">
                <Sunrise />
                {data.main ? <p>{sunriseTimeString}</p> : null}
                <h5>Sunrise</h5>
            </div>
            <div className="humidity">
                <Humidity />
                {data.main ? <p>{data.main.humidity}%</p> : null}
                <h5>Humidity</h5>
            </div>
            <div className="wind">
                <Wind />
                {data.main ? <p>{mpsToKmph(data.wind.speed).toFixed()}km/h</p> : null}
                <h5>Wind</h5>
            </div>
            <div className="sunset">
                <Sunset />
                {data.main ? <p>{sunsetTimeString}</p> : null}
                <h5>Sunset</h5>
            </div>
        </div>
    );
};

export default WeatherInfo;