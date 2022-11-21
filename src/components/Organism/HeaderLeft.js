import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../image/logo.png";
import HeaderMenuList from "../Atom/HeaderMenuList";

const HeaderLeft = () => {
  return (
    <HeaderLeftDiv>
      <div className="dropdown">
        <img className="menu-icon" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75" alt="hamburger-icon" />
        <div className="menu-dropdown">
          <HeaderMenuList link={"/"} className={"menu-list"} id={"listAll"} menuName={"직군 전체"} />
          <HeaderMenuList link={"/Develop"} className={"menu-list"} menuName={"개발"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"경영·비즈니스"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"마케팅·광고"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"디자인"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"영업"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"고객서비스·리테일"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"게임 제작"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"HR"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"미디어"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"엔지니어링·설계"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"금융"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"제조·생산"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"물류·무역"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"의료·제약·바이오"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"교육"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"식·음료"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"법률·법집행기관"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"건설·시설"} />
          <HeaderMenuList link={"/"} className={"menu-list"} menuName={"공공·복지"} />
        </div>
      </div>
      <Link to="/">
        <img className="header-logo-icon" src={Logo} alt="wanted-logo" />
      </Link>
    </HeaderLeftDiv>
  );
};

const HeaderLeftDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  .dropdown:hover .menu-dropdown {
    display: block;
  }

  .menu-icon {
    margin: 0.2rem 0.65rem 0 0;
    width: 1rem;
  }

  .menu-dropdown {
    display: none;
    z-index: 10;
    position: absolute;
    background-color: #fff;

    .menu-list {
      border-left: 1px solid #f0f1f2;
      border-right: 1px solid #f0f1f2;
      display: block;
      padding: 0 6.25rem 0 0.62rem;
      font-size: 0.81rem;
      font-weight: 600;
      color: #333;
      line-height: 2.9;

      &:hover {
        color: #3366ff;
        background-color: rgb(247, 249, 250);
      }
    }

    #listAll {
      margin-top: 1rem;
      font-size: 0.85rem;
    }
  }

  .header-logo-icon {
    margin: auto 0;
    height: 1.1rem;
  }
`;

export default HeaderLeft;
