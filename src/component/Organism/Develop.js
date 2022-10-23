import React from "react";
import "../../css/develop.css";
import { CiCircleChevDown } from "react-icons/ci";
import { BsChevronRight } from "react-icons/bs";

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
          <div className="section-scroll-grid">
            <button className="filter-button">
              <span className="filter-title">지역</span>
              <span className="button-display">한국</span>
            </button>
            <button className="filter-button">
              <span className="filter-title">경력</span>
              <span className="button-display">전체</span>
              <i className="fa-solid fa-caret-down"></i>
            </button>
            <button className="filter-button">
              <span className="filter-title">기술스택</span>
              <i className="fa-solid fa-caret-down"></i>
            </button>
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

      <div className="section2">
        <div className="bookmark">
          <i className="fa-sharp fa-solid fa-bookmark"></i>
          <span>
            북마크 모아보기
            <BsChevronRight />
          </span>
        </div>
        <h2>적극 채용 중인 회사</h2>
        <ul className="slider-item">
          <li>
            <div className="slider-item-top">
              <img className="slider-item-image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F216%2Fpdgjch6eg5ajfdfm__400_400.jpg&w=400&q=75" alt="화해" />
            </div>
            <div className="slider-item-middle">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.799382a7.jpg&w=100&q=75" alt="화해" />
            </div>
            <div className="slider-item-bottom">
              <p className="slidder-company-title">인라이플</p>
              <p className="slidder-company-position">3개 포지션</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="section3">
        <ul className="job-card">
          <li>
            <a href="./developDetail.html">
              <div>
                <img className="job-card-image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F32138%2Fiuyt954kiyblqg49__1080_790.png&w=1000&q=75" alt="카카오픽코마" />
                <i className="fa fa-bookmark-o fa-lg job-card-bookmark" aria-hidden="true"></i>
              </div>
              <p className="job-card-category">프론트엔드 개발자</p>
              <p className="job-card-company-name">카카오픽코마</p>
              <div className="job-card-container-hover">
                <div className="job-card-container">응답률 매우 높음</div>
                <span className="job-card-container-massage">지원 후 응답받을 확률이 95% 이상입니다.</span>
              </div>
              <p className="job-card-location">서울 · 한국</p>
              <p className="job-card-reward">채용보상금 1,000,000원</p>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Develop;
