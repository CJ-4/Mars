import React from "react";
import Rover from "./Rover";

const Rovers = () => {

    const roverNames = {
        CURIOSITY: "curiosity",
        OPPORTUNITY: "opportunity",
        SPIRIT: "spirit"
    };

    const roverImageUrls = {
        CURIOSITY: "https://mars.nasa.gov/system/news_items/main_images/8796_PIA24173-1600.jpg",
        OPPORTUNITY: "https://solarsystem.nasa.gov/system/content_pages/main_images/1057_1057_rover2_768.jpg",
        SPIRIT: "https://ca-times.brightspotcdn.com/dims4/default/5dc6428/2147483647/strip/true/crop/400x320+0+0/resize/840x672!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F45%2F3a%2F74c93a2cc42c8bae399632ef5b76%2Fsdut-artists-rendering-of-the-mars-20160828"
    }

    return (
        <div
            className="Rovers"
            style={{
                backgroundImage: `url(https://solarsystem.nasa.gov/internal_resources/3450/)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div>
                <h2>Meet the Rovers</h2>
                <p> Please click the on the photo of the Mars Rover that you would like to learn more about.</p>
            </div>

            <div>
                <Rover
                    roverName={roverNames.CURIOSITY}
                    roverImageUrl={roverImageUrls.CURIOSITY}
                    roverAltTag={"mars photo"}
                />
                <Rover

                    roverName={roverNames.OPPORTUNITY}
                    roverImageUrl={roverImageUrls.OPPORTUNITY}
                    roverAltTag={"mars photo"}
                />
                <Rover
                    
                    roverName={roverNames.SPIRIT}
                    roverImageUrl={roverImageUrls.SPIRIT}
                    roverAltTag={"mars photo"}
                />
            </div>
        </div>
    );
}

export default Rovers;