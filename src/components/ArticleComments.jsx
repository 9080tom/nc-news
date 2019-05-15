import React, { Component } from "react";
import { getArticleComments } from "../components/api";
import { time_elapsed_string } from "../components/timeAgo";
import PageChanger from "./PageChanger";
import { Voter } from "../components/voter";

class ArticleComments extends Component {
  state = {
    comments: [],
    p: 1,
    votes: []
  };
  render() {
    if (this.state.comments.length === 0) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          {this.state.comments.map(comment => {
            return (
              <div id="comment" key={comment.comment_id} className="boxed">
                <div>
                  {" "}
                  <h1>{comment.title}</h1>
                  <span>author : {comment.author}</span>
                  <p> {comment.body}</p>
                  <span> votes : {comment.votes}</span>
                  <span>
                    {" "}
                    created : {time_elapsed_string(comment.created_at)}
                  </span>
                </div>
                {/* <Voter
                  stateVotes={this.state.article.votes}
                  votes={this.state.votes}
                  handleVote={this.handleVote}
                /> */}
              </div>
            );
          })}
          <PageChanger
            p={this.state.p}
            changePage={this.changePage}
            total={this.props.total_count}
          />
        </div>
      );
    }
  }

  componentDidMount() {
    this.getComments();
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState.p !== this.state.p) {
      this.getComments(this.state.p);
    }
  }
  getComments = p => {
    getArticleComments(this.props.article_id, { p })
      .then(comments => {
        if (this.state.votes.length === 0) {
          // const votes = new Array(comments.length);
          // votes.map(() => 0);
        }
        this.setState({ comments, votes: [] });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  changePage = (number, type) => {
    if (type === "replace") {
      this.setState(() => {
        return { p: number };
      });
    } else {
      this.setState(prevState => {
        return { p: prevState.p + number };
      });
    }
  };
}
export default ArticleComments;
