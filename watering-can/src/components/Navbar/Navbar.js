import React, {Component} from "react";
import "./Navbar.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import UserPage from "../UserPage/UserPage"
import{Route, NavLink, BrowserRouter, Switch} from "react-router-dom";

class Nav extends Component {
  render() {
  return(


<div class="navbar-fixed">
    <nav class='white'>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo black-text">Water Can</a>
        <ul className="right hide-on-med-and-down">
          <li><Link activeClass="active" className="signUp" to="signUp" spy={true} smooth={true} duration={500}>Sign Up</Link></li>
          <li><NavLink to="/userPage">Login</NavLink></li>
        </ul>
    
      </div>
    </nav>
    
    <Switch>
          <Route path="/userPage" component={UserPage} />
    </Switch>
  </div>
  


  )
  }
};

export default Nav