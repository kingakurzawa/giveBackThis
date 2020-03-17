import React from "react";
import { NavLink } from "react-router-dom";
import "./welcomeButtons.scss";
import decoration from "../../assets/Decoration.svg";
class WelcomeBox extends React.Component {
  render() {
    return (
      <div className="welcomeBox">
        <h1>
          Zacznij pomagać!
          <br /> oddaj niechciane rzeczy w zaufane ręce
        </h1>
        <img src={decoration} alt="decoration" className="decoration"></img>
        <div className="welcomeButtons-box">
          <button className="bigBtn">
            <NavLink to="/login">
              <li>Oddaj rzeczy</li>
            </NavLink>
          </button>
          <button className="bigBtn">
            <NavLink to="/signIn">
              <li>Zorganizuj zbiórkę</li>
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}
export default WelcomeBox;
