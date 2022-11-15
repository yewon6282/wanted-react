import React, { useState } from "react";
import styled from "styled-components";
import Search from "../Template/Search";
import { IoIosSearch } from "react-icons/io";
import { FiBell } from "react-icons/fi";

function LogoutedHeaderRight(props) {
  const [showModal, setShowModal] = useState(0);

  const showSearch = () => {
    setShowModal(1);
  };

  const closeModal = () => {
    setShowModal(0);
  };

  const userLogout = (event) => {
    event.preventDefault();

    props.onLogout();
  };

  return (
    <LogoutedHeaderRightDiv>
      <div className="search-logout-service">
        <div className="search-logout">
          <button className="search-button" onClick={showSearch}>
            <IoIosSearch size={20} />
          </button>
          {showModal === 1 && <Search closeModal={closeModal} />}
          <FiBell className="bell-icon" size={18} />
          <button className="user-icon-button" onClick={userLogout}>
            <div className="user-icon">
              <img id="userImage" src="https://static.wanted.co.kr/oneid-user/profile_default.png" alt="user" />
            </div>
          </button>
        </div>
        <a href="#!" className="corp-service">
          기업 서비스
        </a>
      </div>
    </LogoutedHeaderRightDiv>
  );
}

const LogoutedHeaderRightDiv = styled.div`
  padding: 0 0.31rem;
  margin: auto 0;
  display: flex;
  flex-direction: row;

  .search-logout-service {
    display: flex;
    flex-direction: row;
    align-items: center;

    .search-logout {
      padding-right: 1.25rem;
      margin: auto 1.25rem auto 0;
      height: 1.18rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-right: 1px solid #e1e2e3;

      .search-button {
        margin-top: 0.2rem;
      }

      .bell-icon {
        padding: 0 1.25rem;
      }

      .user-icon-button {
        width: 1.85rem;
        height: 1.85rem;
      }

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

  @media screen and (max-width: 75rem) {
    .search-logout {
      padding-right: 0.625rem;
      margin-right: 0.625rem;
    }
  }

  @media screen and (max-width: 61.875rem) {
  }
`;

export default LogoutedHeaderRight;
