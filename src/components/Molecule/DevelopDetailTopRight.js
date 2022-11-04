import React from "react";

function DevelopDetailTopRight() {
  return (
    <div className="job-process-container">
      <div className="job-process-container-top">
        <span>채용보상금</span>
        <div className="share-button">
          <i className="fa fa-share-alt fa-lg" aria-hidden="true"></i>
        </div>
        <div className="person-price">
          <div>
            <div className="person">추천인</div>
            <div className="price">500,000원</div>
          </div>
          <div>
            <div className="person">지원자</div>
            <div className="price">500,000원</div>
          </div>
        </div>
      </div>
      <div className="job-process-container-bottom">
        <button className="bookmark-button">
          <i className="fa fa-bookmark-o job-card-bookmark" aria-hidden="true"></i> 북마크하기
        </button>
        <button className="apply-button">지원하기</button>
      </div>
      <button className="likes">
        <i className="fas fa-heart"></i> 68
      </button>
    </div>
  );
}

export default DevelopDetailTopRight;
