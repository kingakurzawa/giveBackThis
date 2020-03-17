import React from "react";
import "./header.scss";
import Nav from "../nav/Nav";
import WelcomeBox from "../welcomeBox/WelcomeBox";

import "./header.scss";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <aside className="header-left"></aside>
        <aside className="header-right">
          <Nav />
          <WelcomeBox />
        </aside>
      </div>
    );
  }
}
export default Header;
