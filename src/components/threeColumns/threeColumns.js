import React from "react";
import "./threeColumns.scss";

class ThreeColumns extends React.Component {
  render() {
    return (
      <div className="threeColumns">
        <div className="container threeColumns-box">
          <div className="threeColumns-item">
            <h2>10</h2>
            <h3>Oddanych worków</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
          <div className="threeColumns-item">
            <h2>5</h2>
            <h3>Wspartych organizacji</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
          <div className="threeColumns-item">
            <h2>7</h2>
            <h3>Zorganizowanych zbiórek</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel
              enim a elit viverra elementuma. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default ThreeColumns;
