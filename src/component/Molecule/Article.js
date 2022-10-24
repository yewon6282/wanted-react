import React from "react";
import ArticleData from "../../json/Article.json";

function Article() {
  return (
    <>
      {ArticleData.Articles.map((cardTitle) => (
        <li key={cardTitle.id}>
          <a href="#!">
            <div>
              <img className="card-image" src={cardTitle.imgAddress} alt={cardTitle.imgAlt} />
            </div>
            <p className="card-title">{cardTitle.cardTitle}</p>
            <p className="card-comment2">{cardTitle.cardCategory}</p>
          </a>
        </li>
      ))}
    </>
  );
}

export default Article;
