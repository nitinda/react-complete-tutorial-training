import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 8,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: '120px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const BuildControl = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="secondary" aria-label="remove" disabled={props.disabled}>
        <RemoveIcon onClick={props.removed} />
      </Fab>
      {/* <Button
        variant="contained"
        color="primary"
        disableElevation
      >
        {props.label}{" "}
      </Button> */}
      <StyledButton>{props.label}</StyledButton>
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={props.added} />
      </Fab>
    </div>
  );
};

export default BuildControl;
