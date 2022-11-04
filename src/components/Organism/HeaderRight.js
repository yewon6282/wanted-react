import React, { useState } from "react";
import Login from "../Template/Login";
import Signup from "../Template/Signup";
import Search from "../Template/Search";
import { IoIosSearch } from "react-icons/io";

function HeaderRight() {
  const [showModal, setShowModal] = useState(0);

  const showSearch = () => {
    setShowModal(1);
  }

  const showLogin = () => {
    setShowModal(2);
  };

  const closeModal = () => {
    setShowModal(0);
  };
  
  const [checkEmail, setCheckEmail] = useState(true);
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [inputEmail, setInputEamil] = useState("");
  const emailCheck = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  
  const onChange = (e) => {
    if (emailCheck.test(e.target.value) === true) {
      setCheckEmail(true);
      setEmailSubmit(true);
      setInputEamil(e.target.value);
    } else {
      setCheckEmail(false);
      setEmailSubmit(false);
    }
  };
  
  function showSignup() {
    setCheckEmail(true);
    setEmailSubmit(false);
    setShowModal(3);
  }

  return (
    <div className="header-right">
      <div className="header-right-search-login">
        <button onClick={showSearch}>
          <IoIosSearch size={20} />
        </button>
        {showModal === 1 && <Search closeModal={closeModal}/>}
        <button onClick={showLogin} className="menu">
          회원가입/로그인
        </button>
        {showModal === 2 && <Login closeModal={closeModal} onChange={onChange} checkEmail={checkEmail} emailSubmit={emailSubmit} showSignup={showSignup} />}
        {showModal === 3 && <Signup closeModal={closeModal} setShowModal={setShowModal} inputEmail={inputEmail}/>}
      </div>
      <a href="#!" className="corp-service">
        기업 서비스
      </a>
    </div>
  );
}

export default HeaderRight;
