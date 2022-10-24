import React from "react";
import VODData from "../../json/VODForWorker.json";

function VODForWorker() {
  return (
    <>
      {VODData.VODForWorkers.map((cardTitle) => (
        <li key={cardTitle.id}>
          <a href="#!">
            <div>
              <img className="card-image" src={cardTitle.videoAddress} alt={cardTitle.videoAlt} />
            </div>
            <p className="card-comment3">{cardTitle.cardAuthor}</p>
            <p className="card-title">{cardTitle.cardTitle}</p>
            <p className="card-comment4">{cardTitle.cardComment}</p>
          </a>
        </li>
      ))}
    </>
  );
}

export default VODForWorker;
