import React from 'react';

const WeatherItem = (data) => {
    const weatherData = data.data;

    return (
        <div className="weather--list-container">
            {weatherData.map((item) => 
                <li className="weather--list--item" key={item.dt}>
                    <span>{item.dt_txt}</span>
                    <figure>
                        <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
                    </figure>
                    <p>Temperature: <span>{Math.ceil(item.main.temp)}</span></p>
                </li>
            )}                        
        </div>
    )
}

export default WeatherItem;

