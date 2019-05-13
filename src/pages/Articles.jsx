import React, { Component } from "react";
import Article from "./Article";

class Articles extends Component {
  render() {
    return (
      <div>
        <h1>Articles</h1>
        <p>Map over articles</p>
        <Article />
      </div>
    );
  }
}

export default Articles;
