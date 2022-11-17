import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import JobCardData from "../../json/JobCard.json";
import { doBookmark, cancelBookmark } from "../../modules/bookmarking";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { showLogin } from "../../modules/showModal";

function JobCard() {
  const bookmarkList = useSelector((state) => state.bookmarking);
  const isLoggedIn = useSelector((state) => state.logging);
  const dispatch = useDispatch();

  function bookmarking(id) {
    dispatch(doBookmark(id));
  }

  function cancelBookmarking(id) {
    dispatch(cancelBookmark(id));
  }

  const showLoginModal = () => {
    dispatch(showLogin());
  };

  return (
    <>
      {JobCardData.JobCards.map((jobCard) => (
        <JobCardLi key={jobCard.id}>
          {bookmarkList.includes(jobCard.id) ? <FaBookmark onClick={isLoggedIn[0] ? () => cancelBookmarking(jobCard.id) : showLoginModal} className="job-card-bookmark" /> : <FaRegBookmark onClick={isLoggedIn[0] ? () => bookmarking(jobCard.id) : showLoginModal} className="job-card-bookmark" />}
          <Link
            className="job-card-link"
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
        </JobCardLi>
      ))}
    </>
  );
}

const JobCardLi = styled.li`
  padding: 0.625rem;
  width: calc(25% - 1.25rem);

  .job-card-bookmark {
    position: relative;
    top: 2rem;
    left: 6.7rem;
    color: white;
  }

  .job-card-link {
    text-align: left;

    .job-card-image {
      width: 15.6rem;
      height: 10.9rem;
      border: 1px solid #e1e2e3;
      border-radius: 0.2rem;
      object-fit: cover;
    }

    .job-card-category {
      color: #333;
      font-size: 1.12rem;
      font-weight: 600;
      line-height: 1.2;
      max-height: 2.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .job-card-company-name {
      font-size: 0.87rem;
      margin-top: 0.62rem;
      color: #333;
    }

    .job-card-container-hover {
      &:hover .job-card-container-massage {
        display: block;
      }

      .job-card-container {
        margin-top: 0.25rem;
        padding: 0.2rem 0.3rem;
        width: fit-content;
        border: 1px solid #00aead;
        border-radius: 0.1rem;
        font-size: 0.62rem;
        font-weight: 400;
        color: #00aead;
      }

      .job-card-container-massage {
        display: none;
        position: absolute;
        padding: 0.8rem 1rem;
        border: 1px solid #333;
        font-size: 0.8rem;
        color: #333;
        background-color: #fff;
      }
    }

    .job-card-location {
      font-size: 0.87rem;
      margin-top: 0.62rem;
      color: #999999;
    }

    .job-card-reward {
      margin-top: 0.62rem;
      color: #333;
      font-size: 0.87rem;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: calc(46.2% - 1.25rem);

    .job-card-link {
      .job-card-image {
        width: 30rem;
        height: 20rem;
        border: 1px solid #e1e2e3;
        border-radius: 0.2rem;
        object-fit: cover;
      }
    }
  }
`;

export default JobCard;
