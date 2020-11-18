import Aux from "../../hoc/Auxs";
import "./layout.scss";
import React, { Component } from "react";

const MsmeModule = React.lazy(() =>
  import("../msme-managments/msme-managment")
);
export default class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Aux>
          <div class="backGround">Here we give navigation bars </div>
          <MsmeModule></MsmeModule>
          {/* <main>{pr}</main> */}
        </Aux>
      </div>
    );
  }
}
