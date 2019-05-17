import React from "react";
import { Link } from "@reach/router";
import { time_elapsed_string } from "../components/timeAgo";
import { ucFirst } from "../components/ucFirst";

const Article = props => (
  <div className="boxed">
    <Link to={`/articles/${props.article.article_id}`}>
      <h1>{props.article.title}</h1>
    </Link>
    <div className="textLayout">
      <div>
        {" "}
        <span>
          Author :{" "}
          <Link to={`/users/${props.article.author}`}>
            {" "}
            {props.article.author}
          </Link>
        </span>
        <span>
          {" "}
          Topic:{" "}
          <Link to={`/topic/${props.article.topic}`}>
            {ucFirst(props.article.topic)}{" "}
          </Link>
        </span>
      </div>
      <div>
        {" "}
        <span> created : {time_elapsed_string(props.article.created_at)}</span>
        <span> comments : {props.article.comment_count}</span>
        <span> votes : {props.article.votes}</span>
      </div>
    </div>
  </div>
);

export default Article;
