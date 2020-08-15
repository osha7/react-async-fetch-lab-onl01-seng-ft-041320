// create your App component here
import React from 'react';

class App extends React.Component {

    state= {
        data: []
    }

    componentDidMount() {
        let url = 'http://api.open-notify.org/astros.json'
        fetch(url)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    data: json.people})
                // debugger
            })
            
    }

    render() {
        return (
            <div>
                <h1>People In Space</h1>
                <ul>
                    {this.state.data.map(person => (
                        <li>{person.name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default App;
