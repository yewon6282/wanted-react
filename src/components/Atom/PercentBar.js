import React from "react";
import ReactDOM from "react-dom";
import "../../css/loginNext.css";
import styled from "styled-components";

const Backdrop = (props) => {
  return <PercentBarBackgroundDiv></PercentBarBackgroundDiv>;
};

const ModalOverlay = (props) => {
  return (
    <PercentBarDiv>
      <div className="uploading-comment">
        <p>uploading...</p>
      </div>
      <div className="percent-bar">
        <CurrentPersentDiv percentBar={props.percentBar}></CurrentPersentDiv>
      </div>
    </PercentBarDiv>
  );
};

const PercentBar = (props) => {
  return (
    <div>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverlay name={props.name} deleteFile={props.deleteFile} percentBar={props.percentBar} />, document.getElementById("overlay-root"))}
    </div>
  );
};

const PercentBarDiv = styled.div`
  z-index: 11;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 31.25rem;
  text-align: center;
  background-color: #fff;
  border-radius: 0.3rem;

  .uploading-comment {
    padding: 1.25rem;
    color: #333;
  }

  .percent-bar {
    margin: 0 auto 1.25rem;
    width: 90%;
    height: 0.5rem;
    background-color: #dedede;
    border-radius: 0.2rem;
  }
`;

const CurrentPersentDiv = styled.div`
  width: ${props => props.percentBar}%;
  height: inherit;
  background-color: #36f;
  border-radius: 0.2rem;
`;

const PercentBarBackgroundDiv = styled.div`
  z-index: 11;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default PercentBar;
