import React from "react";

function JobDetailImage({ imgAddress, imgAlt }) {
  return (
    <>
      {imgAddress.map((image) => (
        <p key={image.id}>
          <img src={image.images} alt={imgAlt} />
        </p>
      ))}
    </>
  );
}

export default JobDetailImage;
