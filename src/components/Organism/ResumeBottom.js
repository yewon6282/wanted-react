import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ResumeBox from "../Molecule/ResumeBox";
import { getStorage, ref, listAll } from "firebase/storage";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { RiFileCopyLine, RiUpload2Fill } from "react-icons/ri";
import { storage } from "../../modules/firebase";
import PercentBar from "../Atom/PercentBar";

const ResumeBottom = () => {
  const [showPercentBar, setShowPercentBar] = useState(false);
  const [percentBar, setPercentBar] = useState(0);
  const [resumeImageList, setResumeImageList] = useState([]);
  const gs = getStorage();

  const listRef = ref(gs, "image/files");

  const showFileList = () => {
    setResumeImageList([]);

    listAll(listRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          setResumeImageList((prevResumeImageList) => [...prevResumeImageList, itemRef]);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    showFileList();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setShowPercentBar(true);

    const file = event.target.files[0];

    const storageRef = storage.ref("image/files/");
    const filesRef = storageRef.child(file.name);
    const upLoadTask = filesRef.put(file);

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
        setPercentBar(percent);
      },
      (error) => {
        console.log("err", error);
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          showFileList();
        });
      }
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (percentBar === 100) {
        setShowPercentBar(false);
      }
    }, 2000);
    return () => {
      clearTimeout();
    };
  }, [percentBar]);

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
        <form className="resume-item">
          <label htmlFor="input-file" className="resume-upload-item">
            <div className="upload-file-icon">
              <RiUpload2Fill />
            </div>
            <p>파일 업로드</p>
          </label>
          <input type="file" id="input-file" onChange={onSubmit} />
        </form>
        {resumeImageList !== undefined &&
          resumeImageList.map((list, key) => (
            <div key={key} className="resume-item">
              <ResumeBox list={list} showFileList={showFileList} />
            </div>
          ))}
        {showPercentBar && <PercentBar percentBar={percentBar} />}
      </div>
    </ResumeBottomDiv>
  );
};

const ResumeBottomDiv = styled.div`
  width: inherit;
  margin: 1.5625rem 0 0.3125rem;

  .resume-list-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    h4 {
      font-size: 1rem;
      font-weight: 600;
      line-height: 1.4;
      margin: 0;
      padding: 0.9375rem 0;
      color: #333;
    }

    a {
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
      padding: 0.9375rem 0;
      color: #36f;
      display: flex;
      align-items: center;

      .exclimation-icon {
        margin-left: 0.5rem;
        position: relative;
        bottom: 0.0625rem;
      }
    }
  }

  .resume-list-body {
    width: calc(100% + 1.25rem);
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;

    .resume-item {
      width: calc(25% - 1.38rem);
      height: 11.875rem;
      margin: 0 1.25rem 1.25rem 0;
      position: relative;
      border: 1px solid #dbdbdb;
      background-color: #fff;

      .resume-add-item,
      .resume-upload-item {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .add-file-icon,
        .upload-file-icon {
          margin: 0 auto;
          width: 4.625rem;
          height: 4.625rem;
          font-size: 1.625rem;
          color: #fff;
          background-color: #36f;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .upload-file-icon {
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

      input[type="file"] {
        position: absolute;
        width: 0.0625rem;
        height: 0.0625rem;
        padding: 0;
        margin: -0.0625rem;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    }
  }
`;

export default ResumeBottom;
