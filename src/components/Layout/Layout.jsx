import React from "react";
import Aux from "../../hoc/Aux";

import Toolbar from "../Navigation/Toolbar/Toolbar"

const layout = (props) => (
  <Aux>
    <Toolbar/>
    {/* <div>Toolbar, Sidebar, Backdrop</div> */}
    <main>{props.children}</main>
  </Aux>
);

export default layout;
