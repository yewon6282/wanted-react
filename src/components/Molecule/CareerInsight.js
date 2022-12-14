import React from "react";
import CareerInsightData from "../../json/CareerInsight.json";

const CareerInsight = (props) => {
  let cardLength = CareerInsightData.CareerInsights.filter((e) => e.id <= props.cardIdx);
  return (
    <>
      {cardLength.map((careerInsight) => (
        <li key={careerInsight.id}>
          <a href="#!">
            <img className="card-image" src={careerInsight.imgAddress} alt={careerInsight.imgAlt} />
            <p className="card-title">{careerInsight.cardTitle}</p>
            <p className="card-comment">{careerInsight.cardComment}</p>
            <div className="profile-information">
              <img className="profile-photo" src={careerInsight.profileImage} alt={careerInsight.profileImageAlt} />
              <span className="writer">{careerInsight.profileWriter}</span>
            </div>
          </a>
        </li>
      ))}
    </>
  );
};

export default CareerInsight;
