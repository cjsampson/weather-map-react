import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: null
        };
    }

    componentWillMount () {
        axios.get("http://api.openweathermap.org/data/2.5/forecast?q=SaltLake&APPID=e6d03308e46ef159cfbf5f857a6798a5")
        .then(response => {
            console.log(response)
            this.setState({ data: response.data })
        })
        .catch(response => console.log(response))
    }

    render() {
        return (
            <div>
            
            </div>
        );
    }
    
}


ReactDOM.render(<App />, document.getElementById('app'));