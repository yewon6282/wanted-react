import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { showLogin } from "../../modules/showModal";

const HeaderCenter = () => {
  const isLoggedIn = useSelector((state) => state.logging);
  const dispatch = useDispatch();

  const showLoginModal = () => {
    dispatch(showLogin());
  };

  return (
    <HeaderCenterUl>
      <li className="menu">
        <a href="#!" className="menu-link">
          채용
        </a>
      </li>
      <li className="menu">
        <a href="#!" className="menu-link">
          이벤트
        </a>
      </li>
      <li className="menu">
        <a href="#!" className="menu-link">
          직군별 연봉
        </a>
      </li>
      <li className="menu">
        <Link to={isLoggedIn[0] && "/Resume"} onClick={!isLoggedIn[0] && showLoginModal} className="menu-link">
          이력서
        </Link>
      </li>
      <li className="menu">
        <a href="#!" className="menu-link">
          커뮤니티
        </a>
      </li>
      <li className="menu">
        <a href="#!" className="menu-link">
          프리랜서
        </a>
      </li>
      <li className="menu">
        <a href="#!" className="menu-link">
          AI 합격예측
        </a>
      </li>
    </HeaderCenterUl>
  );
};

const HeaderCenterUl = styled.ul`
  .menu {
    height: 3.05rem;
    float: left;

    &:hover {
      border-bottom: 1px solid rgb(103, 103, 103);
    }

    .menu-link {
      display: inline-block;
      padding: 1.25rem 1.1rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: #333;
      cursor: pointer;
    }
  }

  @media (min-width: 48rem) and (max-width: 61.9375rem) {
    width: 90%;
    height: 3.125rem;

    .menu {
      .menu-link {
        font-size: 0.8125rem;
      }
    }
  }
`;

export default HeaderCenter;
