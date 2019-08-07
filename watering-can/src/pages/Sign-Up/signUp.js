import React from "react";
import "./signUp.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


function SignUp(props) {

    return(
        <Element name="signUp" className="container signUp" >
        <div className="row">
            <div className="suContainer">
                <h2 className="subtitle is-1 has-text-black col s12"> Sign Up! </h2>
            </div>
            <div>
            <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
            <a class="waves-effect waves-light teal darken-3 btn">submit</a>
        </div>
      </div>
    </form>
  </div>
            </div>
        </div>
        </Element>
    )
};

export default SignUp