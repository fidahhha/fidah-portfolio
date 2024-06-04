import React, { useEffect } from "react";
import "./Main.scss";
import "typeface-inter";

// Icons
import { FaGithub, FaFigma, FaAndroid, FaMicrosoft } from "react-icons/fa";

// Images
import beans from "../Images/coffee.jpg";
import developer from "../Images/code.svg";
import design from "../Images/design.svg";
import responsive from "../Images/responsive.svg";
// Components
import Navigation from "../Components/Navigation";

function Home() {
  useEffect(() => {
    document.title = "About Fidah";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <Navigation />
        <div className="Hero">
          {/* <img src={background} alt="Background"></img> */}
          <div className="text-overlay">
            <h1>Hey there, I'm Fidah</h1>
            <p className="SubHeader">
              Welcome to my world where creativity meets passion. Let's explore
              together!
            </p>
            <p className="sub-header">
              Passionate <b>Front-End Developer</b> with a love for{" "}
              <b>UX/UI Design.</b>
            </p>
          </div>
        </div>

        <h1 className="AboutHeader">Specialities</h1>

        <div className="specialities">
          <div>
            {" "}
            <img src={developer}></img>
            <p className="sectionHeader">Front-End Development</p>
            <p className="sectionSubHeader">
              Bringing designs to life with code, focusing on creating seamless
              and immersive web experiences.
            </p>
          </div>
          <div>
            {" "}
            <img src={design}></img>
            <p className="sectionHeader">UX/UI Design</p>
            <p className="sectionSubHeader">
              Designing interfaces that prioritize user needs and behaviors,
              aiming for simplicity and efficiency in every interaction
            </p>
          </div>
          <div>
            {" "}
            <img src={responsive}></img>
            <p className="sectionHeader">Responsive Design</p>
            <p className="sectionSubHeader">
              Ensuring users have a consistent and have an enjoyable browsing experience
              regardless of screen size.
            </p>
          </div>
        </div>

        <div className="Quote">
          <p>
            <i>"A User Interface is like a joke. If you have to explain it, it's
            not that good."</i>
          </p>
          <p className="Author">- Martin LeBlanc.</p>
        </div>
        <div className="Interests"></div>
      </header>
    </div>
  );
}

export default Home;
