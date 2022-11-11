import React from "react";
import { Link } from "react-router-dom";

function EveryTag(props) {
  return (
    <>
      <div className="tags-category">
        <p>{props.everyTagCategory[0].category}</p>
        <ul>
          {props.everyTagCategory.map((list) => (
            <li key={list.id}>
              <Link className="category-tag" 
                to={`/SearchResult/${list.id}`}
                state={{
                  id: list.id,
                  tag: list.tag,
                }}
              >
                {list.tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default EveryTag;
