import React from "react";
import NavLogin from "./navLogin/NavLogin";
import NavScroll from "./navScroll/NavScroll";
import "./nav.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className="navigationBox">
        <NavLogin />
        <NavScroll />
      </div>
    );
  }
}
export default Nav;
