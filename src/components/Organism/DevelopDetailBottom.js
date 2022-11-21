import React from "react";
import JobCard from "../Molecule/JobCard";

const DevelopDetailBottom = () => {
  return (
    <div className="develop-detail-bottom">
      <p className="develop-detail-bottom-title">이 포지션을 찾고 계셨나요?</p>
      <ul className="job-card">
        <JobCard />
      </ul>
    </div>
  );
};

export default DevelopDetailBottom;
