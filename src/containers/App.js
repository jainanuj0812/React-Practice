import React, { PureComponent } from 'react';
import classy from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxo';
import withClass from '../hoc/withClass';
//import Radium, { StyleRoot } from 'radium';

class App extends PureComponent {
    // State is special, if it is changes it will update the dom automatically                                  
    constructor(props) {
        super(props);
        console.log("===AppJS===in constructor", props);
        this.state = {
            persons: [
                { id: '1001', name: 'Anuj', age: 89 },
                { id: '1002', name: 'Arya', age: 33 },
                { id: '1003', name: 'Sam', age: 22 }
            ],
            otherState: 'This is non- changed state',
            showPerson: false,
            toggleClickedCounter: 0
        };
    }

    componentWillMount() {
        console.log("===AppJS====componentWillMount====");
    }

    componentDidMount() {
        console.log("===AppJS====componentDidMount====");
    }
/*

    shouldComponentUpdate(nextProps, nextState) {
        console.log("====Appjs===shouldComponentUpate====", nextState);
        //return false;
        return nextState.persons !== this.state.persons || nextState.showPerson !== this.state.showPerson;
    }
*/

    componentWillUpdate(nextProps, nextState) {
        console.log("====Appjs===componentWillUpdate====", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("====Appjs===componentDidUpdate====");
    }

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
        const doesShow = this.state.showPerson; //set state called async
        this.setState( (prevState, props) => {
            return {
                showPerson: !doesShow,
                toggleClickedCounter: prevState.toggleClickedCounter +1
            }

        } );
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
        console.log("===AppJS===inrednder=====");
        let persons = null;
        if (this.state.showPerson) {
            persons = (
                <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.onChangehandler}></Persons>
            );
        }

        return (
            <Aux>
                <button onClick={() => {this.setState({showPerson: true})}}>Show Person</button>
                <Cockpit showPersons={this.state.showPerson} persons={this.state.persons} clicked={this.togglePersonHandler}></Cockpit>
                {persons}
            </Aux>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is anuj jain'));
    }
}

//export default Radium(App);
export default withClass(App, classy.App);
