import React from "react";
import NavLogin from "../navLogin/NavLogin";
import NavScroll from "../navScroll/NavScroll";

class SignIn extends React.Component {
  render() {
    return (
      <>
        <NavLogin />
        <NavScroll />
        <div>
          <h2>Zaloguj się</h2>
          <form>
            <input></input>
            <input></input>
          </form>
          <div>
            <button>Załóż konto</button>
            <button>Zaloguj się</button>
          </div>
        </div>
      </>
    );
  }
}
export default SignIn;
