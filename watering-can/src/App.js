import React, {Component} from 'react';
import Home from './pages/home/home';
import About from './components/About/About';
import SignUp from './components/Sign-Up/signUp.js';
import Login from './pages/login/login.js';
import Nav from './components/Navbar/Navbar';
import Profile from './pages/profile/profile';
// duplicate link property
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends React.Component {

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeOutQuint'
    })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
      <Nav></Nav>
      {/* <Home></Home>
      <About></About>
      <SignUp></SignUp> */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} /> 
      <Route path="/profile" component={Profile} />
      </header>
    </div>
  );
}
}

export default App;
