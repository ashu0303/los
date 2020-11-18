import Aux from "../../hoc/Auxs";
import splash from "../../assets/images/login-background-01.png";
import "./login-container.scss";
import LoginComponent from "../../components/login/login";

import React, { Component } from "react";

export default class login extends Component {
  constructor(props) {
    super(props);
    // this.handleKeyPress = this.handsleKeyPress.bind(this);
  }

  // init = (data = {}) => {
  //   axios({
  //     method: "post",
  //     url: ServerUrl + "auth/realms/kyros/protocol/openid-connect/token",
  //     data: data,
  //     headers: {
  //       "content-Type": "application/x-www-form-urlencoded",
  //     },
  //   })
  //     .then((response) => {
  //       this.setState({
  //         refresh_token: response.data.refresh_token,
  //         status: response.request.status,
  //         access_token: response.data.access_token,
  //         valid: false,
  //       });
  //       localStorage.setItem("refresh_token", response.data.refresh_token);
  //       localStorage.setItem("access_token", response.data.access_token);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //       this.setState({ status: 0, valid: true });
  //     });
  // };

  // loginSuccess = () => {
  //   let path;
  //   this.init(this.getLoginData());
  //   setTimeout(() => {
  //     if (this.state.status === 200) this.getUserName();
  //     else path = "/login";
  //     this.props.history.push(path);
  //   }, 500);
  //   this.setState({ status: 0 });
  // };

  // getLoginData() {
  //   var bodyData = `grant_type=password&username=${this.state.username}&password=${this.state.password}&client_id=kyros-admin-web`;
  //   return bodyData;
  // }

  loginCall = () => {
    console.log("coming to container", this.props);

    this.props.history.push("/home/msme");
  };

  render() {
    return (
      <Aux>
        <div class="main-container">
          <img class="background-imge" src={splash} alt="non-visible" />
          <LoginComponent
            loginCall={this.loginCall.bind(this)}
          ></LoginComponent>
        </div>
        <main></main>
      </Aux>
    );
  }
}
