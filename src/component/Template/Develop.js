import React from "react";
import "../../css/develop.css";
import { CiCircleChevDown } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import HiringCompany from "../Molecule/HiringCompany";
import JobCard from "../Molecule/JobCard";

function Develop() {
  const section = document.getElementsByClassName("section-scroll");

  window.addEventListener("scroll", function () {
    let topLength = document.documentElement.scrollTop;
    console.log(topLength);

    if (topLength >= 220) {
      section.style.position = "fixed";
      section.style.borderBottom = "1px solid blue";
      section.style.left = "50%";
      section.style.transform = "translateX(-50%)";
      section.style.width = "100%";
      section.style.zIndex = "5";
    } else {
      section.style.position = "unset";
      section.style.borderBottom = "1px solid #ececec";
      section.style.left = "none";
      section.style.transform = "none";
      section.style.width = "none";
      section.style.zIndex = "none";
    }
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
      <div className="section-scroll">
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
