import React, { useState } from "react";
import Search from "../Template/Search";
import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";

function LoginedHeaderRight(props) {
  const [showModal, setShowModal] = useState(0);

  const showSearch = () => {
    setShowModal(1);
  };

  const closeModal = () => {
    setShowModal(0);
  };

  const userLogout = (event) => {
    event.preventDefault();

    props.onLogout();
  };

  return (
    <div className="header-right">
      <div className="header-right-search-login">
        <button className="search-button" onClick={showSearch}>
          <IoIosSearch size={20} />
        </button>
        {showModal === 1 && <Search closeModal={closeModal} />}
        <FiBell className="bell-icon" size={18} />
        <button className="user-icon-button" onClick={userLogout}>
          <div className="user-icon">
            <img id="userImage" src="https://static.wanted.co.kr/oneid-user/profile_default.png" alt="user" />
          </div>
        </button>
      </div>
      <a href="#!" className="corp-service">
        기업 서비스
      </a>
    </div>
  );
}

export default LoginedHeaderRight;
