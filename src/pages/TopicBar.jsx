import React, { Component } from "react";
import { getTopics } from "../components/api";

class TopicBar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="filter">
        <span>Topics</span>
        <div>All</div>
        {this.state.topics.map(topic => {
          return (
            <div
              key={this.ucfirst(topic.slug)}
              value={this.ucfirst(topic.slug)}
            >
              {this.ucfirst(topic.slug)}
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
  ucfirst = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
}

export default TopicBar;
