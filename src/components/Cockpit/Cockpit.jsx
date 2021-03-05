import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";


const cockpit = (props) => {
  let classes = [];
  if (props.persons.length > 2) {
    classes.push("btn btn-primary btn-lg");
  }
  if (props.persons.length <= 2) {
    classes.push("btn btn-success btn-lg");
  }
  if (props.persons.length <= 1) {
    classes.push("btn btn-danger btn-lg");
  }
  return (
    <div>
      <h1>Aeroplane flying in the sky......</h1>
      <p>Its not working</p>
      <button
        type="button"
        // className="btn btn-primary btn-lg"
        className={classes.join(" ")}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;
