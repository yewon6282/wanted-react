import React from "react";
import styled from "styled-components";
import HiringCompanyData from "../../json/HiringCompany.json";

const HiringCompany = () => {
  return (
    <>
      {HiringCompanyData.HiringCompanies.map((hiringCompany) => (
        <HiringCompanyLi key={hiringCompany.id}>
          <div className="slider-item-top">
            <img className="slider-item-image" src={hiringCompany.imgAddress} alt={hiringCompany.imgAlt} />
          </div>
          <div className="slider-item-middle">
            <img src={hiringCompany.companyLogo} alt={hiringCompany.companyLogoAlt} />
          </div>
          <div className="slider-item-bottom">
            <p className="slidder-company-title">{hiringCompany.companyTitle}</p>
            <p className="slidder-company-position">{hiringCompany.companyPosition}</p>
          </div>
        </HiringCompanyLi>
      ))}
    </>
  );
};

const HiringCompanyLi = styled.li`
  /* width: 12.31rem; */
  margin: 0 0.625rem;
  width: 100%;
  height: 16.93rem;
  border: 1px solid #ececec;
  border-radius: 0.2rem;
  float: left;

  .slider-item-top {
    width: inherit;
    height: 9.18rem;
    border-radius: inherit;
    overflow: hidden;

    .slider-item-image {
      width: inherit;
      height: inherit;
      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      transition: all 0.3s linear;
    }

    .slider-item-image:hover {
      transform: scale(1.1);
    }
  }

  .slider-item-middle {
    position: relative;
    top: -1.6rem;
    left: 1rem;
    width: 3rem;
    height: 3rem;
    border: 1px solid #ececec;

    & img {
      width: inherit;
      height: inherit;
    }
  }

  .slider-item-bottom {
    height: 7.75rem;
    padding: 0 1rem;

    .slidder-company-title {
      font-size: 1rem;
      font-weight: 600;
      color: #333;
      overflow: hidden;
    }

    .slidder-company-position {
      margin-top: 0.37rem;
      color: #999;
      font-size: 0.87rem;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    margin: 0.625rem;
    width: calc(20% - 1.25rem);
    height: 0;
    padding-bottom: 26%;

    .slider-item-top {
      position: relative;
      width: 100%;
      height: 0;
      padding-bottom: 70%;

      .slider-item-image {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }

    .slider-item-bottom {
      height: max-content;
    }
  }
`;

export default HiringCompany;
