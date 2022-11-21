import React from "react";

const TechnologyStack = (props) => {
  return (
    <>
      {props.technologyStack.map((stack) => (
        <span key={stack.id}>
          <p>{stack.stacks}</p>
        </span>
      ))}
    </>
  );
};

export default TechnologyStack;
