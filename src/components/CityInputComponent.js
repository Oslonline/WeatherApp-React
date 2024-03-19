import React from 'react';
import {location, setLocation, searchLocation} from '../App'

export function CityInput({ event }) {
    return (
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
    );
};

export default CityInput;