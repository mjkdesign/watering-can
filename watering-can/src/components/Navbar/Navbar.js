import React, {Component} from "react";
import "./Navbar.css";
<<<<<<< HEAD
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import axios from 'axios'
=======
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import UserPage from "../UserPage/UserPage"
import{Route, NavLink, BrowserRouter, Switch} from "react-router-dom";
import Logo from '../../Images/logo.png'
>>>>>>> master

class Nav extends Component {

  constructor() {
    super()
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if(response.status === 200) {
        this.props.updatedUser({
          loggedIn: false,
          userName: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
  return(

<<<<<<< HEAD
<div class="navbar-fixed">
    <nav class='white'>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo black-text">Water Can</a>
        <ul className="right hide-on-med-and-down">
          <li><Link activeClass="active" className="signUp" to="signUp" spy={true} smooth={true} duration={500}>Sign Up</Link></li>
          <li><Link to="/login" className="login">Login</Link></li>
        </ul>
      </div>
    </nav>
  </div>

=======
<nav className="navbar">
>>>>>>> master

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