import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/login-form/login-form.js";
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'

class LoginPage extends Component {


    render(){
        return(
            <div>
                {/* <Navbar /> */}
                <LoginForm />
            </div>
        );
    }
}

export default LoginPage;

