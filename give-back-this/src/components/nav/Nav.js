import React from "react";
import NavLogin from '../navLogin/NavLogin';
import NavScroll from '../navScroll/NavScroll';

class Nav extends React.Component {
  render() {
    return (
      <>
    <NavLogin/>
    <NavScroll/>
      </>
    )
  }
}
export default Nav;
