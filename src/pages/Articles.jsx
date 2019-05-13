import React, { Component } from "react";
import Article from "./Article";
import axios from "axios";
import { Link } from "@reach/router";

class Articles extends Component {
  state = {
    order: "comment_count"
  };
  render() {
    return (
      <div>
        <div>Sort By</div>
        <Link to="/">Top</Link> | <Link to="/new">new</Link> |{" "}
        <Link to="/MostDiscussed">Most Discussed</Link>
        <Article />
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(
        `https://quiet-wave-80549.herokuapp.com/api/articles?sort_by=${
          this.state.order
        }`
      )
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

export default Articles;

// class TopicBar extends Component {
//   state = {
//     topics: []
//   };
//   render() {
//     return (
//       <div>
//         <select>
//           <option>Home</option>
//           {this.state.topics.map(topic => {
//             return (
//               <option key={`${topic.slug}`} value={`${topic.slug}`}>
//                 {`${topic.slug}`}
//               </option>
//             );
//           })}
//         </select>
//       </div>
//     );
//   }
// }
