import React from "react";

function JobDetailImage({ imgAddress, imgAlt }) {
  return (
    <>
      {imgAddress.map((image) => (
        <div key={image.id}>
          <img src={image.images} alt={imgAlt} />
        </div>
      ))}
    </>
  );
}

export default JobDetailImage;
