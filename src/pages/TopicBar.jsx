import React, { Component } from "react";
import axios from "axios";

class TopicBar extends Component {
  state = {
    topics: ""
  };
  render() {
    return (
      <div>
        <div>options from backend</div>
        <select>
          <option value="volvo">mitch</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get("https://quiet-wave-80549.herokuapp.com/api/topics")
      .then(({ data }) => {
        console.log(data);
        this.setState({ topics: data.students });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
}

export default TopicBar;
