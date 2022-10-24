import React from "react";
import HiringCompanyData from "../../json/HiringCompany.json";

function HiringCompany() {
  return (
    <>
      {HiringCompanyData.HiringCompanies.map((companyTitle) => (
        <li key={companyTitle.id}>
          <div className="slider-item-top">
            <img className="slider-item-image" src={companyTitle.imgAddress} alt={companyTitle.imgAlt} />
          </div>
          <div className="slider-item-middle">
            <img src={companyTitle.companyLogo} alt={companyTitle.companyLogoAlt} />
          </div>
          <div className="slider-item-bottom">
            <p className="slidder-company-title">{companyTitle.companyTitle}</p>
            <p className="slidder-company-position">{companyTitle.companyPosition}</p>
          </div>
        </li>
      ))}
    </>
  );
}

export default HiringCompany;
