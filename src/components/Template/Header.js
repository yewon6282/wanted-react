import React from "react";
import "../../css/header.css";
import "../../css/LoginedHeader.css";
import HeaderCenter from "../Organism/HeaderCenter";
import HeaderLeft from "../Organism/HeaderLeft";
import HeaderRight from "../Organism/HeaderRight";
import LoginedHeaderRight from "../Organism/LoginedHeaderRight";

function Header(props) {
  return (
    <header>
      <div className="header">
        <HeaderLeft />
        <HeaderCenter />
        {!props.isLoggedIn ? <HeaderRight onLogin={props.onLogin} /> : <LoginedHeaderRight onLogout={props.onLogout} />}
      </div>
    </header>
  );
}

export default Header;
