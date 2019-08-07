import React from "react";
import "./signUp.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


function SignUp(props) {

    return(
        <Element name="signUp" className="signUp" >
        <div className="suContainer">
            <div>
            <h2> Sign Up! </h2>
            </div>
        </div>
        </Element>
    )
};

export default SignUp