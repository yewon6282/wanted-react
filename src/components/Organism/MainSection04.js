import React from "react";
import { BsChevronRight } from "react-icons/bs";
import VODForWorker from "../Molecule/VODForWorker";

function MainSection04() {
  return (
    <>
      <div className="section2" id="VOD">
        <h2>직장인을 위한 Wanted+ VOD</h2>
        <a href="#!" className="example">
          <p>VOD 전체보기</p>
          <BsChevronRight />
        </a>
        <ul className="career-card">
          <VODForWorker />
        </ul>
      </div>
      <div id="lineBanner">
        <p>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. 👀</p>
        <BsChevronRight />
      </div>
    </>
  );
}

export default MainSection04;