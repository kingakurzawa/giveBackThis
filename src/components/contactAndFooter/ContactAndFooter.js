import React from "react";
import decoration from "../../assets/Decoration.svg";
import "./contactAndFooter.scss";

class ContactAndFooter extends React.Component {
  render() {
    return (
      <div className="contactAndFooter">
        <div className="lightShadow"></div>
        <div className="contactAndFooter__box">
          <h2>Skontaktuj się z nami</h2>
          <img src={decoration} className="decoration" alt="decoration"></img>
          <form></form>
        </div>
      </div>
    );
  }
}
export default ContactAndFooter;
