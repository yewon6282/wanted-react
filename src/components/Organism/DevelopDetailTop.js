import React from "react";
import DevelopDetailTopLeft from "../Organism/DevelopDetailTopLeft";
import DevelopDetailTopRight from "../Molecule/DevelopDetailTopRight";

const DevelopDetailTop = (props) => {
  return (
    <div className="develop-detail-flex">
      <DevelopDetailTopLeft warning={props.warning} warningOn={props.warningOn} warningOff={props.warningOff} />
      <DevelopDetailTopRight />
    </div>
  );
};

export default DevelopDetailTop;
