import React, {Component} from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import API from "../../utils/API"
import "./userPage.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class UserPage extends Component {

    state = {
        plants: []
    };

    componentDidMount() {
        this.loadPlants();
    }

    loadPlants = () => {
        API.getPlants()
        .then(res =>
            this.setState({ plants: res })
            )
            console.log(`State: ${this.state}`)
    }

    render() {
        return(
        <div>
            <div className="row">

                <div className="col s3">
                    <div className="plantContainer">
                    {/* Plants listed by id (display name and image) */}
                        <ul>
                            <li></li>
                        </ul>
                    </div>
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

export default UserPage