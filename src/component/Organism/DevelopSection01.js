import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import TagData from "../../json/FilterTag.json";

function DevelopSection01({ scrollTop }) {
return (
    <>
      <div className="section1">
        <div className="section1-grid">
          <button className="job-group">
            <p className="job-group-title">개발</p>
            <div>
              <FiChevronDown className="down-icon" size={18} />
            </div>
          </button>
          <button className="job-category">
            <p className="job-group-title">개발 전체</p>
            <div>
              <FiChevronDown className="down-icon" size={18} />
            </div>
          </button>
        </div>
      </div>
      <div className={scrollTop ? "section-scroll-fixed" : "section-scroll"}>
        <div className="section-scroll-content">
          <div className="section-filter">
            <div>
              <button className="filter-button">
                <span className="filter-title">지역</span>
                <span className="button-display">한국</span>
              </button>
              <button className="filter-button">
                <span className="filter-title">경력</span>
                <span className="button-display">전체</span>
                <AiFillCaretDown />
              </button>
              <button className="filter-button">
                <span className="filter-title">기술스택</span>
                <AiFillCaretDown />
              </button>
            </div>
            <div>
              <button className="filter-button">
                <span className="filter-title">응답률순</span>
                <AiFillCaretDown />
              </button>
            </div>
          </div>
          <div className="slick-list">
            {TagData.Tags.map((tag) => (
              <div key={tag.id} style={{backgroundColor: `${tag.color}`}}>
                <button>{tag.tag}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DevelopSection01;
