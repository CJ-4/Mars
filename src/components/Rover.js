import React, { useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import RoverCard from "./RoverCard";

const Rover = (props) => {

    const [roverData, setRoverData] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            fetch(
                `https://api.nasa.gov/mars-photos/api/v1/manifests/${props.roverName}?&api_key=6PeRLq1uSyHAchhNylehGB0hqXzaxd5FiqVsNkol`
            ).then(res => {
                return res.json();
            }).then(data => {
                setRoverData(data);
            });
        }
        fetchData();
    }, [props.roverName]);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    const CardStyle = {
        border: "10px solid black",
        margin: "20px",
        width: "400px",
        height: "400px",
        //display: "inline-block",
        background: "rgb(233, 219, 165)"
    };

    return (
        <div>
            <div>
                <div> {roverData ? roverData.map : ''}</div>
            </div>
            <div>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <div>
                        <input
                            style={CardStyle}
                            type="image"
                            onClick={handleClick}
                            src={props.roverImageUrl}
                            alt={props.roverAltTag}
                        ></input>
                    </div>
                    <div>
                        <button 
                        style={CardStyle}
                        onClick={handleClick}>
                        {roverData ?
                            <RoverCard
                                roverName={props.roverName}
                                landingDate={roverData.photo_manifest.landing_date}
                                launchDate={roverData.photo_manifest.launch_date}
                                status={roverData.photo_manifest.status}
                            />
                        : ''}
                        </button>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    );
}

export default Rover;