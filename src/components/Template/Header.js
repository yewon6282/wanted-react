import React from "react";
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

export default Header;
