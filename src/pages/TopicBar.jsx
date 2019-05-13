import React, { Component } from "react";
import { getTopics } from "../components/api";

class TopicBar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="filter">
        <span>Filter topics</span>
        <div>All</div>
        {this.state.topics.map(topic => {
          return (
            <div key={`${topic.slug}`} value={`${topic.slug}`}>
              {`${topic.slug}`}
            </div>
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
    console.log(e);
    this.props.updateFilter();
  };
}

export default TopicBar;
