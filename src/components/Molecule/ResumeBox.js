import React from "react";
import styled from "styled-components";
import { BsFileEarmarkText, BsThreeDotsVertical } from "react-icons/bs";

const ResumeBox = (props) => {
  return (
    <ResumeBoxDiv>
      <div className="resume-body">
        <div className="resume-image-title">{props.name.substring(12)}</div>
        <div className="resume-date">{props.lastModifiedDate}</div>
      </div>
      <div className="resume-footer">
        <BsFileEarmarkText className="file-icon" />
        <p className="file-upload-state">첨부 완료</p>
        <BsThreeDotsVertical className="dropdown-container"/>
      </div>
    </ResumeBoxDiv>
  );
};

const ResumeBoxDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .resume-body {
    width: inherit;
    height: 80%;

    .resume-image-title {
      padding: 20px 20px 6px;
      font-size: 18px;
      font-weight: 600;
      line-height: 1.33;
      max-height: 46px;
      max-width: 100%;
      letter-spacing: normal;
      text-align: left;
      color: #333;
      overflow: hidden;
      word-break: break-all;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      border: none;
    }

    .resume-date {
      color: #999;
      margin-top: 5px;
    }
  }

  .resume-footer {
    position: absolute;
    bottom: 0;
    width: calc(100% - 32px);
    height: 41px;
    padding: 0 12px 0 20px;
    align-items: center;
    border-top: 1px solid #e0e0e0;
    display: flex;
    flex-direction: row;

    .file-icon {
      width: 20px;
      height: 20px;
      font-size: 16px;
      text-align: center;
      margin-right: 10px;
    }

    .file-upload-state {
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: normal;
      text-align: left;
    }

    .dropdown-container {
      display: flex;
      justify-content: end;
      align-items: center;
      margin-left: auto;
    }
  }
`;

export default ResumeBox;
