import React, { useState } from "react";
import Login from "../Template/Login";
import Signup from "../Template/Signup";
import { IoIosSearch } from "react-icons/io";

function HeaderRight() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const showLogin = () => {
    setLoginOpen(true);
  };

  const closeLogin = () => {
    setCheckEmail(true);
    setEmailSubmit(false);
    setLoginOpen(false);
  };
  
  const [checkEmail, setCheckEmail] = useState(true);
  const [emailSubmit, setEmailSubmit] = useState(false);
  
  const onChange = (e) => {
    const emailCheck = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    
    if (emailCheck.test(e.target.value) === true) {
      setCheckEmail(true);
      setEmailSubmit(true);
    } else {
      setCheckEmail(false);
      setEmailSubmit(false);
    }
  };
  
  function showSignup() {
    setCheckEmail(true);
    setEmailSubmit(false);
    setLoginOpen(false);
    setSignupOpen(true);
  }

  return (
    <div className="header-right">
      <div className="header-right-search-login">
        <button>
          <IoIosSearch size={20} />
        </button>
        <button onClick={showLogin} className="menu">
          회원가입/로그인
        </button>
        {loginOpen && <Login closeLogin={closeLogin} onChange={onChange} checkEmail={checkEmail} emailSubmit={emailSubmit} showSignup={showSignup} />}
        {signupOpen && <Signup setSignupOpen={setSignupOpen} />}
      </div>
      <a href="#!" className="corp-service">
        기업 서비스
      </a>
    </div>
  );
}

export default HeaderRight;
