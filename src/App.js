import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import SignIn from "./components/signIn/SignIn";
import ThreeColumns from "./components/threeColumns/threeColumns";
import FourSteps from "./components/fourSteps/FourSteps";
import AboutUs from "./components/aboutUs/AboutUs";
import WhoWeHelp from "./components/whoWeHelp/WhoWeHelp";
import ContactAndFooter from "./components/contactAndFooter/ContactAndFooter";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Header} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signIn" component={SignIn} />
      </Router>
      <ThreeColumns />
      <FourSteps />
      <AboutUs />
      <WhoWeHelp />
      <ContactAndFooter />
    </div>
  );
};
export default App;
