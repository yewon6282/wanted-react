import React, { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ImageSlide from "../../json/ImageSlide.json";

function MainSection01() {
  const imageLength = ImageSlide.Images.length;
  const newImageList = {...ImageSlide};
  const width = 67.75;
  const [idx, setIdx] = useState(0);
  const [imageSlide, setImageSlide] = useState(1);

  const first = ImageSlide.Images.filter((e) => e.id === 0);
  
  useEffect(() => {
    newImageList.Images.push({ id: imageLength, imgAddress: first.map((e) => e.imgAddress).join(), alt: first.map((e) => e.alt).join() });
  }, []);

  function countIdx() {
    if (idx === imageLength - 2) {
      setTimeout(() => {
        setImageSlide(49.15);
        setIdx(0);
      }, 2000);
    } else {
      setIdx(idx + 1);
    }
  }

  useEffect(() => {
    setTimeout(countIdx, 3000);
    setImageSlide(49.15 + width * idx);

    return () => {
      countIdx();
    };
  }, [idx]);

  return (
    <div id="mainSection1">
      <ul className="slides" style={{ left: -`${imageSlide}` + "rem" }}>
        {newImageList.Images.map((image) => (
          <li key={image.id}>
            <img className="slide-image" src={image.imgAddress} alt={image.alt} />
          </li>
        ))}
      </ul>
      <p className="controller">
        <span className="slide-prev">
          <BsChevronLeft />
        </span>
        <span className="slide-next">
          <BsChevronRight />
        </span>
      </p>
    </div>
  );
}

export default MainSection01;
