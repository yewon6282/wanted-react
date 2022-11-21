import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { cancelAllBookmark } from "../../modules/bookmarking";
import { doLogin, doLogout } from "../../modules/logging";
import { showSearch, showLogin, closeModal } from "../../modules/showModal";
import Login from "../Template/Login";
import Signup from "../Template/Signup";
import Search from "../Template/Search";
import LoginNext from "../Template/LoginNext";
import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const HeaderRight = () => {
  const showModalState = useSelector((state) => state.showModal);
  const dispatch = useDispatch();
  const [inputEmail, setInputEmail] = useState();

  const showSearchModal = () => {
    dispatch(showSearch());
  };

  const showLoginModal = () => {
    dispatch(showLogin());
  };

  const closeEveryModal = () => {
    dispatch(closeModal());
  };

  const isLoggedIn = useSelector((state) => state.logging);

  const onLogin = (id, password) => {
    dispatch(doLogin(id, password));
  };

  const onLogout = () => {
    dispatch(cancelAllBookmark());
    dispatch(doLogout());
  };

  return (
    <HeaderRightDiv>
      <div className="search-login-service">
        <button className="show-modal-button" onClick={showSearchModal}>
          <IoIosSearch size={20} />
        </button>
        {showModalState === 1 && <Search closeEveryModal={closeEveryModal} />}
        {!isLoggedIn[0] ? (
          <button onClick={showLoginModal} size={14} className="login-modal">
            회원가입/로그인
          </button>
        ) : (
          <>
            <FiBell className="bell-icon" size={18} />
            <div className="user-icon-button" onClick={onLogout}>
              <button className="user-icon">
                <img id="userImage" src="https://static.wanted.co.kr/oneid-user/profile_default.png" alt="user" />
              </button>
            </div>
          </>
        )}
        {showModalState === 2 && <Login closeEveryModal={closeEveryModal} setInputEmail={setInputEmail} />}
        {showModalState === 3 && <LoginNext closeEveryModal={closeEveryModal} onLogin={onLogin} inputEmail={inputEmail} />}
        {showModalState === 4 && <Signup closeEveryModal={closeEveryModal} onLogin={onLogin} inputEmail={inputEmail} />}

        <a href="#!" className="corp-service">
          기업 서비스
        </a>
      </div>
    </HeaderRightDiv>
  );
};

const HeaderRightDiv = styled.div`
  padding: 0 0.31rem;
  margin: auto 0;
  display: flex;
  flex-direction: row;

  .search-login-service {
    display: flex;
    flex-direction: row;
    align-items: center;

    .show-modal-button {
      margin-top: 0.19rem;
    }

    .more-button {
      display: none;
    }

    .login-modal {
      padding-right: 1.3rem;
      margin: 0.2rem 1.3rem 0 1rem;
      height: 1.18rem;
      font-size: 0.85rem;
      font-weight: 600;
      color: #333;
      border-right: 1px solid #e1e2e3;
    }

    .bell-icon {
      padding: 0 1.25rem;
    }

    .user-icon-button {
      padding-right: 1.5rem;
      margin-right: 1.5rem;
      width: 2rem;
      height: 2rem;
      border-right: 1px solid #e1e2e3;

      .user-icon {
        width: inherit;
        height: inherit;
        border: 1px solid #e1e2e3;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        #userImage {
          width: 1.75rem;
          height: 1.75rem;
          border-radius: 50%;
        }
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

  @media (min-width: 48rem) and (max-width: 61.9375rem) {
    display: none;
  }
`;

export default HeaderRight;
