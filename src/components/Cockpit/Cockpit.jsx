import React, { useEffect, useRef, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import AuthContext from "../../context/auth-context"

const Cockpit = (props) => {
  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext)

  console.log(authContext.authenticated)

  useEffect(() => {
    console.log("[Cockpit.log] useEffect");
    toggleButtonRef.current.click();
    return () => {
      console.log("[Cockpit.js] cleanup work in userEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd userEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd userEffect");
    };
  });

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
        ref={toggleButtonRef}
        type="button"
        // className="btn btn-primary btn-lg"
        className={classes.join(" ")}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      {/* <AuthContext.Consumer> */}
        <button className="btn btn-danger btn-primary btn-lg" onClick={authContext.login}>Log In</button>
      {/* </AuthContext.Consumer> */}
    </div>
  );
};

export default React.memo(Cockpit);
