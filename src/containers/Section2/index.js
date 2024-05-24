import React from "react";
import styled from "styled-components";
import { TEXTS } from "../../constants";
import SectionThree from "../Section3";
import SectionFour from "../Section4";
import SectionFive from "../Section5";

const Main = styled.main`
  /* styled-components CSS here */
`;

const SectionTwo = () => {
  return (
    // <Main>
    //   <h1>{TEXTS.MAIN_TITLE}</h1>
    //   
    //   
    //   <SectionFive />
    // </Main>
    <main>
      <h1>Analytics</h1>
      <SectionThree />
      <SectionFour />



      <div class="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <a href="#">Show All</a>
      </div>
    </main>
  );
};

export default SectionTwo;
