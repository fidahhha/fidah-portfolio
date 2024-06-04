import React, { useEffect } from "react";
import "./Main.scss";
import { Link } from "react-router-dom";
// Icons
import { FaFigma, FaReact, FaSass, FaStore } from "react-icons/fa";
import { BsStripe } from "react-icons/bs";
import { SiPayloadcms, SiNextdotjs } from "react-icons/si";
import { MdPhonelink } from "react-icons/md";
// Images
import mobilePrototype from "../Images/mobileprototypeK.png";
import ia from "../Images/information-architechture.png";
// Components
import LaptopMockup from "../Components/LaptopMockup";
import Navigation from "../Components/Navigation";

function Home() {
  useEffect(() => {
    document.title = "Kawena Designs";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <Navigation />
        <div className="Hero">
          <div className="text-overlay">
            <h1>Kawena Designs'</h1>
            <p className="SubHeader">
              E-Commerce Website for a small fashion & jewellery business.
            </p>
            <div className="Frameworks-Container">
              <p className="Frameworks">
                <Link to="https://payloadcms.com/" className="tooltip">
                  <SiPayloadcms className="icons" />
                  Payload CMS
                  <span className="tooltiptext">Learn more</span>
                </Link>
              </p>
              <p className="Frameworks">
                <Link to="https://stripe.com/nz" className="tooltip">
                  <BsStripe className="icons" />
                  Stripe
                  <span className="tooltiptext">Learn more</span>
                </Link>
              </p>
              <p className="Frameworks">
                <SiNextdotjs className="icons"></SiNextdotjs>Next.js
              </p>
            </div>
          </div>
        </div>

        <div className="projects-container">
          <div className="project">
            <h1>My Role</h1>
            <p>UI Designer + Front-end developer</p>
          </div>
          <div className="project">
            <h1>Tools</h1>
            <div className="icon-wrapper">
              <div className="icon-container">
                <FaFigma className="icon" size={20} />
                <span className="tag">Figma</span>
              </div>
              <div className="icon-container">
                <FaSass className="icon" size={20} />
                <span className="tag">SAAS</span>
              </div>
              <div className="icon-container">
                <FaReact className="icon" size={20} />
                <span className="tag">Next.js</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="DetailsContainer">
              <h2>Description</h2>
              <p>
                I have had the absolute honor of creating a website for a small
                fashion/jewellery business Kawena Designs! Kawena designs is at
                the heart of Oahu, Hawaii. It is much more than a brand it is a
                celebration of unique designs, exquisite jewellery, and
                captivating clothing. Bringing 70s inspired fashion and a
                manifestation of artistry and cultural celebration.
              </p>
              <h2>Problem Statement</h2>
              <p>
                Despite its unique designs and cultural roots, Kawena Designs, a
                small fashion and jewelry business in Oahu, Hawaii, struggles to
                reach a broader audience due to limited online presence.
                Reliance on social media for orders hampers expansion efforts,
                hindering efficient order management and customer experience.
                Without a dedicated digital platform, growth potential is
                limited.
              </p>
              <h2>Solution</h2>
              <p>
                To address challenges, we'll create a visually appealing website
                for Kawena Designs, showcasing unique fashion and facilitating
                secure online purchases. This digital solution will expand
                reach, attract diverse customers, and streamline order
                processing, enhancing the brand's impact in fashion and jewelry.
              </p>
            </div>
          </div>
          <div className="column">
            <LaptopMockup />
          </div>

          <div className="Mobile">
            <div className="Mobile-Images">
              <img
                src={mobilePrototype}
                className="Mobile-Prototype"
                alt="Mobile Prototype 1"
              />
            </div>
            <div className="Content">
              <div className="Content-Item">
                <MdPhonelink className="icon" size={20} />
                <h1>Responsive Design:</h1>
                <p>
                  The project features a fully responsive design, ensuring an
                  optimal user experience across various devices, including
                  desktops, tablets, and mobile phones. The layout adapts
                  seamlessly to different screen sizes, providing a consistent
                  and intuitive interface for all users.
                </p>
              </div>
              <div className="Content-Item">
                <SiPayloadcms className="icon" size={20} />
                <h1>Powered by Payload CMS:</h1>
                <p>
                  This project leverages Payload CMS, a modern and flexible
                  content management system, to manage and deliver content
                  efficiently. Payload CMS offers robust features for content
                  management, making it easy to update and maintain the
                  website's content without requiring extensive technical
                  knowledge.
                </p>
              </div>
              <div className="Content-Item">
                <FaStore className="icon" size={20} />
                <h1>Supporting Small Businesses:</h1>
                <p>
                  Designed specifically for a small jewelry and fashion business
                  in the USA, this project provides a professional and stylish
                  online presence. The platform supports both mobile and desktop
                  users, ensuring that customers can browse and shop for jewelry
                  and fashion items seamlessly from any device. The clean and
                  modern design, combined with powerful CMS capabilities,
                  ensures that the business can showcase its products
                  effectively and manage content with ease.
                </p>
              </div>
            </div>
          </div>

          <div className="Technical-Container"></div>
          <div className="UX-Process">
            <img src={ia}></img>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
