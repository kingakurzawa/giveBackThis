import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navLogin.scss";

class NavLogin extends Component {
  render() {
    return (
      <div className="navLogin">
        <NavLink to="/login">
          <li>Zaloguj</li>
        </NavLink>
        <NavLink to="/signIn">
          <li>Załóż konto</li>
        </NavLink>
      </div>
    );
  }
}

export default NavLogin;
