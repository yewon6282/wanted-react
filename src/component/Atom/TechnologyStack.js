import React from "react";

function TechnologyStack({ technologyStack }) {
  return (
    <>
      {technologyStack.map((stack) => (
        <span key={stack.id}>
          <p>{stack.stacks}</p>
        </span>
      ))}
    </>
  );
}

export default TechnologyStack;
