import React from 'react';
import styled from 'styled-components';
import SectionSeven from '../Section7';
import SectionEight from '../Section8';
import SectionNine from '../Section9';

const RightContainer = styled.div`
  /* styled-components CSS here */
`;

const SectionThree = () => {
  return (
    // <RightContainer>
    //   <SectionSeven />
    //   <SectionEight />
    //   <SectionNine />
    // </RightContainer>
    <div class="analyse">
    <div class="sales">
      <div class="status">
        <div class="info">
          <h3>Total Sales</h3>
          <h1>$65,024</h1>
        </div>
        <div class="progresss">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
          <div class="percentage">
            <p>+81%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="visits">
      <div class="status">
        <div class="info">
          <h3>Site Visit</h3>
          <h1>24,981</h1>
        </div>
        <div class="progresss">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
          <div class="percentage">
            <p>-48%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="searches">
      <div class="status">
        <div class="info">
          <h3>Searches</h3>
          <h1>14,147</h1>
        </div>
        <div class="progresss">
          <svg>
            <circle cx="38" cy="38" r="36"></circle>
          </svg>
          <div class="percentage">
            <p>+21%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SectionThree;
