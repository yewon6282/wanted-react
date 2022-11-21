import React from "react";
import styled from "styled-components";
import JobCard from "../Molecule/JobCard";

const DevelopSection03 = () => {
  return (
    <DevelopSection03Div>
      <ul className="job-cards">
        <JobCard />
      </ul>
    </DevelopSection03Div>
  );
};

const DevelopSection03Div = styled.div`
  margin: 0 auto;
  width: 66.25rem;

  .job-cards {
    margin: 1.8rem -0.625rem;
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: 48rem) and (max-width: 61.9375rem) {
    width: 90%;
  }
`;

export default DevelopSection03;
