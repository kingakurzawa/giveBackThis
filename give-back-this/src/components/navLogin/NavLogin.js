import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../signIn/SignIn";
import Nav from "../nav/Nav";

class NavLogin extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/sign_in" component={SignIn}>
              Zaloguj się
            </Route>
            <Route path="/">{/* <Home /> */}</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavLogin;
