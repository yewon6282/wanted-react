import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import "../../css/develop.css";
import DevelopSection01 from "../Organism/DevelopSection01";
import DevelopSection02 from "../Organism/DevelopSection02";
import DevelopSection03 from "../Organism/DevelopSection03";

function Develop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollTop, setScrollTop] = useState(false);

  function scrollListener(scrollPosition) {
    setScrollPosition(window.scrollY);

    return scrollPosition;
  }

  const scroll = useMemo(() => scrollListener(scrollPosition), [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    if (scroll > 210) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [scroll]);

  return (
    <DevelopMain>
      <DevelopSection01 scrollTop={scrollTop} />
      <DevelopSection02 />
      <DevelopSection03 />
    </DevelopMain>
  );
}

const DevelopMain = styled.main`
  width: 100%;
  margin: 0 auto;
`;

export default Develop;
