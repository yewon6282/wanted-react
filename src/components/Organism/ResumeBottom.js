import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { storage } from "../../modules/firebase";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { RiFileCopyLine, RiUpload2Fill } from "react-icons/ri";
import ResumeBox from "../Molecule/ResumeBox";
import axios from "axios";
// import { getStorage, ref } from "firebase/storage";

const RESUMEURL = "https://firebasestorage.googleapis.com/v0/b/wanted-react-699df.appspot.com/o/";

const ResumeBottom = () => {
  // const storage = getStorage();
  // const pathReference = ref(storage, ['gs://wanted-react-699df.appspot.com/image/files/kakaoLogin.png','']);
  // console.log(pathReference);

  const [resumeImageList, setResumeImageList] = useState();
  const getResumeImageList = async () => {
    try {
      const response = await axios.get(RESUMEURL);
      setResumeImageList(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResumeImageList();
  }, []);

  const [fileUrl, setFileUrl] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const file = event.target.files[0];

    const storageRef = storage.ref("image/files/");
    const filesRef = storageRef.child(file.name); //저장할 경로
    const upLoadTask = filesRef.put(file); // 업로드 작업

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
      },
      (error) => {
        console.log("err", error);
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setFileUrl(downloadURL);
        });
        getResumeImageList();
      }
    );
  };
  console.log(resumeImageList);

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
              <ResumeBox name={list.name} />
            </div>
          ))}
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
      width: calc(25% - 1.38rem);
      height: 190px;
      margin: 0 20px 20px 0;
      position: relative;
      border: 0.0625rem solid #dbdbdb;
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
          width: 74px;
          height: 74px;
          font-size: 26px;
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
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    }
  }
`;

export default ResumeBottom;
