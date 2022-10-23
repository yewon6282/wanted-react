import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function MainSection01() {
  return (
    <div id="mainSection1">
        <ul className="slides">
          <li>
            <img className="slide-image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1862%2F4d8d83ed.jpg&amp;w=1060&amp;q=100" alt="이력서, 포트폴리오, 면접을 부탁해" />
          </li>
          <li>
            <img className="slide-image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1835%2F487d8bb0.jpg&amp;w=1060&amp;q=100" alt="Startup Lead Group Coaching" />
          </li>
          <li>
            <img className="slide-image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1861%2F357df4e6.jpg&amp;w=1060&amp;q=100" alt="어디서도 듣지 못한 피스 브랜드 이야기" />
          </li>
          <li>
            <img className="slide-image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1863%2Fe8f9a9d3.jpg&amp;w=1060&amp;q=100" alt="Startup Recruiting Bootcamp 2기" />
          </li>
        </ul>
        <p className="controller">
          <span className="slide-prev"><BsChevronLeft /></span>
          <span className="slide-next"><BsChevronRight /></span>
        </p>
      </div>
  )
}

export default MainSection01;