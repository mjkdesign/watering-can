import React from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function About(props) {

    return(
        <Element name="about" className="about" >
        <div>
            <div className='abtContainer'>
            <h2> About Watering Can</h2>
            </div>
            <div className='abtText'>
                <p> What is Watering Can all about</p>
            </div>
        </div>
        </Element>
    )
};

export default About