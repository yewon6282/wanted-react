import React from "react";
import CareerInsightData from "../../json/CareerInsight.json";

function CareerInsight() {
  return (
    <>
      {CareerInsightData.CareerInsights.map((cardTitle) => (
        <li key={cardTitle.id}>
          <a href="#!">
            <img className="card-image" src={cardTitle.imgAddress} alt={cardTitle.imgAlt} />
            <p className="card-title">{cardTitle.cardTitle}</p>
            <p className="card-comment">{cardTitle.cardComment}</p>
            <div className="profile-information">
              <img className="profile-photo" src={cardTitle.profileImage} alt={cardTitle.profileImageAlt} />
              <span className="writer">{cardTitle.profileWriter}</span>
            </div>
          </a>
        </li>
      ))}
    </>
  );
}

export default CareerInsight;
