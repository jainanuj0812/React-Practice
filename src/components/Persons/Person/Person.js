import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxo';
import PropTypes from 'prop-types';

//import Radium from 'radium';
// This will not change the state of the application, only change by container (App.js).
class Person extends Component {
    constructor(props) {
        super(props);
        console.log("===PerJS===in constructor", props);
    }

    componentWillMount() {
        console.log("===PerJS====componentWillMount====");
    }

    componentDidMount() {
        console.log("===PerJS====componentDidMount====");
        if(this.props.position === 0) {
            this.inputElement.focus();
        }
    }
    render() {
        console.log("===PerJS====render====");
        return (
            <Aux>
                <p onClick={this.props.click}> I'm {this.props.name} and age is {this.props.age} </p>
                <p>{this.props.children}</p>
                <input
                    ref={ (inp) => { this.inputElement = inp}}
                    type="text" onChange={this.props.changed} value={this.props.name}/>
            </Aux>
        );

       /* return [
            <p key="1" onClick={this.props.click}> I'm {this.props.name} and age is {this.props.age} </p>,
            <p key="2">{this.props.children}</p>,
            <input key="3" type="text" onChange={this.props.changed} value={this.props.name}/>
        ];*/
    }
}

//export default Radium(person);
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changes: PropTypes.func
}

export default withClass(Person, classes.Person);