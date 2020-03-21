import React from "react";
import decoration from "../../assets/Decoration.svg";
import "./whoWeHelp.scss";
import OrganizationsBox from "../organizationsBox/OrganizationsBox";

class WhoWeHelp extends React.Component {
  constructor() {
    super();
    this.state = {
      lists: []
    };
  }
  handleClick(e) {
    console.log(e.target.id);
    fetch(` http://localhost:3000/${e.target.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          list: data
        });
      });
  }
  render() {
    return (
      <div className="whoWeHelp">
        <div className="whoWeHelp__navBox">
          <h2>Komu pomagamy?</h2>
          <img src={decoration} className="decoration" alt="decoration"></img>
          <div className="whoWeHelp__navBox-buttons">
            <button id="fundations" onClick={this.handleClick}>
              Fundacjom
            </button>
            <button id="organizations" onClick={this.handleClick}>
              Organizacjom pozarządowym
            </button>
            <button id="collections" onClick={this.handleClick}>
              Lokalnym zbiórkom
            </button>
          </div>
          <div className="whoWeHelp__navBox-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
        </div>
        <OrganizationsBox list={this.state.list} />
      </div>
    );
  }
}
export default WhoWeHelp;
