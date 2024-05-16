import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Landing from "./Landing"; // Corrected import
import Home from "./Home"; // Corrected import
import About from "./Project-Pages/About";
import Contact from "./Contact";
import FirstWatch from "./Project-Pages/FirstWatch"
import Kawena from "./Project-Pages/Kawena"
import ProjectManagement from "./Project-Pages/React"
import Parking from "./Project-Pages/Parking"
import CMS from "./Project-Pages/CMS"

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route path="/firstwatch" element={<FirstWatch />}  />
      <Route path="/firstwatch" element={<FirstWatch />}  />
      <Route path="/kawena" element={<Kawena />}  />
      <Route path="/react" element={<ProjectManagement />}  />
      <Route path="/parking" element={<Parking/>}  />
      <Route path="/cms" element={<CMS/>}  />
    </Routes>
  </Router>,
  rootElement,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
