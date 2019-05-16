import React, { Component } from "react";
import { postComment } from "./api";
import { Link } from "@reach/router";
import { time_elapsed_string } from "../components/timeAgo";
import { Voter } from "../components/voter";

class Comment extends Component {
  state = {
    addedComments: [],
    textbox: "",
    error: false
  };
  render() {
    return (
      <div>
        <div className="boxed">
          <form id="form" onSubmit={this.onSubmit}>
            <textarea
              className="commentBox"
              placeholder="add a public comment..."
              onChange={this.updateText}
            />

            <button className="commentBox">Submit</button>
          </form>
          {this.state.error === true && (
            <span className="error">
              you must be <Link to="/login">loged in </Link>too comment!
            </span>
          )}
        </div>
        <div>
          {this.state.addedComments.map(comment => {
            return (
              <div id="comment" key={comment.comment_id} className="boxed">
                <div className="votePosition">
                  <Voter
                    stateVotes={comment.votes}
                    id={comment.comment_id}
                    comment={true}
                  />

                  <div className="center">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  onSubmit = e => {
    e.preventDefault();
    postComment(
      { username: this.props.loggedInUser, body: this.state.textbox },
      this.props.article_id
    )
      .then(comment => {
        this.setState(prevState => {
          return { addedComments: [comment, ...prevState.addedComments] };
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true, addedComments: [] });
      });
  };
  updateText = e => this.setState({ textbox: e.target.value });
}

export default Comment;
