import React from "react";
import { Link } from "@reach/router";

const ArticleLinkBar = () => (
  <div>
    <span>Sort By </span>
    <Link to="/">Top</Link> | <Link to="/home/new">New</Link> |
    <Link to="/home/MostDiscussed">Most Discussed</Link>
  </div>
);

export default ArticleLinkBar;
