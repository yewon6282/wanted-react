import React, { useEffect, useState } from "react";
import "../../css/develop.css";
import { CiCircleChevDown } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { FaBookmark } from "react-icons/fa";
import HiringCompany from "../Molecule/HiringCompany";
import JobCard from "../Molecule/JobCard";

function Develop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrollPosition(window.scrollY);
      console.log(scrollPosition);

      if (scrollPosition > 210) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  });

  return (
    <main>
      <div className="section1">
        <div className="section1-grid">
          <button className="job-group">
            <p className="job-group-title">개발</p>
            <CiCircleChevDown size={26} />
          </button>
          <button className="job-category">
            <p className="job-group-title">개발 전체</p>
            <CiCircleChevDown size={26} />
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
            <div>
              <button>
                <span>연봉이 최고의 복지 💰</span>
              </button>
            </div>
            <div>
              <button>
                <span>재택근무 🏠</span>
              </button>
            </div>
            <div>
              <button>
                <span>퇴사율 10% 이하 📍</span>
              </button>
            </div>
          </div>
        </div>
      </div>

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
      <div className="section3">
        <ul className="job-card">
          <JobCard />
        </ul>
      </div>
    </main>
  );
}

export default Develop;
