import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>This is react practice application</h1>
                <h2>This is Anuj Jain</h2>
                <Person name="Addi" age="25"></Person>
                <Person name="GGG" age="26"></Person>
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is anuj jain'));
    }
}

export default App;
