import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Wisner', age: 25},
      {name: 'Rob', age: 42},
      {name: 'Marcela', age: 30}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Wisner', age: 26},
        {name: 'Anne', age: 21},
        {name: 'Noah', age: 18}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Wisner', age: 26},
        {name: event.target.value, age: 21},
        {name: 'Noah', age: 18}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App!</h1>
        <button
        style={style}
        onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}>
          Hobbies: Programming, Books and Series
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>
        </Person>
      </div>
    );
  }
}

export default App;
