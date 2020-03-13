import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import SignIn from "./components/signIn/SignIn";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Header} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signIn" component={SignIn} />
      </Router>
    </div>
  );
};
export default App;
