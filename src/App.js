import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import MarsPhoto from "./components/MarsPhoto";
import Weather from "./components/Weather";
import Rovers from "./components/Rovers";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className= "app">
        <Route component={Home} path="/" exact />
        <Route component={MarsPhoto} path="/marsphoto" />
        <Route component={Weather} path="/weather" />
        <Route component={Rovers} path="/rovers" /> 
      </div>
    </BrowserRouter>
  );
}


