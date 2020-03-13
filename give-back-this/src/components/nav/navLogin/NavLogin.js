import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavLogin extends Component {
  render() {
    return (
      <>
        <NavLink to="/login">
          <li>Login</li>
        </NavLink>
        <NavLink to="/signIn">
          <li>Zarejestruj się</li>
        </NavLink>
      </>
    );
  }
}

export default NavLogin;
