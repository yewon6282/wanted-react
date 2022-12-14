import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import DevelopSection01 from "../Organism/DevelopSection01";
import DevelopSection02 from "../Organism/DevelopSection02";
import DevelopSection03 from "../Organism/DevelopSection03";

const Develop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollTop, setScrollTop] = useState(false);

  const scrollListener = (scrollPosition) => {
    setScrollPosition(window.scrollY);

    return scrollPosition;
  };

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
};

const DevelopMain = styled.main`
  position: relative;
  top: 3.1rem;
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 48rem) and (max-width: 61.9375rem) {
    top: 6.875rem;
  }
`;

export default Develop;
