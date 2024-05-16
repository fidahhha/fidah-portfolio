import React, { useState, useEffect } from "react";
import "./Main.scss";
import "typeface-inter";
import {
  FaGithub,
  FaFigma,
  FaAndroid,
  FaMicrosoft,
} from "react-icons/fa";
import FirstWatchPrototype from "../Images/FirstWatchPrototype.png";
import FWFlow from "../Images/FWWireframes.png";
import FWIdentity from "../Images/FWbrandidentity.png";
import Navigation from "../Components/Navigation";


function Home() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const openImage = (imageSrc) => {
    setEnlargedImage(imageSrc);
  };

  const closeImage = () => {
    setEnlargedImage(null);
  };

  useEffect(() => {
    document.title = "Alarms App";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
      <Navigation/>
        <div className="Hero-Container">
          <h1>Cybersecurity Alarms Application</h1>
          <h2>Client based project with First Watch</h2>
          <h3>Android Studio Java ∙ Figma ∙ Microsoft PowerPoint ∙ GitHub</h3>
          <a
            href="https://www.figma.com/proto/VW7OJttf6HGg9k2CQaSlie/First-Watch-Wireframes?type=design&node-id=10-3&t=dwipyvaWeJyxU6rj-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=10%3A3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button class="prototype-btn">Test the prototype!</button>
          </a>
          <img
            src={FirstWatchPrototype}
            alt="FirstWatchPrototype"
            onClick={() => openImage(FirstWatchPrototype)}
          />
          {enlargedImage && (
            <div className="overlay" onClick={closeImage}>
              <img
                src={enlargedImage}
                alt="Enlarged Image"
                className="enlarged-image"
              />
            </div>
          )}
        </div>
        <div className="FContainer">
          <h2>Description</h2>
          <p>
            The mobile app extends First Watch's cybersecurity Platform to
            smartphones, providing real-time alerts and easy access to security
            information. Users can manage events, receive notifications, and
            visualize alarm logs for proactive threat response.
          </p>
          <h2>Problem Statement</h2>
          <p>
            First Watch lacks a mobile application, hindering users' ability to
            stay informed about cybersecurity events and manage activities
            remotely. This gap in accessibility risks delayed responses to
            critical alerts, potentially leading to customer loss and diminished
            competitiveness.
          </p>
          <h2>Solution</h2>
          <p>
            We propose developing a mobile app to bridge the accessibility gap
            for First Watch's cybersecurity platform. This solution will offer
            real-time notifications and intuitive alarm management, empowering
            users to respond promptly to cybersecurity events anytime, anywhere.
          </p>
        </div>
        <div class="Fprojects-container">
          <div class="Fproject">
            <h1>Timeline</h1>
            <p>10 Jul 2023 - 05 Nov 2023</p>
          </div>
          <div class="Fproject">
            <h1>My Role</h1>
            <p>UI Designer + Front-end developer</p>
          </div>
          <div class="Fproject">
            <h1>Tools</h1>
            <div class="Ficon-wrapper">
              <div className="Ficon-container">
                <FaAndroid className="icon" size={20} />
                <span className="tag">Android</span>
              </div>
              <div className="Ficon-container">
                <FaFigma className="icon" size={20} />
                <span className="tag">Figma</span>
              </div>
              <div className="Ficon-container">
                <FaMicrosoft className="icon" size={20} />
                <span className="tag">PowerPoint</span>
              </div>
              <div className="Ficon-container">
                <FaGithub className="icon" size={20} />
                <span className="tag">GitHub</span>
              </div>
            </div>
          </div>
        </div>
        <div class="FContainer2">
          <h2>Wireframes</h2>
          <div class="image-container">
            <img src={FWFlow} alt="Flow" onClick={() => openImage(FWFlow)} />
            {enlargedImage && (
              <div className="overlay" onClick={closeImage}>
                <img
                  src={enlargedImage}
                  alt="Enlarged Image"
                  className="enlarged-image"
                />
              </div>
            )}
          </div>
        </div>
        <div class="FContainer3">
          <h2>App Identity</h2>
          <div class="image-container">
            <img src={FWIdentity} alt="Flow" onClick={() => openImage(FWIdentity)} />
            {enlargedImage && (
              <div className="overlay" onClick={closeImage}>
                <img
                  src={enlargedImage}
                  alt="Enlarged Image"
                  className="enlarged-image"
                />
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
