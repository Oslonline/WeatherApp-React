import React, { useState } from 'react';
import { fetchWeatherData } from './utils/api';
import { WeatherInfo, MainData } from './components/index'

function App() {
	const [data, setData] = useState({});
	const [location, setLocation] = useState('');

	const searchLocation = (event) => {
		if (event.key === 'Enter') {
			fetchWeatherData(location)
				.then((response) => {
					setData(response.data);
				})
				.catch((error) => {
					console.error('Error fetching weather data:', error);
				});
			setLocation('');
		}
	};

	return (
		<div className="app">
			<div className="search">
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
			{data.name && (<MainData data={data} />)}
			{data.name && (<WeatherInfo data={data} />)}
		</div>
	);
}

export default App;
