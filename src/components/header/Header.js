import React from "react";
import "./header.scss";
import WelcomeBox from "../welcomeBox/WelcomeBox";

import "./header.scss";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <aside className="header-left"></aside>
        <aside className="header-right">
          <WelcomeBox />
        </aside>
      </div>
    );
  }
}
export default Header;
