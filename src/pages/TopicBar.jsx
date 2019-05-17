import React, { Component } from "react";
import { getTopics } from "../components/api";
import { Link } from "@reach/router";
import { ucFirst } from "../components/ucFirst";

class TopicBar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="filter">
        <span>Topics </span>
        <Link to="/">
          <span>All</span>
        </Link>
        {this.state.topics.map(topic => {
          return (
            <span key={ucFirst(topic.slug)}>
              {" | "}
              <Link to={`/topic/${topic.slug}`}>{ucFirst(topic.slug)}</Link>
            </span>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    getTopics()
      .then(({ data }) => {
        this.setState({ topics: data.topics });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  submitFilter = e => {
    this.props.updateFilter();
  };
}

export default TopicBar;
