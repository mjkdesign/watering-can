import React from "react";
import "./About.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function About(props) {

    return(
        <Element name="about" className="container about" >
        <div className='row'>
            <div className='abtMain'>
                <div className='abtContainer'>
                    <h2 class="subtitle is-1 has-text-black col s12 pull-s3"> About Watering Can</h2>
                </div>
            </div>
            <div className='abtText col s12 pull-s1'>
                <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
        </div>
        <img src="../..Images/plant-serum-banner.jpg" alt=""></img>
        </Element>
    )
};

export default About