import React, {Component} from 'react';
import Home from './pages/home/home';
import About from './components/About/About';
import SignUp from './components/Sign-Up/signUp.js';
import Login from './pages/login/login.js';
import Nav from './components/Navbar/Navbar';
import Profile from './pages/profile/profile';
import axios from 'axios';
// duplicate link property
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

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
