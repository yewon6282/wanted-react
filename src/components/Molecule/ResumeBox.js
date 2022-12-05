import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getStorage, ref, getDownloadURL, deleteObject } from "firebase/storage";
import { BsFileEarmarkText, BsThreeDotsVertical } from "react-icons/bs";
import DeleteResume from "./DeleteResume";

const ResumeBox = (props) => {
  const btnRef = useRef();
  const modalRef = useRef();
  const [dropdownState, setDropdownState] = useState(false);

  const changeDropdown = (event) => {
    if (!dropdownState && btnRef.current && btnRef.current.contains(event.target)) {
      setDropdownState(true);
    } else setDropdownState(false);
  };

  useEffect(() => {
    window.addEventListener("click", changeDropdown);
    return () => {
      window.removeEventListener("click", changeDropdown);
    };
  }, []);

  const storage = getStorage();
  const imagesRef = ref(storage, props.list._location.path_);

  const downloadFile = () => {
    getDownloadURL(imagesRef)
      .then((url) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = function () {
          const blob = xhr.response;
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = props.list.name;
          link.click();
          URL.revokeObjectURL(link.href);
        };
        xhr.open("GET", url);
        xhr.send();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteFile = () => {
    deleteObject(imagesRef)
      .then(() => {
        props.showFileList();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [deleteModal, setDeleteModal] = useState(false);

  const showDeleteModal = () => {
    setDeleteModal(true);
  };

  return (
    <ResumeBoxDiv>
      <div className="resume-body">
        <div className="resume-image-title">{props.list.name}</div>
        <div className="resume-date">{props.lastModifiedDate}</div>
      </div>
      <div className="resume-footer">
        <BsFileEarmarkText className="file-icon" />
        <p className="file-upload-state" onClick={downloadFile}>
          첨부 완료
        </p>
        <div ref={btnRef} className="dropdown-container">
          <BsThreeDotsVertical />
        </div>
        <DropdownModalDiv ref={modalRef} dropdownState={dropdownState}>
          <button className="dropdown-modal-menu">이력서 이름 변경</button>
          <button onClick={downloadFile} className="dropdown-modal-menu">
            다운로드
          </button>
          <button onClick={showDeleteModal} className="dropdown-modal-menu" id="deleteResume">
            이력서 삭제
          </button>
        </DropdownModalDiv>
      </div>
      {deleteModal && <DeleteResume name={props.list.name} setDeleteModal={setDeleteModal} deleteFile={deleteFile} />}
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
      cursor: pointer;
    }

    .dropdown-container {
      display: flex;
      justify-content: end;
      align-items: center;
      margin-left: auto;
      cursor: pointer;
    }
  }
`;

const DropdownModalDiv = styled.div`
  display: ${(props) => (props.dropdownState ? "flex" : "none")};
  flex-direction: column;
  z-index: 10;
  position: absolute;
  top: 36px;
  right: 0;
  min-width: 160px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  border: 1px solid #e1e2e3;
  border-radius: 4px;
  background-color: #fff;
  padding: 10px 5px;

  .dropdown-modal-menu {
    height: 26px;
    border: none;
    color: #333;
    text-align: left;
    padding: 3px 15px;
    font-size: 14px;
  }

  #deleteResume {
    color: #fe415c;
  }
`;

export default ResumeBox;
