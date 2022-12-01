import React from "react";
import styled from "styled-components";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { RiFileCopyLine, RiUpload2Fill } from "react-icons/ri";

const ResumeBottom = () => {
  return (
    <ResumeBottomDiv>
      <div className="resume-list-header">
        <h4>최근 문서</h4>
        <a href="#!">
          <span>원티드 이력서 소개</span>
          <HiOutlineExclamationCircle className="exclimation-icon" />
        </a>
      </div>
      <div className="resume-list-body">
        <div className="resume-item">
          <div className="resume-add-item">
            <div className="add-file-icon">
              <RiFileCopyLine />
            </div>
            <p>새 이력서 작성</p>
          </div>
        </div>
        <div className="resume-item">
          <div className="resume-upload-item">
            <div className="upload-file-icon">
              <RiUpload2Fill />
            </div>
            <p>파일 업로드</p>
          </div>
        </div>
      </div>
    </ResumeBottomDiv>
  );
};

const ResumeBottomDiv = styled.div`
  width: inherit;
  margin: 25px 0 5px;

  .resume-list-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h4 {
      font-size: 16px;
      font-weight: 600;
      line-height: 1.4;
      margin: 0;
      padding: 15px 0;
      color: #333;
    }

    a {
      font-size: 16px;
      font-weight: 600;
      margin: 0;
      padding: 15px 0;
      color: #36f;
      display: flex;
      align-items: center;

      .exclimation-icon {
        margin-left: 8px;
        position: relative;
        bottom: 1px;
      }
    }
  }

  .resume-list-body {
    width: calc(100% + 20px);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;

    .resume-item {
      width: calc(25% - 20px);
      height: 190px;
      margin: 0 20px 20px 0;
      position: relative;
      border: 0.0625rem solid #dbdbdb;
      background-color: #fff;

      .resume-add-item, .resume-upload-item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .add-file-icon, .upload-file-icon {
          margin: 0 auto;
          width: 74px;
          height: 74px;
          font-size: 26px;
          color: #fff;
          background-color: #36f;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .upload-file-icon{
          color: #666;
          background-color: #e1e2e3;
        }

        p {
          margin: 1.25rem 0 0;
          font-size: 1rem;
          font-weight: 500;
          letter-spacing: normal;
          text-align: center;
          color: #333;
        }
      }
    }
  }
`;

export default ResumeBottom;
