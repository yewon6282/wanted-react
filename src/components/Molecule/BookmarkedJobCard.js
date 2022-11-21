import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import JobCardData from "../../json/JobCard.json";
import { cancelBookmark } from "../../modules/bookmarking";
import { FaBookmark } from "react-icons/fa";

const BookmarkedJobCard = () => {
  const bookmarkList = useSelector((state) => state.bookmarking);
  const dispatch = useDispatch();

  const cancelBookmarking = (id) => {
    dispatch(cancelBookmark(id));
  };

  const [showBookmarkedList, setShowBookmarkedList] = useState([]);

  useEffect(() => {
    setShowBookmarkedList([]);
    const bookmarkCnt = bookmarkList.bookmarkId.length;
    for (let i = 0; i < bookmarkCnt; i++) {
      setShowBookmarkedList((prevBookmarkedList) => [...prevBookmarkedList, JobCardData.JobCards.filter((el) => el.id === bookmarkList.bookmarkId[i])]);
    }
  }, [bookmarkList]);

  return (
    <>
      {showBookmarkedList.map((jobCard) => (
        <BookmarkedJobCardLi key={jobCard[0].id}>
          <FaBookmark onClick={() => cancelBookmarking(jobCard[0].id)} className="job-card-bookmark" />
          <Link
            className="job-card-link"
            to={`/Develop/${jobCard[0].id}`}
            state={{
              imgAddress: jobCard[0].imgAddress,
              imgAlt: jobCard[0].imgAlt,
              category: jobCard[0].jobCategory,
              companyName: jobCard[0].jobCompanyName,
              companyImage: jobCard[0].jobCompanyImage,
              responseRate: jobCard[0].responseRate,
              responseMessage: jobCard[0].responseMessage,
              companyLocation: jobCard[0].companyLocation,
              companyTag: jobCard[0].companyTag,
              companyIntroduction: jobCard[0].companyIntroduction,
              technologyStack: jobCard[0].technologyStack,
            }}
          >
            <div>
              <img className="job-card-image" src={jobCard[0].imgAddress[0].images} alt={jobCard[0].imgAlt} />
            </div>
            <p className="job-card-category">{jobCard[0].jobCategory}</p>
            <p className="job-card-company-name">{jobCard[0].jobCompanyName}</p>
            <div className="job-card-container-hover">
              <div className="job-card-container">{jobCard[0].responseRate}</div>
              <span className="job-card-container-massage">{jobCard[0].responseMessage}</span>
            </div>
            <p className="job-card-location">{jobCard[0].companyLocation}</p>
            <p className="job-card-reward">채용보상금 {jobCard[0].companyReward.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
          </Link>
        </BookmarkedJobCardLi>
      ))}
    </>
  );
};

const BookmarkedJobCardLi = styled.li`
  position: relative;
  float: left;
  padding: 0.625rem;
  width: calc(25% - 1.25rem);

  .job-card-bookmark {
    position: absolute;
    top: 1.5rem;
    left: 14.5rem;
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
      padding-top: 0.875rem;
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

export default BookmarkedJobCard;
