import React, { Component } from "react";
import "./signUp.css";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Axios from "axios";



class SignUp extends Component {

  state = {
    
    userName: "",
    password: "",
    email: ""
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('creating new user: ', this.state.firstName);

    Axios.post('/', {
      username: this.state.username,
      password: this.state.password,
      // email: this.state.email
    })
    .then(response => {
      console.log(response)
      if (response.data) {
        console.log('successful signup')
        this.setState({
          redirectTo: '/login'
        })
      } else {
        console.log('Sign-Up error')
      }
    }).catch(error => {
      console.log('Sign up server error: ')
      console.log(error);
    })

  }



    render () {

      console.log('this is my state: ', this.state);

      return (
        <Element name="signUp" className="container signUp" >
        <div className="row">
            <div className="suContainer">
                <h2 className="subtitle is-1 has-text-black col s12"> Sign Up! </h2>
            </div>
            <div>
            <div class="row">

          {/* <!-- show any messages that come back with authentication --> */}
          {/* <% if (message.length > 0) { %>
              <div class="alert alert-danger"><%= message %></div>
          <% } %> */}

    {/* LOGIN FORM */}
    <form class="col s12" action="/signup" method="post">
      <div class="row">
        <div class="input-field col s12">
          <input name="userName" type="text" className="validate" value={this.state.userName} onChange={this.handleInputChange}/>
          <label for="userName">User Name</label>
        </div>
        {/* <div class="input-field col s6">
          <input name="lastName" type="text" class="validate" value={this.state.lastName} onChange={this.handleInputChange}/>
          <label for="lastName">Last Name</label>
        </div> */}
      </div>
      <div class="row">
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input name="password" type="password" class="validate" value={this.state.password} onChange={this.handleInputChange}/>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input name="email" type="email" class="validate" value={this.state.email} onChange={this.handleInputChange}/>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
            <a class="waves-effect waves-light teal darken-3 btn" href="/profile" onClick={this.handleSubmit}>submit</a>
        </div>
      </div>
    </form>
  </div>
            </div>
        </div>
        </Element>
    );
  }
}

export default SignUp;