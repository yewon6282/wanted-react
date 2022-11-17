import React from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import TagData from "../../json/FilterTag.json";

function DevelopSection01({ scrollTop }) {
  return (
    <DevelopSection01Div>
      <div>
        <div className="section1">
          <div className="section1-grid">
            <button className="job-group">
              <p className="job-group-title">개발</p>
              <div>
                <FiChevronDown className="down-icon" size={18} />
              </div>
            </button>
            <button className="job-category">
              <p className="job-group-title">개발 전체</p>
              <div>
                <FiChevronDown className="down-icon" size={18} />
              </div>
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
              {TagData.Tags.map((tag) => (
                <div key={tag.id} style={{ backgroundColor: `${tag.color}` }}>
                  <button>{tag.tag}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DevelopSection01Div>
  );
}

const DevelopSection01Div = styled.div`
  /* width: 66.25rem; */
  margin: 0 auto;

  .section1 {
    padding-top: 28.8px;
    width: 66.25rem;

    .section1-grid {
      display: flex;
      flex-direction: row;

      .job-group {
        padding-right: 24px;
        border-right: .0625rem solid #e1e2e3;
      }

      .job-category {
        padding-left: 24px;
      }

      .job-group,
      .job-category {
        display: flex;
        flex-direction: row;

        .job-group-title {
          margin-right: 14.4px;
          font-size: 24px;
          color: #333;
          line-height: 28.8px;
        }

        & div {
          width: 26px;
          height: 26px;
          border: .0625rem solid #e1e2e3;
          border-radius: 50%;
          justify-content: center;
          align-items: center;

          .down-icon {
            margin-top: 4.8px;
          }
        }
      }
    }
  }

  .section-scroll {
    padding-top: 16px;
    padding-bottom: 24px;
    background-color: #fff;
    border-bottom: .0625rem solid #ececec;
  }

  .section-scroll-fixed {
    z-index: 5;
    position: fixed;
    top: 49.5904px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding-top: 16px;
    padding-bottom: 24px;
    background-color: #fff;
    border-bottom: .0625rem solid blue;
  }

  .section-scroll,
  .section-scroll-fixed {
    .section-scroll-content {
      width: 1060px;
      margin: 0 auto;
      text-align: left;

      .section-filter {
        margin-bottom: 24px;
        padding-bottom: 24px;
        border-bottom: .0625rem solid #ececec;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .filter-button {
          background-color: inherit;
          padding: 9.92px 14.4px;
          margin-right: 9.92px;
          height: 40px;
          border: .0625rem solid #ececec;
          border-radius: 4.96px;
          align-items: center;
          font-size: 13.6px;
        }

        .filter-title {
          margin-right: 14.4px;
        }

        .button-display {
          color: #3366ff;
          font-weight: 600;
          margin-right: 4.8px;
        }
      }

      .slick-list {
        width: inherit;
        display: flex;
        flex-direction: row;
        overflow: scroll;

        & div {
          padding: 8px 12.8px;
          margin-right: 8px;
          border: none;
          border-radius: 20px;
          font-size: 12.96px;
          line-height: 16px;
          font-weight: 300;
          color: #333;
          cursor: pointer;
        }

        & div button {
          white-space: nowrap;
        }
      }
    }
  }

  @media (min-width: 48rem) and (max-width: 61.9375rem) {
    width: 90%;
    margin: 0 auto;

    .section-scroll-fixed {
      width: 100%;

      .section-scroll-content {
        width: 90%;

        .slick-list {
          width: 100%;
        }
      }
    }
  }
`;

export default DevelopSection01;
