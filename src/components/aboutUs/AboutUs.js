import React from "react";
import decoration from "../../assets/Decoration.svg";
import signature from "../../assets/Signature.svg";
import "./aboutUs.scss";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutUs">
        <aside className="aboutUs-left">
          <h2>O nas</h2>
          <img src={decoration} alt="decoration" className="decoration"></img>
          <p>
            Nori grape silver beet broccoli kombu beet greens fava bean potato
            quandong celery. Bunya nuts black-eyed pea prairie turnip leek
            lentil turnip greens parsnip.
          </p>
          <img src={signature} alt="signature" className="signature"></img>
        </aside>
        <aside className="aboutUs-right"></aside>
      </div>
    );
  }
}
export default AboutUs;
