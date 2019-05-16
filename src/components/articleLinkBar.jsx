import React from "react";
import { Link } from "@reach/router";

const ArticleLinkBar = props => (
  <div>
    <span>Sort By </span>
    <Link
      to={
        props.topic
          ? `/topic/${props.topic}/top`
          : props.author
          ? `/users/${props.author}/top`
          : "/"
      }
    >
      Top
    </Link>{" "}
    |{" "}
    <Link
      to={
        props.topic
          ? `/topic/${props.topic}/new`
          : props.author
          ? `/users/${props.author}/new`
          : "/home/new"
      }
    >
      New
    </Link>{" "}
    |
    <Link
      to={
        props.topic
          ? `/topic/${props.topic}/mostDiscussed`
          : props.author
          ? `/users/${props.author}/mostDiscussed`
          : "/home/mostDiscussed"
      }
    >
      Most Discussed
    </Link>
  </div>
);

export default ArticleLinkBar;
