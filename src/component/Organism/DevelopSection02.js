import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import HiringCompany from "../Molecule/HiringCompany";

function DevelopSection02() {
  return (
    <div className="section-bookmark">
      <div className="bookmark">
        <FaBookmark />
        <span>
          북마크 모아보기
          <BsChevronRight />
        </span>
      </div>
      <h2>적극 채용 중인 회사</h2>
      <ul className="slider-item">
        <HiringCompany />
      </ul>
    </div>
  );
}

export default DevelopSection02;
