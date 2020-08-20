import React, { useState } from "react";

import RMDBLogo from "../images/reactMovie_logo.png";
import TMDBLogo from "../images/tmdb_logo.svg";
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from "../styles/StyledHeader";

// const StyledHeader = styled.div`
//   background: #1c1c1c;
//   padding: 0 20px;
//   box-sizing: border-border-box;

//   .header-content {
//     max-width: 1280px;
//     min-height: 120px;
//     padding: 20px 0px;
//     margin: 0 auto;
//     box-sizing: border-box;

//     @media screen and (max-width: 500px) {
//       min-height: 0px;
//     }
//   }
// `;

// const StyledRMDBLogo = styled.img`
//   width: 250px;
//   margin-top: 20px;

//   @media screen and (max-width: 500px) {
//     width: 150px;
//     margin-top: 5px;
//   }
// `;

// const StyledTMDBLogo = styled.img`
//   width: 122px;
//   margin-top: 25px;
//   float: right;

//   @media screen and (max-width: 500px) {
//     display: inline-block;
//     width: 80px;
//     margin-top: 0px;
//   }
// `;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
      </div>
    </StyledHeader>
  );
};

export default Header;
