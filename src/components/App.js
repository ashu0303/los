import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../shared/theme/theme";
import { Redirect, HashRouter, Route, Switch } from "react-router-dom";
const DefaultLayout = React.lazy(() => import("../containers/Layout/Layout"));
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Pages
const Login = React.lazy(() => import("../containers/login/login"));
/*const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));*/
// const Forgot = React.lazy(() => import("./views/Pages/Forgot-Password/forgot"));
// const OtpScreen = React.lazy(() =>
//   import("./views/Pages/Forgot-Password/otpScreen")
// );
// const ResetPassword = React.lazy(() =>
//   import("./views/Pages/Forgot-Password/resetPasword")
// );
// const Success = React.lazy(() =>
//   import("./views/Pages/Forgot-Password/confirmPassword")
// );
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route
                exact
                path="/login"
                name="Login Page"
                render={(props) => <Login {...props} />}
              />
              <Redirect from="/" to="/login" />
              {/* <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />*/}
              {/*<Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />*/}
              {/*<Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />*/}
              {/* <Route
              exact
              path="/forgot"
              name="Forgot Password"
              render={(props) => <Forgot {...props} />}
            />
            <Route
              exact
              path="/otp-screen/:userName"
              name="Otp"
              render={(props) => <OtpScreen {...props} />}
            />
            <Route
              exact
              path="/resetPassword/:userName"
              name="Reset Password"
              render={(props) => <ResetPassword {...props} />}
            />
            <Route
              exact
              path="/success"
              name="passwordSuccess"
              render={(props) => <Success {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            /> */}
              {/* <PrivateRoute exact path="/dashboard" component={Dashboard} isAuthenticated={false}/> */}
            </Switch>
          </React.Suspense>
        </HashRouter>
        {/* <Layout>
        <div>INside layout </div>
      </Layout> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
