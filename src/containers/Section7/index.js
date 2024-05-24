import React from "react";
import styled from "styled-components";
import { TEXTS } from "../../constants";

const SectionSevenContainer = styled.div`
  /* styled-components CSS here */
`;

const SectionSeven = () => {
  return (
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
  );
};

export default SectionSeven;
