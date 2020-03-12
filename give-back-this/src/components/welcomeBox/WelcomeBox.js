import React from "react";
class WelcomeBox extends React.Component {
  render() {
    return (
      <div className="header__welcomeBox">
        <h1>
          Zacznij pomagać!
          <br /> oddaj niechciane rzeczy w zaufane ręce
        </h1>
        {/* <svg
          xmlns="../../assets/Decoration.svg"
          //   version="1.1"
          //   viewBox="0 0 100 100"
          //   preserveAspectRatio="xMidYMid slice"
          style={{
            width: "50%",
            height: "50%",
            position: "absolute",
            color: "black",
            top: "0",
            left: "0",
            zIndex: "2"
          }}
        ></svg> */}
        <div className="WelcomeButtons">
          <button className="btnWelcome">Oddaj rzeczy</button>
          <button className="btnWelcome">Zorganizuj zbiórkę</button>
        </div>
      </div>
    );
  }
}
export default WelcomeBox;
