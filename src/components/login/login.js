import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import davintaLog from "../../assets/images/davinta-logo-white-bg.png";
import "./login.scss";

export default function login(props) {
  return (
    <div class="login-container">
      <img class="log-size" src={davintaLog} alt="Davinta logo"></img>
      <label class="login-text">Login to your account!</label>
      <form autoComplete="off">
        <div class="login-form">
          <div class="form-fields">
            <TextField
              color="primary"
              id="outlined-size-normal"
              label="User Name"
              variant="outlined"
            />
          </div>
          <div class="form-fields">
            <TextField
              id="outlined-size-normal"
              label="Pasword"
              variant="outlined"
            />
          </div>
          <div class="form-fields width">
            <div>
              <FormControlLabel
                value="end"
                control={<Checkbox color="primary" />}
                label="Remember me"
                labelPlacement="end"
              />
            </div>
            <Button
              onClick={props.loginCall}
              fullWidth="true"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </div>
          <div>
            <Button color="primary">Forget Password</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
