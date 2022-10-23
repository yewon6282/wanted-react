import React from "react";
import "../../css/header.css";
import HeaderCenter from "../Molecules/HeaderCenter";
import HeaderLeft from "../Molecules/HeaderLeft";
import HeaderRight from "../Molecules/HeaderRight";

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
