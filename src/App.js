import React, { useState } from 'react';
import { fetchWeatherData } from './utils/api';
import { kelvinToCelsius, capitalizeFirstLetter } from './utils/utils';
import { WeatherInfo, WeatherIcon } from './components'

function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState('');

	const searchLocation = (event) => {
		if (event.key === 'Enter') {
			fetchWeatherData(location)
				.then((response) => {
					setData(response.data);
					console.log(response.data);
				})
				.catch((error) => {
					console.error('Error fetching weather data:', error);
				});
			setLocation('');
		}
	};

	return (
		<div className="app">
			<div className="top">
				<h3>Enter your location :</h3>
				<input
					value={location}
					onChange={(event) => setLocation(event.target.value)}
					onKeyDown={searchLocation}
					type="text"
					placeholder="Paris, Madrid, London..."
					className='input'
				/>
			</div>
			<div className="main">
				{data.name && (<WeatherIcon data={data} />)}
				<div className="container">
					<div className="location">
						<h2>{data.name}</h2>
					</div>
					<div className="temp">
						{data.main ? <h1>{kelvinToCelsius(data.main.temp).toFixed(1)}°C</h1> : null}
					</div>
					<div className="description">
						{data.weather ? <p>{capitalizeFirstLetter(data.weather[0].description)}</p> : null}
					</div>
				</div>
			</div>

			{data.name && (
				<WeatherInfo data={data} />
			)}
		</div>
	);
}

export default App;
