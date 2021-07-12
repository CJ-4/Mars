import React from "react";
import Rover from "./Rover";

const Rovers = () => {

    const roverNames = {
        CURIOSITY: "curiosity",
        OPPORTUNITY: "opportunity",
        SPIRIT: "spirit"
    };

    return (
        <div>
            <Rover
                roverName={roverNames.CURIOSITY}
            />
            <Rover
                roverName={roverNames.OPPORTUNITY}
            />
            <Rover
                roverName={roverNames.SPIRIT}
            />
        </div>
    );
}

export default Rovers;