import React,  { useState, useEffect } from "react";



export default function Weather(){
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetchData();

        async function fetchData() {
            const res = await fetch(
                `https://api.nasa.gov/insight_weather/?api_key=!!!!!&feedtype=json&ver=1.0`
            );
            const data = await res.json();
            setWeatherData(data);
        }
    }, []);
    
    if (!weatherData) return <div />;
        console.log(weatherData)

    return(
        <div className="weather">
           <div> {weatherData.maxTemp}</div>
        </div>
    );
}