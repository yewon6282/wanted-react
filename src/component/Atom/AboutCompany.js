import React from "react";

function AboutCompany({ companyIntroduction }) {
  return (
    <>
      {companyIntroduction.map((content) => (
        <div key={content.id}>
          <div className="job-description-title">
            {content.title}
          </div>
          {content.contents.split('\n').map((line) => (
            <span>{line}<br/></span>
          ))}
        </div>
      ))}
    </>
  );
}

export default AboutCompany;
