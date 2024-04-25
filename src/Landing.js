import background from "./Images/Landing-BG.png";
import "./Landing.css";
import "typeface-inter";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import React, {useEffect} from "react";

function Landing() {

  useEffect(() => {
    document.title = "Welcome!";
  }, []);

  return (
    <div className="Landing">
      <img src={background} className="App-background" alt="background" />
      <div className="Container">
        <header className="App-header">
          <h1>Fidah Ali</h1>
          <p>
            Welcome to my portfolio! I'm a recent graduate in Computer Science
            and Media Design from the University of Waikato, passionate about
            crafting seamless user experiences and eager to explore
            opportunities in design and technology.
          </p>
          <div className="BTN-Container">
            <Link to="/home">
              <button>Explore my portfolio</button>
            </Link>
          </div>
          <div className="icons-container">
            <a
              href="https://www.linkedin.com/in/fidah-ali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="icons" size={25} />
            </a>
            <a
              href="mailto:alifidah2902@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="icons" size={25} />
            </a>
            <a
              href="https://github.com/fidahhha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icons" size={25} />
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Landing;
