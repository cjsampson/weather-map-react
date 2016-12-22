import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import WeatherItem from './components/WeatherItem';
import './styles/weather.sass';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentWillMount () {
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=SaltLake&APPID=e6d03308e46ef159cfbf5f857a6798a5&units=Imperial")
        .then(response => {
            this.setState({ data: response.data.list });
            console.log(response.data.list);
            console.log(this.state.data);
        })
        .catch(err => console.log(err));
    }


    render() {
        
        if(this.state.data.length === 0) {
            return (<div>Loading...</div>)
        }

        return (
            <div className="root"> 
                 <WeatherItem data={this.state.data} />
            </div>
        );
    }
        
}


ReactDOM.render(<App />, document.getElementById('app'));
