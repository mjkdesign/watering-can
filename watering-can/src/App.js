import React, {Component} from 'react';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SignUp from './components/Sign-Up/signUp.js';
import Nav from './components/Navbar/Navbar';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

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
      <Home></Home>
      <About></About>
      <SignUp></SignUp>
      </header>
    </div>
  );
}
}

export default App;
