import React, { useEffect, useRef, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ImageSlide from "../../json/ImageSlide.json";

// function useInterval(callback, delay) {
//   const savedCallback = useRef();
//   useEffect(() => {
//     savedCallback.current = callback;
//   }, [callback]);

//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }

const MainSection01 = () => {
  // const imageList = ImageSlide.Images;
  // const imageLength = ImageSlide.Images.length;
  // const [currentIndex, setCurrentIndex] = useState(0);
  // let newImageList = setNewImageList();

  // function setNewImageList() {
  //   const firstImage = imageList[0];
  //   const lastImage = imageList[imageLength - 1];
  //   return [lastImage, ...imageList, firstImage];
  // }

  // console.log(newImageList);

  // function handleSlide(index) {
  //   if (index < 0) {
  //     index = imageLength - 1;
  //   } else if (index > imageLength) {
  //     index = 0;
  //   }
  //   setCurrentIndex(index);
  // }

  // function handleSwipe(direction) {
  //   console.log(direction);
  //   handleSlide(currentIndex + direction);
  // }

  // useInterval(() => {
  //   setCurrentIndex((currentIndex) => currentIndex + 1);
  // }, 3000);
  const imageLength = ImageSlide.Images.length;
  const newImageList = { ...ImageSlide };
  const width = 67.75;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageSlide, setImageSlide] = useState(1);

  const first = ImageSlide.Images.filter((e) => e.id === 0);

  useEffect(() => {
    newImageList.Images.push({ id: imageLength, imgAddress: first.map((e) => e.imgAddress).join(), alt: first.map((e) => e.alt).join() });
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
