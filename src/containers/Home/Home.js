import React from "react";
import SectionOne from "../Section1";
import SectionTwo from "../Section2";
import SectionThree from "../Section3";
import SectionFour from "../Section4";
import SectionFive from "../Section5";
import SectionSix from "../Section6";
import SectionSeven from "../Section7";
import SectionEight from "../Section8";
import SectionNine from "../Section9";

const Home = () => {
  return (
    <div class="container">
      <div class="container">
        <SectionOne />
        <SectionTwo />

   

        <div class="right-section">
          <div class="nav">
            <button id="menu-btn">
              <span class="material-icons-sharp">menu</span>
            </button>
            <div class="dark-mode">
            </div>

            <div class="profile">
              <div class="info">
                <p>
                  Hey, <b>Reza</b>
                </p>
                <small class="text-muted">Admin</small>
              </div>
              <div class="profile-photo">
                <img src="images/profile-1.jpg" />
              </div>
            </div>
          </div>

          <div class="user-profile">
            <div class="logo">
              <img src="images/logo.png" />
              <h2>AsmrProg</h2>
              <p>Fullstack Web Developer</p>
            </div>
          </div>

          <div class="reminders">
            <div class="header">
              <h2>Reminders</h2>
              <span class="material-icons-sharp">notifications_none</span>
            </div>

            <div class="notification">
              <div class="icon">
                <span class="material-icons-sharp">volume_up</span>
              </div>
              <div class="content">
                <div class="info">
                  <h3>Workshop</h3>
                  <small class="text_muted">08:00 AM - 12:00 PM</small>
                </div>
                <span class="material-icons-sharp">more_vert</span>
              </div>
            </div>

            <div class="notification deactive">
              <div class="icon">
                <span class="material-icons-sharp">edit</span>
              </div>
              <div class="content">
                <div class="info">
                  <h3>Workshop</h3>
                  <small class="text_muted">08:00 AM - 12:00 PM</small>
                </div>
                <span class="material-icons-sharp">more_vert</span>
              </div>
            </div>

            <div class="notification add-reminder">
              <div>
                <span class="material-icons-sharp">add</span>
                <h3>Add Reminder</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
