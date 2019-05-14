import React from "react";
import { Link } from "@reach/router";

const Article = props => (
  <div className="boxed">
    <Link to={`/articles/${props.article.article_id}`}>
      <h1>{props.article.title}</h1>
    </Link>
    <span>author : {props.article.author}</span>
    <span> topic: {props.article.topic}</span>

    <span> created at : {props.article.created_at}</span>
    <span> comment count : {props.article.comment_count}</span>
    <span> votes : {props.article.votes}</span>
  </div>
);

export default Article;
