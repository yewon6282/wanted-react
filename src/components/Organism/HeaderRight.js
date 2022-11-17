import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { cancelAllBookmark } from "../../modules/bookmarking";
import { doLogin, doLogout } from "../../modules/logging";
import { showSearch, showLogin, closeModal } from "../../modules/showModal";
import Login from "../Template/Login";
import Signup from "../Template/Signup";
import Search from "../Template/Search";
import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";
import LoginNext from "../Template/LoginNext";

function HeaderRight(props) {
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

  function onLogin(id, password) {
    dispatch(doLogin(id, password));
  }

  function onLogout() {
    dispatch(cancelAllBookmark());
    dispatch(doLogout());
  }

  return (
    <HeaderRightDiv>
      <div className="search-login-service">
        <div className="search-login">
          <button onClick={showSearchModal}>
            <IoIosSearch size={20} />
          </button>
          {showModalState === 1 && <Search closeEveryModal={closeEveryModal} />}
          {!isLoggedIn[0] ? (
            <button onClick={showLoginModal} className="login-modal">
              회원가입/로그인
            </button>
          ) : (
            <>
              <FiBell className="bell-icon" size={18} />
              <button className="user-icon-button" onClick={onLogout}>
                <div className="user-icon">
                  <img id="userImage" src="https://static.wanted.co.kr/oneid-user/profile_default.png" alt="user" />
                </div>
              </button>
            </>
          )}
          {showModalState === 2 && <Login closeEveryModal={closeEveryModal} setInputEmail={setInputEmail} />}
          {showModalState === 3 && <LoginNext closeEveryModal={closeEveryModal} onLogin={onLogin} inputEmail={inputEmail} />}
          {showModalState === 4 && <Signup closeEveryModal={closeEveryModal} onLogin={onLogin} inputEmail={inputEmail} />}
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

      .bell-icon {
        margin-top: -0.1rem;
        padding: 0 1.25rem;
      }

      .user-icon-button {
        margin-top: -0.2rem;
        width: 1.85rem;
        height: 1.85rem;

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
