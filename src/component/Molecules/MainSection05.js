import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { HiStatusOnline } from "react-icons/hi"

function MainSection05() {
  return (
    <div className="section2">
      <h2>커리어 성장을 위한 맞춤 이벤트</h2>
      <a href="#!" className="example">
        <p>이벤트 전체보기</p>
        <BsChevronRight />
      </a>
      <ul className="career-card">
        <li className="event-card">
          <a href="#!">
            <div>
              <img className="event-card-image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2406%2F6aae1a5c.jpg&amp;w=1200&amp;q=100" alt="[무료] 인간관계, 회사생활, 커리어고민 1분만에 해결하기" />
            </div>
            <div id="online-icon">
              <HiStatusOnline size={12}/>
              <span id="online">온라인</span>
            </div>
            <p className="card-title">우리회사 제품 라이브커머스로 팔기</p>
            <p className="card-comment">라이브커머스를 더 잘하는 법이 궁금하다면, 지금 시청해 보세요!</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MainSection05;
