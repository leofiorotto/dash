import React from "react";
import styled from "styled-components";
import { TEXTS } from "../../constants";

const OrdersContainer = styled.div`
  /* styled-components CSS here */
`;

const SectionSix = () => {
  return (
    <OrdersContainer>
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
    </OrdersContainer>
  );
};

export default SectionSix;
