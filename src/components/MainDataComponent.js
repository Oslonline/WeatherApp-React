import React from 'react';
import { WeatherIcon } from './IconsComponents/MainIconComponent';
import { capitalizeFirstLetter, kelvinToCelsius } from "../utils/utils";

export function MainData({ data }) {
    return (
        <div className="main">
            {data.name && <WeatherIcon data={data} />}
            < div className="container" >
                <div className="location">
                    <h2>{data.name}</h2>
                </div>
                <div className="temp">
                    {data.main ? <h1>{kelvinToCelsius(data.main.temp).toFixed()}°C</h1> : null}
                </div>
                <div className="description">
                    {data.weather ? <p>{capitalizeFirstLetter(data.weather[0].description)}</p> : null}
                </div>
            </div >
        </div>
    );
}

export default MainData;