import React from "react";
import Aux from "../../hoc/Auxs";
import splash from "../../assets/images/login-background-01.png";
import "./login-container.scss";
import LoginComponent from "../../components/login/login";
const login = (props) => (
  <Aux>
    <div class="main-container">
      <img class="background-imge" src={splash} alt="non-visible" />
      <LoginComponent></LoginComponent>
    </div>
    <main></main>
  </Aux>
);

export default login;
