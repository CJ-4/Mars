import React, {useState, useEffect } from "react";
import ReactCardFlip from "react-card-flip";

const Rover = (props) => {

    const [roverData, setRoverData] = useState(null);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {

        async function fetchData() {
            const res = await fetch(
                `https://api.nasa.gov/mars-photos/api/v1/manifests/${props.roverName}?&api_key=6PeRLq1uSyHAchhNylehGB0hqXzaxd5FiqVsNkol`
            );
            const data = await res.json();
            setRoverData(data);
        }
        fetchData();
    }, []);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="info">
            <div>
                <h2>Meet the Rovers</h2>
                <p> Please click the on the photo of the Mars Rover that you would like to learn more about.</p>
            </div>
            <div className="rover">
                <div> {roverData ? roverData.map : ''}</div>
            </div>

            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <div>
                    curiosity
                <button onClick={handleClick}></button>
                </div>
                <div>
                    curiosity info
                <button onClick={handleClick}></button>
                </div>
            </ReactCardFlip>
        </div>
    );
}

export default Rover;