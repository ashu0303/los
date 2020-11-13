import React from "react";
import Aux from "../../hoc/Auxs";
import "./layout.scss";
const layout = (props) => (
  <Aux>
    <div class="backGround">Toolbar,SideDrwaer,BackDrop</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
