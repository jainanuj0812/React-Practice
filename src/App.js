import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
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
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
            /*':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }*/
        };

        let persons = null;
        if (this.state.showPerson) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                         return <Person
                             name={person.name}
                             age={person.age}
                             click={this.deletePersonHandler.bind(this, index)}
                             key={person.id}
                             changed={(event) => this.onChangehandler(event, person.id)}   />
                    })}
                </div>
            );

            style.backgroundColor = 'red';
            /*style[':hover'] = {
                backgroundColor: 'salmon',
                color: 'black'
            };*/
        }

        //let classes = ['red', 'bold'].join(' ');
        let classes = [];
        if (this.state.persons.length <=2) {
            classes.push('red');
        }
        if (this.state.persons.length <=1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>This is react practice application</h1>
                <p className={classes.join(' ')}>This is Anuj Jain</p>
                <button onClick={this.switchNameEventHandler}>Switch Name</button>{/* Don't use () to call otherwise executed on load not on click */}
                <button onClick={this.switchNameEventHandler.bind(this, 'Ned Stark')}>Switch Name by passing value to function</button>
                <button onClick={() => this.switchNameEventHandler('easy waala')}>Easy Waala inefficeint</button>
                <button style={style} onClick={this.togglePersonHandler}>Toggle Person</button>
                {persons}
                {/*{ this.state.showPerson ?
                    <div>
                        <Person
                            name="Addi" age="25">

                        </Person>
                        <Person
                            name="GGG" age="26">
                            This is awesome
                        </Person>
                        <Person
                            name={this.state.persons[0].name} age={this.state.persons[0].age}
                            click={this.switchNameEventHandler.bind(this, 'Cersei')}>
                        </Person>
                        <Person
                            name={this.state.persons[1].name} age={this.state.persons[1].age}
                            changed={this.onChangehandler}>

                        </Person>
                        <Person
                            name={this.state.persons[2].name} age={this.state.persons[2].age}>

                        </Person>
                    </div> : null
                }*/}
            </div>
            
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is anuj jain'));
    }
}

//export default Radium(App);
export default App;
