
import React from "react";

const RoverCard = (props) => {

    return (
        <div className="card">
            <h3>{props.roverName.toUpperCase()} </h3>
            <p>Launch Date: {props.launchDate}</p>
            <p>Landing Date: {props.landingDate}</p>
            <p>Rover Mission Status: "{props.status}"</p>
        </div>
    );
}

export default RoverCard;
