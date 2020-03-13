import React from "react";
import {
  Link,
  // DirectLink,
  // Element,
  // Events,
  // animateScroll as scroll,
  // scrollSpy,
  // scroller
} from "react-scroll";
import "./NavScroll.scss";

const NavScroll = () => {
  return (
    <ul className="nav navbar-nav">
      <li>
        <Link
          activeClass="active"
          className="test1"
          to="start"
          spy={true}
          smooth={true}
          duration={500}
        >
          Start
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          className="test1"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          O co chodzi?
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          className="test1"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          O nas
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          className="test1"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          Fundacja i organizacje
        </Link>
      </li>
      <li>
        <Link
          activeClass="active"
          className="test1"
          to="test1"
          spy={true}
          smooth={true}
          duration={500}
        >
          Kontakt
        </Link>
      </li>
    </ul>
  );
};
export default NavScroll;
