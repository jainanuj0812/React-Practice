import React from 'react';
import classy from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';  
    if (props.showPersons) {
        btnClass = classy.Red;
    }
    const classes = [];
    if (props.persons.length <=2) {
        classes.push(classy.red);
    }
    if (props.persons.length <=1) {
        classes.push(classy.bold);
    }

    return (
        <div className={classy.Cockpit}>
            <h1>This is react practice application</h1>
            <p className={classes.join(' ')}>This is Anuj Jain</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Person</button>
        </div>
    );
};

export default cockpit;