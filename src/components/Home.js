import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="home">
            <Link className="home-link" to="/marsphoto" >Photos of Mars</Link>
            <Link className="home-link" to="/weather" >Weather</Link>
            <Link className="home-link" to="/rovers" >Meet the Rovers</Link>
        </div>

    );
}