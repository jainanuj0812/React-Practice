import React from 'react';
import classes from './Person.css';
//import Radium from 'radium';
// This will not change the state of the application, only change by container (App.js).
const person = (props) => {
    /*const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }*/
    return (
        <div className={classes.Person}>
            <p onClick={props.click}> I'm {props.name} and age is {props.age} </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

//export default Radium(person);
export default person;