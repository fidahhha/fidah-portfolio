import React, { useState, useEffect } from "react";
import "./Main.scss";

// Icons
import { FaGithub, FaFigma, FaAndroid, FaMicrosoft } from "react-icons/fa";

// Images & Videos
import background from "../Images/BG-Kawena.jpg";
import video from "../Images/FWRecording.mp4";

// Components
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
        <Navigation />
        <div className="Hero">
          {/* <img src={background} alt="Background"></img> */}
          <div className="text-overlay">
            <h1>First Watch</h1>
            <p className="SubHeader">Cybersecurity Alarms Application (Client Based).</p>
          </div>
        </div>

        <div className="projects-container">
          <div class="project">
            <h1>Timeline</h1>
            <p>10 Jul 2023 - 05 Nov 2023</p>
          </div>
          <div className="project">
            <h1>My Role</h1>
            <p>UI Designer + Front-end developer</p>
          </div>
          <div className="project">
            <h1>Tools</h1>
            <div className="icon-wrapper">
              <div className="icon-container">
                <FaAndroid className="icon" size={20} />
                <span className="tag">Android</span>
              </div>
              <div className="icon-container">
                <FaFigma className="icon" size={20} />
                <span className="tag">Figma</span>
              </div>
              <div className="icon-container">
                <FaMicrosoft className="icon" size={20} />
                <span className="tag">PowerPoint</span>
              </div>
              <div className="icon-container">
                <FaGithub className="icon" size={20} />
                <span className="tag">GitHub</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="DetailsContainer">
              <h2>Description</h2>
              <p>
                The mobile app extends First Watch's cybersecurity Platform to
                smartphones, providing real-time alerts and easy access to
                security information. Users can manage events, receive
                notifications, and visualize alarm logs for proactive threat
                response.
              </p>
              <h2>Problem Statement</h2>
              <p>
                First Watch lacks a mobile application, hindering users' ability
                to stay informed about cybersecurity events and manage
                activities remotely. This gap in accessibility risks delayed
                responses to critical alerts, potentially leading to customer
                loss and diminished competitiveness.
              </p>
              <h2>Solution</h2>
              <p>
                We propose developing a mobile app to bridge the accessibility
                gap for First Watch's cybersecurity platform. This solution will
                offer real-time notifications and intuitive alarm management,
                empowering users to respond promptly to cybersecurity events
                anytime, anywhere.
              </p>
            </div>
          </div>
          <div className="column">
            <iframe src={video} allow="autoplay; encrypted-media"></iframe>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
