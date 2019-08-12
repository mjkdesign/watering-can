import React, {Component} from 'react';
import "./Home.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


class Home extends Component {

    render() {

    return(
        
        <div className='row'>
            <div className='homeContainer'>
            <h2> Welcome to Water Can </h2>
                <p className="col s12 push-s1 "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe omnis nostrum obcaecati possimus, libero cupiditate odit rerum eligendi aspernatur delectus</p>
                
                <button><Link activeClass="active" clasName="about" to="about" spy={true} smooth={true} duration={500}> Learn More </Link></button>
            </div>
        </div>
    )
    }
};

export default Home