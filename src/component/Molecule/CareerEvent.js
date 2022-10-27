import React from "react";
import CareerEventData from "../../json/CareerEvent.json";
import { HiStatusOnline } from "react-icons/hi"

function CareerEvent() {
  return (
    <>
      {CareerEventData.CareerEvents.map((careerEvent) => (
        <li key={careerEvent.id} className="event-card">
          <a href="#!">
            <div>
              <img className="event-card-image" src={careerEvent.imgAddress} alt={careerEvent.imgAlt} />
            </div>
            <div id="online-icon">
              <HiStatusOnline size={12}/>
              <span id="online">온라인</span>
            </div>
            <p className="card-title">{careerEvent.cardTitle}</p>
          </a>
        </li>
      ))}
    </>
  );
}

export default CareerEvent;
