import React from "react";
import { Link } from "@reach/router";
import { time_elapsed_string } from "../components/timeAgo";
import { ucFirst } from "../components/ucFirst";
import { Voter } from "../components/voter";

const Article = props => (
  <div className="boxed">
    <div className="votePosition">
      <Voter
        loggedInUser={props.loggedInUser}
        stateVotes={props.article.votes}
        id={props.article.article_id}
        comment={false}
      />
      <div>
        <Link to={`/articles/${props.article.article_id}`}>
          <h3 className="text-dark">{props.article.title}</h3>
        </Link>
        <div className="textLayout">
          <span>
            Created by{" "}
            <Link
              className="text-secondary"
              to={`/users/${props.article.author}`}
            >
              {props.article.author}
            </Link>{" "}
            {time_elapsed_string(props.article.created_at)} | Topic:{" "}
            <Link
              className="text-secondary"
              to={`/topic/${props.article.topic}`}
            >
              {ucFirst(props.article.topic)}
            </Link>{" "}
            | Comments : {props.article.comment_count}{" "}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Article;
