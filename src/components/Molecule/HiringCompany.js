import React from "react";
import HiringCompanyData from "../../json/HiringCompany.json";

function HiringCompany() {
  return (
    <>
      {HiringCompanyData.HiringCompanies.map((hiringCompany) => (
        <li key={hiringCompany.id}>
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
        </li>
      ))}
    </>
  );
}

export default HiringCompany;
