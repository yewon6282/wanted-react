import React from "react";

function JobDetailTag({ companyTag }) {
  return (
    <>
      {companyTag.map((tag) => (
        <button key={tag.id}>
          <p>{tag.tags}</p>
        </button>
      ))}
    </>
  );
}

export default JobDetailTag;
