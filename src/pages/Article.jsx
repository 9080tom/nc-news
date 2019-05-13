import React from "react";

const Article = props => (
  <div>
    <h1>{props.article.title}</h1>
    <span>author : {props.article.author}</span>
    <span> created at : {props.article.created_at}</span>
    <span> comment count : {props.article.comment_count}</span>
    <span> votes : {props.article.votes}</span>
  </div>
);

export default Article;
