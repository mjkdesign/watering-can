import React from "react";
import "./Home.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Home(props) {

    return(
        <div>
            <div className='homeContainer'>
            <h2> Welcome to Watercan </h2>
            <div className='homeText'>
                <p class="subtitle is-3 has-text-white">Lorem Ipsum</p>
                <button><Link activeClass="active" clasName="about" to="about" spy={true} smooth={true} duration={500}> Learn More </Link></button>
            </div>
            </div>
        </div>
    )
};

export default Home