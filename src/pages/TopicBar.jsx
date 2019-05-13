import React, { Component } from "react";
import { getTopics } from "../components/api";

class TopicBar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div>
        <span>Filter topics</span>
        <select>
          <option>All</option>
          {this.state.topics.map(topic => {
            return (
              <option key={`${topic.slug}`} value={`${topic.slug}`}>
                {`${topic.slug}`}
              </option>
            );
          })}
        </select>
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
}

export default TopicBar;
