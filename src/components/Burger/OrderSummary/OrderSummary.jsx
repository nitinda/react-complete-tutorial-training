import React from "react";

import Aux from "../../../hoc/Aux";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <ListItem key={igKey}>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <ListItemText id={"switch-list-label-" + {igKey}} primary={<span style={{ textTransform: 'capitalize' }}>{igKey} : {props.ingredients[igKey]}</span>} />
      </ListItem>
    );
  });

  return (
      <Aux>
          <List>
            {ingredientSummary}
            <ListItem>
              <ListItemText id="switch-list-label-order-total" primary={"Order Total: $" + props.price.toFixed(2)} />
            </ListItem>
          </List>
      </Aux>
  );
};

export default orderSummary;
