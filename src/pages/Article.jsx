import React from "react";
import { Link } from "@reach/router";
import { time_elapsed_string } from "../components/timeAgo";

const Article = props => (
  <div className="boxed">
    <Link to={`/articles/${props.article.article_id}`}>
      <h1>{props.article.title}</h1>
    </Link>
    <span>author : {props.article.author}</span>

    <span>
      {" "}
      topic: <Link to={`/${props.article.topic}`}>{props.article.topic} </Link>
    </span>

    <span> created : {time_elapsed_string(props.article.created_at)}</span>
    <span> comment count : {props.article.comment_count}</span>
    <span> votes : {props.article.votes}</span>
  </div>
);

export default Article;
