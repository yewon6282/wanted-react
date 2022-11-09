import React from "react";
import { useSelector } from 'react-redux';
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

function Bookmark() {
  return (
    <>
      {true ? (
        <FaBookmark
          className="job-card-bookmark"
        />
      ) : (
        <FaRegBookmark
          className="job-card-bookmark"
        />
      )}
    </>
  );
}

export default Bookmark;
