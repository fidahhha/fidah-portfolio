import React, {useEffect} from "react";
import "./Main.scss";
import "typeface-inter";
import FirstWatchPrototype from "../Images/FirstWatchPrototype.png";
import Navigation from "../Components/Navigation";
function CMS() {

  useEffect(() => {
    document.title = "UoW CMS";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
      <Navigation/>
        <div className="Hero-Container">
            <h1>Content Management Application</h1>
            <h2>The University of Waikato</h2>
            <h3>Android Studio Java ∙ GitLab</h3>
          <img src={FirstWatchPrototype} alt="FirstWatchPrototype" />
        </div>
      </header>
    </div>
  );
}

export default CMS;
