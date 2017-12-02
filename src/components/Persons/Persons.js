import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        console.log("===PersonsJS===in constructor", props);
    }

    componentWillMount() {
        console.log("===PersonsJS====componentWillMount====");
    }

    componentDidMount() {
        console.log("===PersonsJS====componentDidMount====");
    }

    componentWillReceiveProps(nextProps) {
        console.log("====PersonsJS===componentWillReceiveProps====", nextProps);
    }

    /*shouldComponentUpdate(nextProps, nextState) {
        console.log("====PersonsJS===shouldComponentUpate====", nextProps, nextState);
        return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed
            || nextProps.clicked !== this.props.clicked;
    }*/

    componentWillUpdate(nextProps, nextState) {
        console.log("====PersonsJS===componentWillUpdate====", nextProps, nextState);
    }

    componentDidUpdate() {
        console.log("====PersonsJS===componentDidUpdate====");
    }

    render() {
        console.log("===PersonsJS====render====");
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                position={index}
                click={() => this.props.clicked(index)}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}   />
        });
    }
}

export default Persons;
