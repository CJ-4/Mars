import React, { useState, useEffect } from "react";

const Weather = () => {

    const [weatherData, setWeatherData] = useState({
        sol: '3170',
        date: 'July 7, 2021',
        lowTemp: '-110',
        highTemp: '-6',
    });

    const key = `https://api.nasa.gov/insight_weather/?api_key=jUZKBe1ZERqygg15KXaab6JyeqOz5T82izjdLRSg`;
    const fetchData = (apiKey) => {
        fetch(apiKey)
            .then(res => {
                return res.json();
        })
    }

    useEffect(() => {
        const data = fetchData(key);
        // Mars insight rover currently does not return weather data so using hardcoded data until api is functional again
        if (data) {
            setWeatherData(data);
        }
    }, []);

    if (!weatherData) return <div />;

    return (
        <main className="weather">
            <h1 className="title">Latest Weather on Mars</h1>
            <div className="date">
                <h2 className="date-title">Sol: {weatherData.sol}</h2>
            </div>

            <p className="earth-date">{weatherData.date}</p>
            <div className="temp"></div>
            <h2 className="temp-title">Temperature</h2>
            <p className="temp-high">High: {weatherData.highTemp} °F</p>
            <p className="temp-low">Low: {weatherData.lowTemp} ℉</p>
        </main>
    );
}

export default Weather;