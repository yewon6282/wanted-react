import React from "react";
import ArticleData from "../../json/Article.json";

function Article() {
  return (
    <>
      {ArticleData.Articles.map((article) => (
        <li key={article.id}>
          <a href="#!">
            <div>
              <img className="card-image" src={article.imgAddress} alt={article.imgAlt} />
            </div>
            <p className="card-title">{article.cardTitle}</p>
            <p className="card-comment2">{article.cardCategory}</p>
          </a>
        </li>
      ))}
    </>
  );
}

export default Article;
