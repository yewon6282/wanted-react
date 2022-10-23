import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsChevronDown, BsQuestionCircle } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { AiOutlineEllipsis } from "react-icons/ai";

function MainSection02() {
  const [popupOpen, setPopupOpen] = useState(false);

  const onDisplay = () => {
    setPopupOpen(true);
  };

  const offDisplay = () => {
    setPopupOpen(false);
  };

  return (
    <>
      <div className="section2">
        <div className="main-section2-title">
          <h2>나에게 필요한 커리어 인사이트</h2>
          <BsQuestionCircle onClick={onDisplay} id="questionButton" size={20} color="#999" />
          {popupOpen && (
            <div id="miniPopup">
              <div id="miniPopupTop">
                <span id="miniPopupTitle">취직/이직 준비하시기도 바쁘시죠? 😎</span>
                <GrClose onClick={offDisplay} id="closeIcon" />
              </div>
              <div id="miniPopupComment">커리어 인사이트, 이제 따로 찾지 말고 원티드에서 만나보세요! 검증된 IT업계 전문가들이 다양한 채널에서 생산하는 커리어 콘텐츠를 선별해서 관심 태그 기반으로 제공해 드립니다.</div>
            </div>
          )}
        </div>
        <div className="main-section2-scroll">
          <div className="scroll-bar">
            <div className="scroll">
              <button>IT/기술</button>
              <button>취업/이직</button>
              <button>회사생활</button>
              <button>리더십</button>
              <button>커리어고민</button>
              <button>인간관계</button>
              <button>라이프스타일</button>
              <button>조직문화</button>
              <button>브랜딩</button>
              <button>데이터</button>
              <button>서비스기획</button>
              <button>개발</button>
              <button>디자인</button>
            </div>
            <p className="scroll-button-left">
              <button className="scroll-prev">
                <BsChevronLeft className="prev-button-icon" />
              </button>
            </p>
            <p className="scroll-button-right">
              <button className="scroll-next">
                <BsChevronRight className="next-button-icon" />
              </button>
            </p>
          </div>
          <button className="ellipsis">
            <AiOutlineEllipsis size={20} />
          </button>
        </div>
        <ul className="career-card">
          <li>
            <a href="#!">
              <img className="card-image" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210208%2F4%2F11031552.jpg&amp;w=500&amp;q=75" alt="우리회사 제품 라이브커머스로 팔기" />
              <p className="card-title">우리회사 제품 라이브커머스로 팔기</p>
              <p className="card-comment">라이브커머스를 더 잘하는 법이 궁금하다면, 지금 시청해 보세요!</p>
              <div className="profile-information">
                <img className="profile-photo" src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&amp;w=60&amp;q=90" alt="wanted" />
                <span className="writer">강남언니 김윤혁</span>
              </div>
            </a>
          </li>
        </ul>
        <button id="otherContent">
          더 많은 콘텐츠 보기
          <BsChevronDown className="down-button-icon"/>
        </button>
      </div>
      <hr />
    </>
  );
}

export default MainSection02;
