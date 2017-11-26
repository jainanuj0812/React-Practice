import React, { Component } from 'react';
import classy from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
//import Radium, { StyleRoot } from 'radium';

class App extends Component {
    // State is special, if it is changes it will update the dom automatically
    state = {
        persons: [
            { id: '1001', name: 'Anuj', age: 89 },
            { id: '1002', name: 'Arya', age: 33 },
            { id: '1003', name: 'Sam', age: 22 }
        ],
        otherState: 'This is non- changed state',
        showPerson: false
    };

    switchNameEventHandler = (newName) => {
        // Don not use this
        //this.state.persons[0].name = 'Jon snow';
        this.setState({
            persons: [
                { name: newName, age: 23 },
                { name: 'Arya', age: 33 },
                { name: 'Sam', age: 22 }
            ]
        })
    };

    onChangehandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        })
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson;
        this.setState({
            showPerson: !doesShow
        })
    };

    deletePersonHandler = (index) => {
        //const persons = this.state.persons; // don't do this, this will change the state of original object
        const persons = [...this.state.persons];
        persons.splice(index, 1);
        this.setState({
            persons: persons
        });
    };

    render() {
        let persons = null;
        if (this.state.showPerson) {
            persons = (
                <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.onChangehandler}></Persons>
            );
        }

        return (
            <div className={classy.App}>
                <Cockpit showPersons={this.state.showPerson} persons={this.state.persons} clicked={this.togglePersonHandler}></Cockpit>
                {persons}
            </div>
            
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is anuj jain'));
    }
}

//export default Radium(App);
export default App;
