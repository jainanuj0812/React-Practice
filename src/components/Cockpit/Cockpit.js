import React from 'react';
import classy from './Cockpit.css';
import Aux from '../../hoc/Auxo';

const cockpit = (props) => {
    let btnClass = classy.Button;
    if (props.showPersons) {
        btnClass = [classy.Red, classy.Button].join(' ');
    }
    const classes = [];
    if (props.persons.length <=2) {
        classes.push(classy.red);
    }
    if (props.persons.length <=1) {
        classes.push(classy.bold);
    }

    return (
        <Aux>
            <h1>This is react practice application</h1>
            <p className={classes.join(' ')}>This is Anuj Jain</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Person</button>
        </Aux>
    );
};

export default cockpit;