import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { closeModal, showLogin, showSearch } from "../../modules/showModal";
import HeaderCenter from "../Organism/HeaderCenter";
import HeaderLeft from "../Organism/HeaderLeft";
import HeaderRight from "../Organism/HeaderRight";
import Search from "./Search";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.logging);
  const showModalState = useSelector((state) => state.showModal);
  const dispatch = useDispatch();

  const showLoginModal = () => {
    dispatch(showLogin());
  };

  const showSearchModal = () => {
    dispatch(showSearch());
  };

  const closeEveryModal = () => {
    dispatch(closeModal());
  };

  return (
    <HeaderHeader>
      <div className="header">
        <div className="middle-size-header-top">
          <HeaderLeft />
          {!isLoggedIn[0] && (
            <button onClick={showLoginModal} className="middle-size-header-signup-button">
              회원가입하기
            </button>
          )}
        </div>
        <div className="middle-size-header-bottom">
          <HeaderCenter />
          <div className="middle-size-header-search">
            <button className="show-modal-button" onClick={showSearchModal}>
              <IoIosSearch size={20} />
            </button>
            {showModalState === 1 && <Search closeEveryModal={closeEveryModal} />}
            {isLoggedIn[0] && <FiBell className="bell-icon" size={18} />}
            <BiDotsHorizontalRounded size={20} className="more-button" />
          </div>
        </div>
        <HeaderRight />
      </div>
    </HeaderHeader>
  );
};

export const HeaderHeader = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: 3.1rem;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
  background-color: #fff;

  .header {
    margin: 0 auto;
    width: 66.25rem;
    height: inherit;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .middle-size-header-top {
      margin: auto 0;
      .middle-size-header-signup-button {
        display: none;
        position: absolute;
      }
    }

    .middle-size-header-bottom {
      .middle-size-header-search {
        .show-modal-button {
          display: none;
        }

        .bell-icon {
          display: none;
        }

        .more-button {
          display: none;
        }
      }
    }
  }

  @media (min-width: 48rem) and (max-width: 61.9375rem) {
    height: 6.875rem;

    .header {
      width: 90%;
      display: unset;

      .middle-size-header-top {
        margin: 0 auto;
        width: inherit;
        height: 3.75rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .middle-size-header-signup-button {
          display: block;
          position: inherit;
          color: #36f;
          font-size: 0.85rem;
          line-height: 2rem;
          height: 2.125rem;
          border: 0.0625rem solid #36f;
          border-radius: 1.0625rem;
          padding: 0 0.875rem;
        }
      }

      .middle-size-header-bottom {
        margin: 0 auto;
        width: inherit;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .middle-size-header-search {
          display: flex;
          flex-direction: row;

          .show-modal-button {
            display: block;
            margin-right: 0.8rem;
          }

          .bell-icon {
            display: block;
            margin: auto 0;
            margin-right: 0.8rem;
          }

          .more-button {
            display: block;
            margin: auto 0;
          }
        }
      }
    }
  }
`;

export default Header;
