import React from "react";
import VODData from "../../json/VODForWorker.json";

const VODForWorker = () => {
  return (
    <>
      {VODData.VODForWorkers.map((vodData) => (
        <li key={vodData.id}>
          <a href="#!">
            <div>
              <img className="card-image" src={vodData.videoAddress} alt={vodData.videoAlt} />
            </div>
            <p className="card-comment3">{vodData.cardAuthor}</p>
            <p className="card-title">{vodData.cardTitle}</p>
            <p className="card-comment4">{vodData.cardComment}</p>
          </a>
        </li>
      ))}
    </>
  );
};

export default VODForWorker;
