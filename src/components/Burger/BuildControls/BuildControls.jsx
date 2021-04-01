import React from "react";

import BuildControl from "./BuildControl/BuildControl";
// import "./BuildControls.css";

import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];

const buildControls = (props) => {
  return (
      <Typography
        component="div"
        style={{ height: "auto" }}
        align="center"
      >
        <div className="BuildControls">
          {controls.map((ctrl) => {
            return <BuildControl key={ctrl.label} label={ctrl.label} />;
          })}
        </div>
      </Typography>
  );
};

export default buildControls;
