import React,  { useState, useEffect } from "react";



export default function MarsPhoto(){
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=6PeRLq1uSyHAchhNylehGB0hqXzaxd5FiqVsNkol`
            );
            const data = await res.json();
            setPhotoData(data);
        }
    }, []);
    
    if (!photoData) return <div />;
    console.log(photoData.photos[0]);

    return(
        <div className="mars-photo">
            <img
            src={photoData.photos[0].img_src}
            alt={photoData.photos[0].name}
            className="photo"
            />
        </div>
    );
}