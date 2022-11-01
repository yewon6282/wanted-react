import React from "react";

function AboutCompany({ companyIntroduction }) {
  return (
    <>
      {companyIntroduction.map((content) => (
        <div key={content.id}>
          <div className="job-description-title">
            {content.title}
          </div>
          {content.contents.split('\n').map((line, key) => (
            <p key={key}>{line}<br/></p>
          ))}
        </div>
      ))}
    </>
  );
}

export default AboutCompany;
