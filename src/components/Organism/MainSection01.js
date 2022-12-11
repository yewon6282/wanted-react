import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ImageSlide from "../../json/ImageSlide.json";

const MainSection01 = () => {
  const imageLength = ImageSlide.Images.length;
  const newImageList = { ...ImageSlide };
  const width = 67.75;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSlide, setImageSlide] = useState(1);

  const first = ImageSlide.Images.filter((e) => e.id === 0);

  useEffect(() => {
    newImageList.Images.push({ id: imageLength, imgAddress: first.map((e) => e.imgAddress).join(), alt: first.map((e) => e.alt).join() });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const countCurrentIndex = () => {
    if (currentIndex === imageLength - 2) {
      setTimeout(() => {
        setImageSlide(49.15);
        setCurrentIndex(0);
      }, 2000);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    setTimeout(countCurrentIndex, 3000);
    setImageSlide(49.15 + width * currentIndex);

    return () => {
      countCurrentIndex();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <div id="mainSection1">
      {/* <ul className="slides" style={{ transform: `translateX(${(-100 / imageLength) * (0.5 + currentIndex)}%)` }}> */}
      <ul className="slides" style={{ left: -`${imageSlide}` + "rem" }}>
        {ImageSlide.Images.map((image) => (
          <li key={image.id}>
            <img className="slide-image" src={image.imgAddress} alt={image.alt} />
          </li>
        ))}
      </ul>
      <p className="controller">
        <span className="slide-prev">
          {/* <span className="slide-prev" onClick={() => handleSwipe(-1)}> */}
          <BsChevronLeft />
        </span>
        <span className="slide-next">
          {/* <span className="slide-next" onClick={() => handleSwipe(1)}> */}
          <BsChevronRight />
        </span>
      </p>
    </div>
  );
};

export default MainSection01;
