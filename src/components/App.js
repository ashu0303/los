import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../shared/theme/theme";
import { Redirect, HashRouter, Route, Switch } from "react-router-dom";
const DefaultLayout = React.lazy(() => import("../containers/Layout/Layout"));
const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Pages
const Layout = React.lazy(() => import("../containers/Layout/Layout"));
const Login = React.lazy(() => import("../containers/login/login"));
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
              <Redirect exact from="/" to="/login" />
              <Route
                exact
                path="/home/msme"
                // name="Home"
                render={(props) => <DefaultLayout {...props} />}
              />
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
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            /> */}
              {/* <Route
                exact
                path="/"
                component={Dashboard}
                isAuthenticated={false}
              /> */}
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
