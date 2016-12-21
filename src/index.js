import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './styles/weather.sass';

// How to get icon URL
// For code 501 - moderate rain icon = "10d" 
// URL is
// http://openweathermap.org/img/w/10d.png

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillMount () {
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=SaltLake&APPID=e6d03308e46ef159cfbf5f857a6798a5")
        .then(response => {
            this.setState({ data: response.data.list });
            console.log(this.state.data);
        })
        .catch(err => console.log(err));
    }


    render() {
        const data = this.state.data;
        
        return (
            <div className="root">
                {data.map((item) => 
                    <li className="weather--list--item" key={item.dt}>
                        <span>{item.dt_txt}</span>
                        <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`} />

                    </li>)
                } 
            </div>
        );
    }
        
}


ReactDOM.render(<App />, document.getElementById('app'));
