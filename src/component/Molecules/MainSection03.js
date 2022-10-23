import React from "react";
import { BsChevronRight } from "react-icons/bs";

function MainSection03() {
  return (
    <>
      <div className="section2">
        <h2>3분만에 읽는 Wanted+ 아티클</h2>
        <a href="#!" className="example">
          <p>아티클 전체보기</p> 
          <BsChevronRight />
        </a>
        <ul className="career-card">
          <li>
            <a href="#!">
              <div>
                <img className="card-image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2440%2F22cd7b04.jpg&amp;w=800&amp;q=75" alt="냉정하지만, 프리랜서는 종이로 평가할 수밖에 없어요" />
              </div>
              <p className="card-title">이력서 제출 전에 반드시 확인해 보세요!</p>
              <p className="card-comment2">#개발 #취업/이직 #커리어고민</p>
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </>
  );
}

export default MainSection03;
