import React, {Component} from 'react';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import SignUp from "../../components/Sign-Up/signUp";
import Login from '../../pages/login/login';
import Profile from '../../pages/profile/profile';

class Homepage extends Component {
    render(){
        return (
          <div className="App">
            <header className="App-header">
            
            <Home />
            <About />
            <SignUp />
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route path="/about" component={About} /> */}
            <Route path="/login" component={Login} /> 
            <Route path="/profile" component={Profile} />
            </header>
          </div>
        );
      }
}

function Home(props) {

    return(
        <div className='row'>
            <div className='homeContainer'>
            <h2> Welcome to Water Can </h2>
                <p className="col s12 push-s1 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis nostrum obcaecati possimus, libero cupiditate odit rerum eligendi aspernatur delectus</p>
                
                <button><Link activeClass="active" className="about" to="about" spy={true} smooth={true} duration={500}> Learn More </Link></button>
            </div>
        </div>
    )
};

export default Home
