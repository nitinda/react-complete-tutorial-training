import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 8,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    width: "190px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&$disabled": {
      background: "linear-gradient(45deg, #607d8b 30%, #b0bec5 90%)",
      borderRadius: 8,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      width: "190px",
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    },
  },
  disabled: {},
})(Button);

const buildControls = (props) => {
  return (
    <Typography component="div" style={{ height: "auto" }} align="center">
      <div className="BuildControls">
        <TextField
          label="Current Price"
          id="filled-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                $ {props.price.toFixed(2)}
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        {controls.map((ctrl) => {
          return (
            <BuildControl
              key={ctrl.label}
              label={ctrl.label}
              added={() => props.ingredientAdded(ctrl.type)}
              removed={() => props.ingredientRemoved(ctrl.type)}
              disabled={props.disabled[ctrl.type]}
            />
          );
        })}
        <StyledButton disabled={!props.purchasable}>ORDER NOW</StyledButton>
      </div>
    </Typography>
  );
};

export default buildControls;
