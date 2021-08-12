import React, { useState, useEffect } from "react";

const MarsPhoto = (props) => {
    const [photoData, setPhotoData] = useState(null);
    const [roverName, setRoverName] = useState('curiosity');

    useEffect(() => {
        fetchPhoto();
        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=100&camera=fhaz&api_key=6PeRLq1uSyHAchhNylehGB0hqXzaxd5FiqVsNkol`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, [roverName]);

    const onChange = (e) => {
        const value = e.target.value;
        setRoverName(value);
    }

    if (!photoData) return <div />;
    console.log(photoData);

    return (
        <div className="mars-photo">
            <div className="photoOptions">
                <h3>Change the photo by selecting the Rover, Camera, or Sol date.</h3>
                <label />
                <select
                    name="photoOptions"
                    onChange={(e) => onChange(e)}
                >
                    <optgroup label="Rovers">
                        <option value="Curiosity">Curiosity</option>
                        <option value="Spirit">Spirit</option>
                        <option value="Opportunity">Opportunity</option>
                    </optgroup>

                </select>
            </div>
            <img
                src={photoData ? photoData.photos[0].img_src : ''}
                alt={photoData ? photoData.photos[0].name : ''}
                className="photo"
            />
        </div>
    );
}

export default MarsPhoto;