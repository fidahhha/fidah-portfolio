import React, { useEffect } from "react";
import "./Main.scss";
import "typeface-inter";

// Icons
import { FaGithub, FaFigma, FaAndroid, FaMicrosoft } from "react-icons/fa";

// Images
import background from "../Images/BG-Kawena.jpg";
import parking from "../Images/ParkingPrototype2.png";

// Components
import Navigation from "../Components/Navigation";

function Home() {
  useEffect(() => {
    document.title = "Parking App";
  }, []);

  return (
    <div className="Home">
      <header className="App-header">
        <Navigation />
        <div className="Hero">
          {/* <img src={background} alt="Background"></img> */}
          <div className="text-overlay">
            <h1>Ticket Ease</h1>
            <p className="SubHeader">
              Parking app to manage tickets and find parking.
            </p>
          </div>
        </div>
        <div className="body">
          <div className="projects-container">
            <div class="project">
              <h1>Timeline</h1>
              <p>May 15 2024 - 15 Nov 2024</p>
            </div>
            <div className="project">
              <h1>My Role</h1>
              <p>UX/UI Designer</p>
            </div>
            <div className="project">
              <h1>Tools</h1>
              <div className="icon-wrapper">
                <div className="icon-container">
                  <FaFigma className="icon" size={20} />
                  <span className="tag">Figma</span>
                </div>
              </div>
            </div>
          </div>

          <div className="DetailsContainer">
            <h2>Description</h2>
            <p>
              This project involves developing a comprehensive parking ticket
              management app designed to alleviate the challenges faced by
              individuals in managing their parking tickets and finding car
              parks. The app aims to provide a centralized, user-friendly
              platform for tracking and resolving parking tickets efficiently.
              Key features include:
            </p>

            <h2>Problem Statement</h2>
            <p>
              Busy professionals often struggle with managing parking tickets
              due to their demanding schedules. The absence of a centralized,
              user-friendly system leads to potential fines, stress, and
              inefficiency. Manual processes cause frustration and confusion,
              especially in disputing tickets and tracking payments, ultimately
              affecting productivity and peace of mind.
            </p>
            <h2>Solution</h2>
            <p>
              A comprehensive parking ticket management app can address these
              issues. Featuring a centralized dashboard, the app will help users
              track and manage tickets efficiently, reducing missed deadlines.
              Intuitive guidance for disputes, automated processes, and enhanced
              payment visibility will streamline tasks, reduce stress, and
              improve overall satisfaction, allowing users to focus on more
              important activities. Users will also be able to locate nearby
              parkings to efficiently manage their times.
            </p>
          </div>

          <div className="Prototype-Container">
            <h1>
              I Made Managing Your Parks <b>Easier</b>
            </h1>
            <img src={parking} className="ParkingImg"></img>
          </div>

          <div className="UX-Process">
            <h1>Process</h1>
            <div className="Assumptions">
              <h1>Assumptions</h1>
              <ul>
                <li>
                  <b>Frequent Drivers: </b>Users regularly drive and need
                  parking solutions frequently.
                </li>
                <li>
                  <b>Variety of Vehicles: </b>Users have different types of
                  vehicles, including cars, motorcycles, and electric vehicles.
                </li>
                <li>
                  <b>Time-Conscious: </b>Users value their time and want quick,
                  efficient parking solutions.
                </li>
                <li>
                  <b>Environmental Awareness: </b>Some users prefer eco-friendly
                  parking options, like electric vehicle charging stations.
                </li>
              </ul>

              <h1>Research</h1>
              <p>
                I conducted a comprehensive survey targeting a diverse
                demographic of drivers to gather insights into their parking
                challenges, preferences for app features, and technology usage
                habits. The survey included participants from various age
                groups.
              </p>
            </div>

            <div className="user-research">
              <div className="user-interviews">
                <div class="details">
                  <h1>10</h1>
                  <p>User Surveys</p>
                </div>
                <div className="details">
                  <h1>12</h1>
                  <p>Survery Questions</p>
                </div>
                <div className="details">
                  <h1>3</h1>
                  <p>Interviews</p>
                </div>
              </div>

              <div className="user-stats">
                <div class="details">
                  <h1>90%</h1>
                  <p>
                    Of people would prefer to have an easily accesbile mobile
                    app that allows for navigation and parking.
                  </p>
                </div>
                <div className="details">
                  <h1>70%</h1>
                  <p>Of people would use a pre-booking parking feature.</p>
                </div>
                <div className="details">
                  <h1>80%</h1>
                  <p>
                    Of people use credit/debit card methods to pay for fines &
                    parking.
                  </p>
                </div>
                <div class="details">
                  <h1>60%</h1>
                  <p>
                    Of people have a car, which would make this app beneficial
                    for them.
                  </p>
                </div>
                <div className="details">
                  <h1>40%</h1>
                  <p>Of people drive 3-5 times a week.</p>
                </div>
                <div className="details">
                  <h1>50%</h1>
                  <p>Of people said that parking is important for them</p>
                </div>
              </div>

              <h1>Key takeaways from my user interviews</h1>
              <ul>
                <li>
                  Participants expressed frustration with the current process of
                  managing parking fines.
                </li>
                <li>
                  There was an interest in a mobile app solution to streamline
                  ticket management.
                </li>
                <li>
                  Specific features desired included real-time updates on fines,
                  payment reminders, and an intuitive interface for disputing
                  tickets.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
