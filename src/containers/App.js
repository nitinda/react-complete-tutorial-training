import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit'

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Kuttus", age: 5 },
      { id: "2", name: "Kunjus", age: 0 },
      { id: "3", name: "Puttus", age: 110 },
    ],
    showPersons: false,
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangeHandler}
          ></Persons>
        </div>
      );
    }
    return (
      <div className="App">
        <Cockpit persons={this.state.persons} clicked={this.togglePersonsHandler}></Cockpit>
        {persons}
      </div>
    );
  }
}

export default App;
