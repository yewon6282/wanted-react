import React, { useState } from "react";
import Login from "../Template/Login";
import Signup from "../Template/Signup";
import Search from "../Template/Search";
import { IoIosSearch } from "react-icons/io";

function HeaderRight(props) {
  const [showModal, setShowModal] = useState(0);
  const [inputEmail, setInputEmail] = useState('');

  const showSearch = () => {
    setShowModal(1);
  }

  const showLogin = () => {
    setShowModal(2);
  };

  const closeModal = () => {
    setShowModal(0);
  };

  return (
    <div className="header-right">
      <div className="header-right-search-login">
        <button onClick={showSearch}>
          <IoIosSearch size={20} />
        </button>
        {showModal === 1 && <Search closeModal={closeModal}/>}
        <button onClick={showLogin} className="loginModal">
          회원가입/로그인
        </button>
        {showModal === 2 && <Login closeModal={closeModal} setShowModal={setShowModal} setInputEmail={setInputEmail}/>}
        {showModal === 3 && <Signup closeModal={closeModal} inputEmail={inputEmail} setShowModal={setShowModal} onLogin={props.onLogin}/>}
      </div>
      <a href="#!" className="corp-service">
        기업 서비스
      </a>
    </div>
  );
}

export default HeaderRight;
