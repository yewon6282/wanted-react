import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../image/logo.png";

const HeaderLeft = () => {
  return (
    <div className="header-left">
      <div className="dropdown">
        <img className="menu-icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" alt="hamburger-icon" />
        <div className="menu-dropdown">
          <a className="menu-list" id="listAll" href="#!">
            직군 전체
          </a>
          <Link to="/Develop" className="menu-list">
            개발
          </Link>
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
      <Link to="/">
        <img className="logo-icon" src={Logo} alt="wanted-logo" />
      </Link>
    </div>
  );
};

export default HeaderLeft;
