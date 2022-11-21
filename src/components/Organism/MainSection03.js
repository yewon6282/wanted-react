import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Article from "../Molecule/Article";

const MainSection03 = () => {
  return (
    <>
      <div className="section2">
        <h2>3분만에 읽는 Wanted+ 아티클</h2>
        <a href="#!" className="example">
          <p>아티클 전체보기</p>
          <BsChevronRight />
        </a>
        <ul className="career-card">
          <Article />
        </ul>
      </div>
      <hr />
    </>
  );
};

export default MainSection03;
