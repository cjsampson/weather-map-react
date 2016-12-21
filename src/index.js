import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


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
            this.setState({ data: response.data.list })
            console.log(this.state.data)
        })
        .catch(err => console.log(err, response))
    }


    render() {
        const data = this.state.data
        
        return (
            <div>
                {data.map((item) => 
                    <li key={item.dt}>
                        {item.dt_txt}
                    </li>)
                } 
            </div>
        );
    }
        
}


ReactDOM.render(<App />, document.getElementById('app'));
