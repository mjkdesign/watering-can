import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Route, Link, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'

class Profile extends Component {


    render(){
        return(
            <div>
                {/* <Navbar /> */}
                <div>User's page</div>
            </div>
        );
    }
}

export default Profile;