import React, {useEffect } from "react";
import "./Main.scss";
import "typeface-inter";
import {
  FaFigma,
  FaReact,
  FaSass
} from "react-icons/fa";
import LaptopMockup from "../Components/LaptopMockup";
import Logo1 from "../Images/Kawena_Logo1.png";
import Logo2 from "../Images/Kawena_Logo2.png";
import Navigation from "../Components/Navigation";

function Home() {

  useEffect(() => {
    document.title = "Kawena Designs";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
      <Navigation/>
        <div className="Hero-Container">
          <h1>Kawena Designs'</h1>
          <h2>Small business website (Peronal Project)</h2>
          <h3>Figma ∙ Next.js ∙ SAAS</h3>
          {/* Call method to allow enlargement of image */}
          <LaptopMockup />
        </div>
        <div className="FContainer">
          <h2>Description</h2>
          <p>
            I have had the absolute honor of creating a website for a small
            fashion/jewellery business Kawena Designs! Kawena designs is at the
            heart of Oahu, Hawaii. It is much more than a brand it is a
            celebration of unique designs, exquisite jewellery, and captivating
            clothing. Bringing 70s inspired fashion and a manifestation of
            artistry and cultural celebration.
          </p>
          <h2>Problem Statement</h2>
          <p>
            Despite its unique designs and cultural celebration, Kawena Designs,
            a small fashion and jewelry business located in Oahu, Hawaii, faces
            limitations in reaching a wider audience beyond its local community.
            The absence of a robust online presence and reliance on social media
            for order processing hinder the brand's ability to expand its reach
            effectively. Without a dedicated digital platform, the business
            owner faces challenges in managing orders efficiently and providing
            a seamless customer experience, limiting the brand's growth
            potential and impact.
          </p>
          <h2>Solution</h2>
          <p>
            To overcome these challenges, the solution involves developing a
            visually appealing website for Kawena Designs, serving as a digital
            storefront and marketing platform. This website will showcase the
            brand's unique designs and cultural-inspired fashion, providing a
            seamless browsing experience for potential customers worldwide.
            Additionally, by incorporating e-commerce functionality, the website
            will enable customers to purchase products online securely. This
            comprehensive digital solution will empower Kawena Designs to expand
            its reach, attract a broader audience, and streamline order
            processing, enhancing the brand's growth and impact in the fashion
            and jewelry industry.
          </p>
        </div>

        <div className="Kprojects-container">
          <div className="Kproject">
            <h1>My Role</h1>
            <p>UI Designer + Front-end developer</p>
          </div>
          <div className="Kproject">
            <h1>Tools</h1>
            <div className="Kicon-wrapper">
              <div className="Kicon-container">
                <FaFigma className="icon" size={20} />
                <span className="tag">Figma</span>
              </div>
              <div className="Kicon-container">
                <FaSass className="icon" size={20} />
                <span className="tag">SAAS</span>
              </div>
              <div className="Kicon-container">
                <FaReact className="icon" size={20} />
                <span className="tag">Next.js</span>
              </div>
            </div>
          </div>
        </div>
        <div className="KStyle-Guide">
          <h1>Style Guide</h1>
        </div>
        <div className="row">
          <div className="column">
            <img src={Logo1} alt="Logo 1" />
          </div>
          <div className="column">
            <img src={Logo2} alt="Logo 2" />
          </div>
        </div>

        <div className="color-palette">
          <div className="color-swatch" style={{ backgroundColor: "#A45328" }}>
            <div className="swatch-number">#A45328</div>
          </div>
          <div className="color-swatch" style={{ backgroundColor: "#283519" }}>
            <div className="swatch-number">#283519</div>
          </div>
          <div className="color-swatch" style={{ backgroundColor: "#616936" }}>
            <div className="swatch-number">#616936</div>
          </div>
          <div className="color-swatch" style={{ backgroundColor: "#655824" }}>
            <div className="swatch-number">#655824</div>
          </div>
        </div>

        <div className="fonts">
          <div className="font-style">
            <h1>Aa</h1>
            <h3>Letter Magic</h3>
          </div>
          <div className="font-style">
            <h1>Aa</h1>
            <h3>Inter</h3>
          </div>
          <div className="font-style">
            <h1>Aa</h1>
            <h3>Berkshire Swash</h3>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
