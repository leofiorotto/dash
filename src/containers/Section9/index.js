import React from "react";
import styled from "styled-components";
import { TEXTS } from "../../constants";

const SectionNineContainer = styled.div`
  /* styled-components CSS here */
`;

const SectionNine = () => {
  return (
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
  );
};

export default SectionNine;
