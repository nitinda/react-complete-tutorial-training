import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import "bootstrap/dist/css/bootstrap.css";
import Char from "./Char/Char";

class App extends Component {
  state = {
    userInput: "",
  };

  inputChnagedHandler = (event) => {
    this.setState({ userInput: event.target.value });
  };

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('')
    text.splice(index,1)
    const updatedText = text.join('')
    this.setState({userInput: updatedText})
  };

  render() {
    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          className="form-control"
          type="text"
          onChange={this.inputChnagedHandler}
          value={this.state.userInput}
        />
        <br />
        <p className="text-center">
          The length of above sting: {this.state.userInput.length}
        </p>
        <Validation inputValue={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
