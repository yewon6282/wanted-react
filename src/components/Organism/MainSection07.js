import React from "react";
import { IoIosSearch } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { BiBuildings, BiSliderAlt } from "react-icons/bi";
import { BsChevronRight } from "react-icons/bs";

const MainSection07 = () => {
  return (
    <div className="section2">
      <h2>채용 정보를 찾고 계셨나요?</h2>
      <div className="jobs">
        <div className="jobs-menu">
          <IoIosSearch size={28} />
          <div className="jobs-expl">
            <p>채용공고</p>
            <BsChevronRight />
          </div>
        </div>
        <div className="jobs-menu">
          <BsPerson size={28} />
          <div className="jobs-expl">
            <p>내 프로필</p>
            <BsChevronRight />
          </div>
        </div>
        <div className="jobs-menu">
          <BiBuildings size={28} />
          <div className="jobs-expl">
            <p>매치업</p>
            <BsChevronRight />
          </div>
        </div>
        <div className="jobs-menu">
          <BiSliderAlt size={28} />
          <div className="jobs-expl">
            <p>직군별 연봉</p> <BsChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection07;
