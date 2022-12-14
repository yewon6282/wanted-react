import React from "react";

const AboutCompany = (props) => {
  return (
    <>
      {props.companyIntroduction.map((content) => (
        <div key={content.id}>
          <div className="job-description-title">{content.title}</div>
          {content.contents.split("\n").map((line, key) => (
            <p key={key}>
              {line}
              <br />
            </p>
          ))}
        </div>
      ))}
    </>
  );
};

export default AboutCompany;
