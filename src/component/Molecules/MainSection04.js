import React from "react";
import { BsChevronRight } from "react-icons/bs";

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
          <li>
            <a href="#!">
              <div>
                <img className="card-image" src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210413%2F2%2F39565343.jpg&amp;w=800&amp;q=75" alt="포트폴리오를 부탁해" />
              </div>
              <p className="card-comment3">애프터모멘트 박창선</p>
              <p className="card-title">터지는 콘텐츠는 이렇게 만듭니다 Part 2: 독자의 마음 - 박창선</p>
              <p className="card-comment">터지는 콘텐츠는 이렇게 만듭니다 : Wanted How To</p>
            </a>
          </li>
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