import React from "react";
import ReactDOM from "react-dom";
import "../../css/loginNext.css";
import styled from "styled-components";

const Backdrop = (props) => {
  return <DeleteResumeBackgroundDiv onClick={props.closeModal}></DeleteResumeBackgroundDiv>;
};

const ModalOverlay = (props) => {
  return (
    <DeleteResumeDiv>
      <div className="delete-resume-header">
        <p className="delete-resume-header-comment">
          {props.name}
          <br />
          <br />
          삭제하시겠습니까?
        </p>
      </div>
      <div className="delete-resume-body">
        <button onClick={props.closeModal} className="cancel-delete-button">
          취소
        </button>
        <button onClick={props.deleteFile} className="delete-button">
          삭제
        </button>
      </div>
    </DeleteResumeDiv>
  );
};

const DeleteResume = (props) => {
  const closeModal = () => {
    props.setDeleteModal(false);
  };
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop closeModal={closeModal} />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay closeModal={closeModal} name={props.name} deleteFile={props.deleteFile} />, document.getElementById("overlay-root"))}
    </div>
  );
};

const DeleteResumeDiv = styled.div`
  z-index: 11;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 31.25rem;
  text-align: center;
  background-color: #fff;
  border-radius: 0.3rem;

  .delete-resume-header {
    padding: 1.25rem;

    .delete-resume-header-comment {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 0.8;
      letter-spacing: normal;
      text-align: center;
      color: #333;
    }
  }

  .delete-resume-body {
    padding: 1.25em;
    border-top: 1px solid #ececce;
    margin-top: auto;

    .cancel-delete-button {
      margin-right: 0.625rem;
      height: 3.125rem;
      width: calc(50% - 0.3125rem);
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
      background: #979797;
      border-radius: 0.1875rem;
    }

    .delete-button {
      height: 3.125rem;
      width: calc(50% - 0.3125rem);
      border-radius: 0.1875rem;
      background: #36f;
      font-size: 1.125rem;
      font-weight: 600;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
  }
`;

const DeleteResumeBackgroundDiv = styled.div`
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default DeleteResume;
