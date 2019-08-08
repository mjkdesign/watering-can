import React, { Component } from "react";

class Youtube extends Component {

    render() {
        return(
        <div className="youtube">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/c6t3bW7kx6E" 
           frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen></iframe>
        </div>
        );
    }

}

export default Youtube;