import React, { useState } from "react";
import styled from "styled-components";
import Login from "../Template/Login";
import Signup from "../Template/Signup";
import Search from "../Template/Search";
import { IoIosSearch } from "react-icons/io";

function HeaderRight(props) {
  const [showModal, setShowModal] = useState(0);
  const [inputEmail, setInputEmail] = useState("");

  const showSearch = () => {
    setShowModal(1);
  };

  const showLogin = () => {
    setShowModal(2);
  };

  const closeModal = () => {
    setShowModal(0);
  };

  return (
    <HeaderRightDiv>
      <div className="search-login-service">
        <div className="search-login">
          <button onClick={showSearch}>
            <IoIosSearch size={20} />
          </button>
          {showModal === 1 && <Search closeModal={closeModal} setShowModal={setShowModal} />}
          <button onClick={showLogin} className="login-modal">
            회원가입/로그인
          </button>
          {showModal === 2 && <Login closeModal={closeModal} setShowModal={setShowModal} setInputEmail={setInputEmail} />}
          {showModal === 3 && <Signup closeModal={closeModal} inputEmail={inputEmail} setShowModal={setShowModal} onLogin={props.onLogin} />}
        </div>
        <a href="#!" className="corp-service">
          기업 서비스
        </a>
      </div>
    </HeaderRightDiv>
  );
}

const HeaderRightDiv = styled.div`
  padding: 0 0.31rem;
  margin: auto 0;
  display: flex;
  flex-direction: row;
  
  .search-login-service {
    display: flex;
    flex-direction: row;
    align-items: center;
    
    .search-login {
      padding: 0.2rem 1.25rem 0 0;
      margin-right: 1.25rem;
      height: 1.18rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-right: 1px solid #e1e2e3;
      
      .login-modal {
        margin-left: 0.62rem;
        height: fit-content;
        font-size: 0.85rem;
        font-weight: 600;
        color: #333;
      }
    }
    .corp-service {
      padding: 0.5rem 0.6rem 0.4rem;
      font-size: 0.81rem;
      color: #666;
      border: 1px solid #e1e2e3;
      border-radius: 3.1rem;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 75rem) {
    .search-login {
      padding-right: 0.625rem;
      margin-right: 0.625rem;

      .login-modal {
        margin-left: 0.4rem;
      }
    }
  }

  @media screen and (max-width: 61.875rem) {
  }
`;

export default HeaderRight;
