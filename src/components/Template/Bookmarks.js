import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import BookmarkedJobCard from "../Molecule/BookmarkedJobCard";

const Bookmarks = () => {
  const bookmarkList = useSelector((state) => state.bookmarking);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.logging);

  useEffect(() => {
    if (isLoggedIn.length === 0) {
      navigate("/");
    }
  }, [isLoggedIn.length, navigate]);

  return (
    <BookmarksMain>
      <div className="bookmark-header">
        <h1>북마크</h1>
      </div>
      <div className="bookmark-body">
        {bookmarkList.bookmarkId.length === 0 ? (
          <h1>아직 북마크한 포지션이 없습니다.</h1>
        ) : (
          <ul>
            <BookmarkedJobCard />
          </ul>
        )}
      </div>
    </BookmarksMain>
  );
};

const BookmarksMain = styled.main`
  width: 100vw;
  min-height: 100vh;
  background-color: #f8f8fa;

  .bookmark-header {
    margin: 0 auto;
    width: 66.25rem;
    text-align: left;

    & h1 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #333;
      padding: 3.125rem 0 1.25rem;
    }
  }

  .bookmark-body {
    margin: 0 auto;
    width: 66.25rem;

    & h1 {
      margin: 15rem 0;
      color: #d1d1d1;
      font-size: 1.5rem;
      font-weight: 400;
    }

    & ul {
      margin: 0 -0.625rem;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export default Bookmarks;
