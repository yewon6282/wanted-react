import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import ResumeBottom from "../Organism/ResumeBottom";
import ResumeTop from "../Organism/ResumeTop";

const Resume = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.logging);

  useEffect(() => {
    if (isLoggedIn.length === 0) {
      navigate("/");
    }
  }, [isLoggedIn.length, navigate]);

  return (
    <ResumeDiv>
      <div className="resume">
        <ResumeTop />
        <ResumeBottom />
      </div>
    </ResumeDiv>
  );
};

const ResumeDiv = styled.div`
  position: relative;
  top: 3.1rem;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f8fa;

  .resume {
    margin: 0 auto;
    width: 66.25rem;
  }

  @media (min-width: 48rem) and (max-width: 61.9375rem) {
    top: 6.875rem;
  }
`;

export default Resume;
