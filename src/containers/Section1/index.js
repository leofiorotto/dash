import React from "react";
import styled from "styled-components";
import { TEXTS } from "../../constants";

const SectionOneContainer = styled.aside`
  /* styled-components CSS here */
`;

const SectionOne = () => {
  return (
    <aside>
    <div class="toggle">
      <div class="logo">
        <img src="images/logo.png" />
        <h2>
          Asmr<span class="danger">Prog</span>
        </h2>
      </div>
      <div class="close" id="close-btn">
        <span class="material-icons-sharp">close</span>
      </div>
    </div>

    <div class="sidebar">
      <a href="#">
        <h3>Dashboard</h3>
      </a>
      <a href="#">
        <h3>Users</h3>
      </a>
      <a href="#">
        <h3>History</h3>
      </a>
      <a href="#" class="active">
        <h3>Analytics</h3>
      </a>
      <a href="#">
        <h3>Tickets</h3>
        <span class="message-count">27</span>
      </a>
      <a href="#">
        <h3>Sale List</h3>
      </a>
      <a href="#">
        <h3>Reports</h3>
      </a>
      <a href="#">
        <h3>Settings</h3>
      </a>
      <a href="#">
        <h3>New Login</h3>
      </a>
      <a href="#">
        <h3>Logout</h3>
      </a>
    </div>
  </aside>
  );
};

export default SectionOne;
