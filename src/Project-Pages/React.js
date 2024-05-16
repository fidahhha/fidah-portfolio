import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Main.scss";
import "typeface-inter";
import { FaLinkedinIn, FaEnvelope, FaBars, FaGithub } from "react-icons/fa";
import FirstWatchPrototype from "../Images/FirstWatchPrototype.png";
import Navigation from "../Components/Navigation";
function Home() {
 
  useEffect(() => {
    document.title = "Project Management";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
      <Navigation/>
        <div className="Hero-Container">
            <h1>Project Management Application</h1>
            <h2>The University of Waikato</h2>
            <h3>React.js ∙  HTML ∙  JavaScript ∙  CSS ∙ Retrieving JSON data</h3>
          <img src={FirstWatchPrototype} alt="FirstWatchPrototype" />
        </div>
      </header>
    </div>
  );
}

export default Home;
