import React, { Component } from "react";
import axios from "axios";

class TopicBar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div>
        <select>
          <option>Home</option>
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
    axios
      .get("https://quiet-wave-80549.herokuapp.com/api/topics")
      .then(({ data }) => {
        console.log(data);
        this.setState({ topics: data.topics });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
}

export default TopicBar;
