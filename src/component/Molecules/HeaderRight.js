import React, { useState } from "react";
// import "../../css/header.css";
import Login from "../Organism/Login";
import Signup from "../Organism/Signup";

function HeaderRight() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const showLogin = () => {
    setLoginOpen(true);
  };

  function showSignup() {
    var emailValue = document.getElementById("email");
    var emailCheck = document.getElementById("emailCheck");
    var email = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (emailValue.value === "" || !email.test(emailValue.value)) {
      emailValue.style.border = "1px solid #fe415c";
      emailCheck.innerHTML = "올바른 이메일 형식을 입력해주세요.";
      emailCheck.style.color = "#fe415c";
      return false;
    } else {
      emailValue.value = " ";
      emailValue.style.border = "1px solid #e1e2e3";
      emailCheck.innerHTML = "";
      setLoginOpen(false);
      setSignupOpen(true);
    }
  }

  return (
    <div className="header-right">
      <div className="header-right-search-login">
        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
        <div>
          <button onClick={showLogin} className="menu">
            회원가입/로그인
          </button>
          {loginOpen && <Login setLoginOpen={setLoginOpen} showSignup={showSignup} />}
          {signupOpen && <Signup setSignupOpen={setSignupOpen} />}
        </div>
      </div>
      <a href="#!" className="corp-service">
        기업 서비스
      </a>
    </div>
  );
}

export default HeaderRight;