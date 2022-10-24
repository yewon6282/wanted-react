import React from "react";
import { Link } from "react-router-dom";
import JobCardData from "../../json/JobCard.json";
import { FaRegBookmark } from "react-icons/fa";

function JobCard() {
  return (
    <>
      {JobCardData.JobCards.map((jobCompanyName) => (
        <li key={jobCompanyName.id}>
          <Link to="/Develop/117564">
            <div>
              <img className="job-card-image" src={jobCompanyName.imgAddress} alt={jobCompanyName.imgAlt} />
              <FaRegBookmark id="jobCardBookmark" />
            </div>
            <p className="job-card-category">{jobCompanyName.jobCategory}</p>
            <p className="job-card-company-name">{jobCompanyName.jobCompanyName}</p>
            <div className="job-card-container-hover">
              <div className="job-card-container">{jobCompanyName.responseRate}</div>
              <span className="job-card-container-massage">{jobCompanyName.responseMessage}</span>
            </div>
            <p className="job-card-location">{jobCompanyName.companyLocation}</p>
            <p className="job-card-reward">{jobCompanyName.companyReward}</p>
          </Link>
        </li>
      ))}
    </>
  );
}

export default JobCard;
