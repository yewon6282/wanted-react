import React from "react";
import styled from "styled-components";

const ResumeTop = () => {
  return (
    <ResumeTopDiv>
      <aside className="resume-banner">
        <picture className="resume-banner-background">
          <source srcSet="https://static.wanted.co.kr/career_connect/banner-back-pc-common.webp" type="image/webp" />
          <img src="https://static.wanted.co.kr/career_connect/banner-back-pc-common.png" alt="career-connect-icon" />
        </picture>
        <button type="button">
          <div className="resume-banner-content">
            <p>이력서 작성이 쉬워진다! 1분 만에 채워지는 경력정보</p>
            <strong>내 경력 불러오기</strong>
            <picture>
              <source srcSet="https://static.wanted.co.kr/career_connect/trio.webp" type="image/webp" />
              <img src="https://static.wanted.co.kr/career_connect/trio.png" alt="career-connect-icon" />
            </picture>
          </div>
        </button>
      </aside>
    </ResumeTopDiv>
  );
};

const ResumeTopDiv = styled.div`
  width: inherit;
  margin: 1.875rem 0 1.25rem;

  .resume-banner {
    position: relative;
    width: 100%;
    height: 6.4375rem;
    border-radius: 0.625rem;
    background: #2b4bc8;
    overflow: hidden;
    cursor: pointer;

    .resume-banner-background {
      z-index: 0;
      position: absolute;
      right: 0;
      bottom: 0;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    button {
      position: relative;
      width: 100%;
      height: 100%;
      padding: 2rem 2.5rem;
      font-size: 1.375rem;
      font-weight: 700;
      line-height: 1.625rem;
      color: #fff;

      .resume-banner-content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        strong {
          z-index: 1;
          border-radius: 1.25rem;
          background-color: #fff;
          color: #2b4bc8;
          font-size: 0.9375rem;
          line-height: 1.125rem;
          font-weight: 600;
          padding: 0.6875rem 1.25rem;
        }

        picture {
          position: absolute;
          width: 20.8125rem;
          height: 5.625rem;
          bottom: 0;
          right: 12.5rem;

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
`;

export default ResumeTop;