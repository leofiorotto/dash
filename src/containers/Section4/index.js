import React from "react";
import styled from "styled-components";
import { TEXTS } from "../../constants";

const SectionFourContainer = styled.div`
  /* styled-components CSS here */
`;

const SectionFour = () => {
  return (
    <div class="new-users">
    <h2>New Users</h2>
    <div class="user-list">
      <div class="user">
        <img src="images/profile-2.jpg" />
        <h2>Jack</h2>
        <p>54 Min Ago</p>
      </div>
      <div class="user">
        <img src="images/profile-3.jpg" />
        <h2>Amir</h2>
        <p>3 Hours Ago</p>
      </div>
      <div class="user">
        <img src="images/profile-4.jpg" />
        <h2>Ember</h2>
        <p>6 Hours Ago</p>
      </div>
      <div class="user">
        <img src="images/plus.png" />
        <h2>More</h2>
        <p>New User</p>
      </div>
    </div>
  </div>
  );
};

export default SectionFour;
