import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Brijesh'},
      { name: 'Joy'}
    ]
    
  }

  switchNameHander = (newName) => {
    this.setState({
      persons: [
        { name: newName},
        { name: 'Joy1'}
      ]
    })
  };

  nameChangedHandler = (event) => {
    console.log(event.target.name)
    this.setState({
      persons: [
        { name: event.target.value },
        { name: 'Joy1'}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <Person 
          name={this.state.persons[0].name}
          inputName="person1"
          changed={this.nameChangedHandler} />

        <Person name={this.state.persons[1].name} 
                inputName="person2"
                changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
