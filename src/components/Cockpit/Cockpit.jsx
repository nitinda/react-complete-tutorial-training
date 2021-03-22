import React, { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";


const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.log] useEffect')
    setTimeout(() => {
      alert('Saved data to cloud!!!')
    }, 1000)
    return () => {
      console.log("[Cockpit.js] cleanup work in userEffect")
    }
  },[])

  useEffect(() => {
    console.log("[Cockpit.js] 2nd userEffect")
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd userEffect")
    }
  })

  let classes = [];
  if (props.personsLength > 2) {
    classes.push("btn btn-primary btn-lg");
  }
  if (props.personsLength <= 2) {
    classes.push("btn btn-success btn-lg");
  }
  if (props.personsLength <= 1) {
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

export default React.memo(Cockpit);
