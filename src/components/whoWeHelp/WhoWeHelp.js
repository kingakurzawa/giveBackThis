import React from "react";
import decoration from "../../assets/Decoration.svg";
import "./whoWeHelp.scss";
import OrganizationsBox from "../organizationsBox/OrganizationsBox";

class WhoWeHelp extends React.Component {
  render() {
    return (
      <div className="whoWeHelp">
        <div className="whoWeHelp__navBox">
          <h2>Komu pomagamy?</h2>
          <img src={decoration} className="decoration" alt="decoration"></img>
          <div className="whoWeHelp__navBox-buttons">
            <button>Fundacjom</button>
            <button>Organizacjom pozarządowym</button>
            <button>Lokalnym zbiórkom</button>
          </div>
          <div className="whoWeHelp__navBox-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
        <OrganizationsBox />
      </div>
    );
  }
}
export default WhoWeHelp;
