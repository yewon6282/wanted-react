import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { BsChevronRight } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import HiringCompany from "../Molecule/HiringCompany";
import { Link } from "react-router-dom";
import { showLogin } from "../../modules/showModal";

function DevelopSection02() {
  const isLoggedIn = useSelector((state) => state.logging);
  const dispatch = useDispatch();

  const showLoginModal = () => {
    dispatch(showLogin());
  };

  return (
    <DevelopSection02Div>
      <div className="bookmark">
        <FaBookmark />
        <Link to={isLoggedIn[0] && "/Bookmarks"} onClick={!isLoggedIn[0] && showLoginModal}>
          <span>북마크 모아보기</span>
          <BsChevronRight className="right-icon" size={10}/>
        </Link>
      </div>
      <h2>적극 채용 중인 회사</h2>
      <ul className="slider-item">
        <HiringCompany />
      </ul>
    </DevelopSection02Div>
  );
}

const DevelopSection02Div = styled.div`
  width: 66.25rem;
  padding-top: 2.5rem;
  margin: 0 auto;
  text-align: left;
  
  .bookmark {
    margin-bottom: 1.25rem;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: #36f;
    
    & span {
      text-decoration: none;
      margin-left: 0.4rem;
      color: #36f;
    }
    
    & .right-icon {
      color: #36f;
    }
  }

  .slider-item {
    display: flex;
    width: inherit;
    margin-top: 0.87rem;
    justify-content: space-between;
    
    & li {
      width: 12.31rem;
      height: 16.93rem;
      border: 1px solid #ececec;
      border-radius: 0.2rem;
      float: left;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export default DevelopSection02;
