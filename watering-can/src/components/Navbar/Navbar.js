import React, {Component} from "react";
import "./Navbar.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import UserPage from "../UserPage/UserPage"
import{Route, NavLink, BrowserRouter, Switch} from "react-router-dom";
import Logo from '../../Images/logo.png'

class Nav extends Component {
  render() {
  return(

<nav className="navbar">

    <img className="logo" src={Logo}></img>
  <div className="menu">
    <ul>
        <li><Link activeClass="active" className="navSignUp" to="signUp" spy={true} smooth={true} duration={500}>Sign Up</Link></li>
        <li> Login </li>
    </ul>
  </div>
</nav>
  
  )
  }
};

export default Nav