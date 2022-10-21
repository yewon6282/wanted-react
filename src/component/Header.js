import React, { useState } from "react";
import "../css/whole.css";
import "../css/font.css";
import "../css/header.css";
import Logo from "../image/logo.png";
import Login from "./Login";
import Signup from "./Signup";

function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const showLogin = () => {
    setLoginOpen(true);
  };

  const showSignup = () => {
    setLoginOpen(false);
    setSignupOpen(true);
  };

  return (
    <div className="page">
      <header>
        <div className="header">
          <div className="header-left">
            <div className="dropdown">
              <img className="menu-icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" alt="hamburger-icon" />
              <div className="menu-dropdown">
                <a className="menu-list" id="list-all" href="#!">
                  직군 전체
                </a>
                <a className="menu-list" href="./develop.html">
                  개발
                </a>
                <a className="menu-list" href="#!">
                  경영·비즈니스
                </a>
                <a className="menu-list" href="#!">
                  마케팅·광고
                </a>
                <a className="menu-list" href="#!">
                  디자인
                </a>
                <a className="menu-list" href="#!">
                  영업
                </a>
                <a className="menu-list" href="#!">
                  고객서비스·리테일
                </a>
                <a className="menu-list" href="#!">
                  게임 제작
                </a>
                <a className="menu-list" href="#!">
                  HR
                </a>
                <a className="menu-list" href="#!">
                  미디어
                </a>
                <a className="menu-list" href="#!">
                  엔지니어링·설계
                </a>
                <a className="menu-list" href="#!">
                  금융
                </a>
                <a className="menu-list" href="#!">
                  제조·생산
                </a>
                <a className="menu-list" href="#!">
                  물류·무역
                </a>
                <a className="menu-list" href="#!">
                  의료·제약·바이오
                </a>
                <a className="menu-list" href="#!">
                  교육
                </a>
                <a className="menu-list" href="#!">
                  식·음료
                </a>
                <a className="menu-list" href="#!">
                  법률·법집행기관
                </a>
                <a className="menu-list" href="#!">
                  건설·시설
                </a>
                <a className="menu-list" href="#!">
                  공공·복지
                </a>
              </div>
            </div>
            <a href="./main.html">
              <img className="logo-icon" src={Logo} alt="wanted-logo" />
            </a>
          </div>
          <ul>
            <li className="menu">채용</li>
            <li className="menu">이벤트</li>
            <li className="menu">직군별 연봉</li>
            <li className="menu">이력서</li>
            <li className="menu">커뮤니티</li>
            <li className="menu">프리랜서</li>
            <li className="menu">AI 합격예측</li>
          </ul>
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
        </div>
      </header>
    </div>
  );
}

export default Header;
