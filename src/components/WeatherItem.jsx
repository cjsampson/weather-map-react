import React from 'react';

const WeatherItem = (data) => {
    const weatherData = data.data;
    
    return (
        <div>
            {weatherData.map((item) => 
                <li className="weather--list--item" key={item.dt}>
                    <span>{item.dt_txt}</span>
                    <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} />
                    <span>{Math.ceil(item.main.temp)}</span>
                </li>
            )}                        
        </div>
    )
}

export default WeatherItem;

