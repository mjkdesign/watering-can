import React, {Component} from "react";
import "./Navbar.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Nav extends Component {
  render() {
  return(

<div class="navbar-fixed">
    <nav class='white'>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo black-text">Water Can</a>
        <ul className="right hide-on-med-and-down">
          <li><Link activeClass="active" clasName="signUp" to="signUp" spy={true} smooth={true} duration={500}>Sign Up</Link></li>
          <li><a href="badges.html">Login</a></li>
        </ul>
      </div>
    </nav>
  </div>


  )
  }
};

export default Nav