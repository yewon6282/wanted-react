import React from "react";

function SearchResultTag(props) {
  return (
    <>
      {props.companyTag.map((tag) => (
        <span key={tag.id}>{tag.tags}</span>
      ))}
    </>
  );
}

export default SearchResultTag;
