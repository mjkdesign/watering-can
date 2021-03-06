import React, { Component } from "react";
import "./signUp.css";
import { DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import Axios from "axios";
import Login from "../../pages/login/login";



class SignUp extends Component {

  constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
    })
}


  handleSubmit = event => {
    event.preventDefault();
    console.log('creating new user: ', this.state.username);

    Axios.post('/user/', {
      username: this.state.username,
      password: this.state.password,
      
    })
    .then(response => {
      console.log(response)
      if (!response.data.errmsg) {
        console.log('successful signup')
        // this.setState({
        //   redirectTo: '/login'
        // })
        
      } else {
        console.log('username already taken')
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
          <input name="username" type="text" class="validate" value={this.state.username} onChange={this.handleChange}/>
          <label for="username">User Name</label>
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
          <input name="password" type="password" class="validate" value={this.state.password} onChange={this.handleChange}/>
          <label for="password">Password</label>
        </div>
      </div>
      {/* <div class="row">
        <div class="input-field col s12">
          <input name="email" type="email" class="validate" value={this.state.email} onChange={this.handleInputChange}/>
          <label for="email">Email</label>
        </div>
      </div> */}
      <div class="row">
        <div class="col s12">
            {/* <a class="waves-effect waves-light teal darken-3 btn" href="/login" onClick={this.handleSubmit}>submit</a> */}
            <Link to="/login" className="submit" onClick={this.handleSubmit}>submit</Link>
        </div>
      </div>
    </form>
  </div>
            </div>
        </div>
        <Route path="/login" component={Login} /> 
        </Element>
    );
  }
}

export default SignUp;