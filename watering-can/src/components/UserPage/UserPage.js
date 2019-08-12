import React, {Component} from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import API from "../../utils/API";
import "./userPage.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class UserPage extends Component {

    state = {
        plants: []
    };

    componentDidMount() {
        this.loadPlants();
    };

    loadPlants = () => {
        API.getPlants()
        // fetch("http://localhost:3001/api/plants")
        .then(res =>
            this.setState({ plants: res.json })
            )
            console.log(`State: ${this.state}`)
    };

    


    render() {
        console.log(this.state)
        return(
        <div>
            <div className="row">

                <div className="col s3">
                    <div className="plantContainer">
                        <h3>Plants</h3>
                        <ul>
                            <li>Hello</li>
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