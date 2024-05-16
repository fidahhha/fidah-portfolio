import React, {useEffect } from "react";
import "./Main.scss";
import "typeface-inter";
import {FaBars} from "react-icons/fa";
import Navigation from "../Components/Navigation";
function Home() {

  useEffect(() => {
    document.title = "About Me";
  }, []);
  
  return (
    <div className="Home">
      <header className="App-header">
      <Navigation/>
      </header>
    </div>
  );
}

export default Home;
