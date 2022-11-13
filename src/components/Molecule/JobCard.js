import React from "react";
import { Link } from "react-router-dom";
import JobCardData from "../../json/JobCard.json";
import Bookmark from "../Atom/Bookmark";

function JobCard() {
  return (
    <>
      {JobCardData.JobCards.map((jobCard) => (
        <li key={jobCard.id}>
          <Bookmark />
          <Link
            className="jobcard-link"
            to={`/Develop/${jobCard.id}`}
            state={{
              imgAddress: jobCard.imgAddress,
              imgAlt: jobCard.imgAlt,
              category: jobCard.jobCategory,
              companyName: jobCard.jobCompanyName,
              companyImage: jobCard.jobCompanyImage,
              responseRate: jobCard.responseRate,
              responseMessage: jobCard.responseMessage,
              companyLocation: jobCard.companyLocation,
              companyTag: jobCard.companyTag,
              companyIntroduction: jobCard.companyIntroduction,
              technologyStack: jobCard.technologyStack,
            }}
          >
            <div>
              <img className="job-card-image" src={jobCard.imgAddress[0].images} alt={jobCard.imgAlt} />
            </div>
            <p className="job-card-category">{jobCard.jobCategory}</p>
            <p className="job-card-company-name">{jobCard.jobCompanyName}</p>
            <div className="job-card-container-hover">
              <div className="job-card-container">{jobCard.responseRate}</div>
              <span className="job-card-container-massage">{jobCard.responseMessage}</span>
            </div>
            <p className="job-card-location">{jobCard.companyLocation}</p>
            <p className="job-card-reward">채용보상금 {jobCard.companyReward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
          </Link>
        </li>
      ))}
    </>
  );
}

export default JobCard;
