import React from "react";
import ArticleLinkBar from "../components/articleLinkBar";
import { ucFirst } from "../components/ucFirst";
import { Link } from "@reach/router";
import TopicBar from "./TopicBar";

export default function SubHeader(props) {
  return (
    <div className="filters" id={props.topic}>
      <ArticleLinkBar topic={props.topic} author={props.author} />{" "}
      {props.topic && (
        <Link className="text-dark" to={`/topic/${props.topic}`}>
          <div onClick={() => props.callApi}>{ucFirst(props.topic)}</div>{" "}
        </Link>
      )}
      {props.author && (
        <Link className="text-dark" to={`/users/${props.author}`}>
          <div onClick={() => props.callApi}>{ucFirst(props.author)}</div>{" "}
        </Link>
      )}
      <TopicBar topic={props.topic} author={props.author} />
    </div>
  );
}
