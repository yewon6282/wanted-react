import React from "react";
import styled from "styled-components";
import HiringCompanyData from "../../json/HiringCompany.json";

function HiringCompany() {
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
}

const HiringCompanyLi = styled.li`
  .slider-item-top {
    width: inherit;
    height: 9.18rem;
    border-radius: inherit;
    overflow: hidden;
  }

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

  .slider-item-middle {
    position: relative;
    top: -1.6rem;
    left: 1rem;
    width: 3rem;
    height: 3rem;
    border: 1px solid #ececec;
  }

  .slider-item-middle img {
    width: inherit;
    height: inherit;
  }

  .slider-item-bottom {
    height: 7.75rem;
    padding: 0 1rem;
  }

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
`;

export default HiringCompany;
