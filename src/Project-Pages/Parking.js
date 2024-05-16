import React, { useEffect} from "react";
import "./Main.scss";
import "typeface-inter";
import FirstWatchPrototype from "../Images/FirstWatchPrototype.png";
import Navigation from "../Components/Navigation";
function Home() {

  useEffect(() => {
    document.title = "Parking App";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
      <Navigation/>
        <div className="Hero-Container">
            <h1>Parking Application (Case Study) - Ongoing</h1>
            <h2>I've enrolled in a UX design certificate program offered by Google to enhance my skills and prepare for my next career move.</h2>
            <h3> I have chosen to build a mobile app and a responsive website for people to find, dispute, and pay their parking tickets.  I will constantly update this page as the projects goes along and I complete tasks.</h3>
          <img src={FirstWatchPrototype} alt="FirstWatchPrototype" />
        </div>
      </header>
    </div>
  );
}

export default Home;
