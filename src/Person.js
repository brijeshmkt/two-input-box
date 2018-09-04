import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>My name is {props.name}</p>
            <input name={props.inputName} type="text" onChange={props.changed } />
        </div>
    )
};

export default person;