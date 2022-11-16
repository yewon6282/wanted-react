import React from "react";
import styled from "styled-components";
import "../../css/header.css";
import HeaderCenter from "../Organism/HeaderCenter";
import HeaderLeft from "../Organism/HeaderLeft";
import HeaderRight from "../Organism/HeaderRight";


function Header() {
  return (
    <header>
      <div className="header">
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight />
      </div>
    </header>
  );
}

// export const MainHeader = styled.header`
//   z-index: 10;
//   position: fixed;
//   top: 0;
//   width: inherit;
//   height: 3.1rem;
//   border-bottom: 1px solid #aeaeae;
//   background-color: #fff;
// `;

export default Header;
