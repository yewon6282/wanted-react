import React from "react";
import DevelopDetailTopLeft from "../Organism/DevelopDetailTopLeft";
import DevelopDetailTopRight from "../Molecule/DevelopDetailTopRight";

function DevelopDetailTop({ warning, warningOn, warningOff }) {
  return (
    <div className="develop-detail-flex">
      <DevelopDetailTopLeft warning={warning} warningOn={warningOn} warningOff={warningOff} />
      <DevelopDetailTopRight />
    </div>
  );
}

export default DevelopDetailTop;
