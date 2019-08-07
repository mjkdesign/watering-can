import React from "react";
import "./Navbar.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


function Nav(props) {

  return(
<div className="navContainer">
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  {/* <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>
      </div>
    </div> */}

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
          <Link activeClass="active" clasName="signUp" to="signUp" spy={true} smooth={true} duration={500}>
            <strong>Sign up</strong>
          </Link>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </nav>
  </div>

  )
};

export default Nav