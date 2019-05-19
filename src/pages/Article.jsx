import React from "react";
import { Link } from "@reach/router";
import { time_elapsed_string } from "../components/timeAgo";
import { ucFirst } from "../components/ucFirst";
import { Voter } from "../components/voter";

const Article = props => (
  <div className="boxed">
    <div className="votePositionMainPage">
      <Voter
        loggedInUser={props.loggedInUser}
        stateVotes={props.article.votes}
        id={props.article.article_id}
        comment={false}
      />
      {/* <div> Votes : {props.article.votes}</div> */}

      <div>
        <Link to={`/articles/${props.article.article_id}`}>
          <h3 className="blackLink">{props.article.title}</h3>
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
            <span>
              {" "}
              Created : {time_elapsed_string(props.article.created_at)} |
            </span>
            <span> Comments : {props.article.comment_count} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Article;
