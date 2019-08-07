import React from "react";
import "./Home.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function Home(props) {

    return(
        <div>
            <div className='homeContainer'>
            <h2> Welcome to Water Can </h2>
            
                <p class="subtitle is-3 has-text-white"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis nostrum obcaecati possimus, libero cupiditate odit rerum eligendi aspernatur delectus</p>
                
                <button><Link activeClass="active" clasName="about" to="about" spy={true} smooth={true} duration={500}> Learn More </Link></button>
            </div>
        </div>
    )
};

export default Home