import React from "react";

const JobDetailTag = (props) => {
  return (
    <>
      {props.companyTag.map((tag) => (
        <button key={tag.id}>
          <p>{tag.tags}</p>
        </button>
      ))}
    </>
  );
};

export default JobDetailTag;
