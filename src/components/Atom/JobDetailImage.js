import React from "react";

const JobDetailImage = (props) => {
  return (
    <>
      {props.imgAddress.map((image) => (
        <div key={image.id}>
          <img src={image.images} alt={props.imgAlt} />
        </div>
      ))}
    </>
  );
};

export default JobDetailImage;
