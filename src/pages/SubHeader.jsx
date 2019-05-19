import React from "react";
import ArticleLinkBar from "../components/articleLinkBar";
import { ucFirst } from "../components/ucFirst";
import { Link } from "@reach/router";
import TopicBar from "./TopicBar";

export default function SubHeader(props) {
  return (
    <div className="filters" id={props.topic}>
      <ArticleLinkBar topic={props.topic} author={props.username} />{" "}
      {props.topic && (
        <h3 className="blackLink" onClick={props.callApi}>
          <Link to={`/topic/${props.topic}`}>{ucFirst(props.topic)}</Link>
        </h3>
      )}
      <TopicBar />
    </div>
  );
}
