import React, { useState } from "react";
import "../../css/developDetail.css";
import DevelopDetailBottom from "../Organism/DevelopDetailBottom";
import DevelopDetailTop from "../Organism/DevelopDetailTop";

function DevelopDetail() {
  const [warning, setWarning] = useState(false);

  function warningOn() {
    setWarning(true);
  }

  function warningOff() {
    setWarning(false);
  }

  return (
    <main className="develop-detail">
      <DevelopDetailTop warning={warning} warningOn={warningOn} warningOff={warningOff} />
      <DevelopDetailBottom />
    </main>
  );
}

export default DevelopDetail;
