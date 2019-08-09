import React, {Component} from "react";
import "./userPage.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class userPage extends Component {

    render() {
        return(
        <div>
            <div className="row">

                <div className="col s3">
                    {/* Plants listed by id (display name and image) */}
                </div>

                <div className="col s9">
                    {/* Plant care (light and water can go here) */}
                </div>

            </div>

            <div className="row">

                <div className="col s9">
                {/* possibly add calendar here */}
                </div>

            </div>
        </div>
        )
    }
};

export default userPage