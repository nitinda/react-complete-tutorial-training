import React, { Component } from "react";
import "./Person.css";
import Aux from "../../../hoc/Aux";

class Person extends Component {
  render() {
    console.log("[Person.js rendering]");
    return (
      <Aux>
        <div className="Person">
          <p onClick={this.props.click}>
            This is {this.props.name}, I am {this.props.age} years old{" "}
            {this.props.children}
          </p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          ></input>
        </div>
      </Aux>
    );
  }
}

export default Person;
