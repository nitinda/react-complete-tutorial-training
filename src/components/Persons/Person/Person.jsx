import React, { Component } from "react";
import "./Person.css";
import Aux from "../../../hoc/Aux";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super();
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log("[Person.js rendering]");
    return (
      <Aux>
        {/* <AuthContext.Consumer> */}
        {this.context.authenticated ? (
          <p>Authenticated!!</p>
        ) : (
          <p>Please Log In !!!!!</p>
        )}
        {/* </AuthContext.Consumer> */}
        <div className="Person">
          <p onClick={this.props.click}>
            This is {this.props.name}, I am {this.props.age} years old{" "}
          </p>
          <p key="i2">{this.props.children}</p>
          <input
            key="i3"
            // ref={(inputElement) => {this.inputElement = inputElement}}
            ref={this.inputElementRef}
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  onChange: PropTypes.func,
};

export default Person;
