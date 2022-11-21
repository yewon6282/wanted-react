import React from "react";
import { BsChevronRight } from "react-icons/bs";
import CareerEvent from "../Molecule/CareerEvent";

const MainSection05 = () => {
  return (
    <div className="section2">
      <h2>커리어 성장을 위한 맞춤 이벤트</h2>
      <a href="#!" className="example">
        <p>이벤트 전체보기</p>
        <BsChevronRight />
      </a>
      <ul className="career-card">
        <CareerEvent />
      </ul>
    </div>
  );
};

export default MainSection05;
