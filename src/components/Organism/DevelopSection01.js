import React from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import TagData from "../../json/FilterTag.json";

function DevelopSection01({ scrollTop }) {
  return (
    <DevelopSection01Div>
      <div className="section1">
        <div className="develop-category">
          <div className="develop-category-grid">
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
  width: inherit;
  margin: 0 auto;

  .section1 {
    width: 100%;
    border-bottom: 1px solid #ececec;

    .develop-category {
      padding-top: 1.8rem;
      width: 66.25rem;
      margin: 0 auto;

      .develop-category-grid {
        display: flex;
        flex-direction: row;
        
        
        .job-group {
          padding-right: 1.5rem;
          border-right: 1px solid #e1e2e3;
        }
        
        .job-category {
          padding-left: 1.5rem;
        }
        
        .job-group,
        .job-category {
          display: flex;
          flex-direction: row;
          align-items: center;

          .job-group-title {
            margin: 0.2rem 0.9rem 0 0;
            font-size: 1.5rem;
            color: #333;
          }

          & div {
            width: 1.6rem;
            height: 1.6rem;
            border: 1px solid #e1e2e3;
            border-radius: 50%;
            justify-content: center;
            align-items: center;

            .down-icon {
              margin-top: 0.3rem;
              color: rgb(118, 118, 118);
            }
          }
        }
      }
    }

    .section-scroll {
      padding-top: 1rem;
      padding-bottom: 1.5rem;
      background-color: #fff;
    }

    .section-scroll-fixed {
      z-index: 5;
      position: fixed;
      top: 3.0994rem;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      padding-top: 1rem;
      padding-bottom: 1.5rem;
      background-color: #fff;
      border-bottom: 1px solid blue;
    }

    .section-scroll,
    .section-scroll-fixed {
      .section-scroll-content {
        width: 66.25rem;
        margin: 0 auto;
        text-align: left;

        .section-filter {
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #ececec;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .filter-button {
            background-color: inherit;
            padding: 0.62rem 0.9rem;
            margin-right: 0.62rem;
            height: 2.5rem;
            border: 1px solid #ececec;
            border-radius: 0.31rem;
            align-items: center;
            font-size: 0.85rem;
          }

          .filter-title {
            margin-right: 0.9rem;
          }

          .button-display {
            color: #3366ff;
            font-weight: 600;
            margin-right: 0.3rem;
          }
        }

        .slick-list {
          width: inherit;
          display: flex;
          flex-direction: row;
          overflow: scroll;

          & div {
            padding: 0.5rem 0.8rem;
            margin-right: 0.5rem;
            border: none;
            border-radius: 1.25rem;
            font-size: 0.81rem;
            line-height: 1rem;
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
