import React, { Component } from "react";
import { postComment } from "./api";
import { Link } from "@reach/router";

class Comment extends Component {
  state = {
    textbox: "",
    error: false
  };
  render() {
    return (
      <div>
        <div className="boxedCom">
          <form id="form" onSubmit={this.onSubmit}>
            <textarea
              className="commentBox"
              placeholder="add a public comment..."
              onChange={this.updateText}
              value={this.state.textbox}
              required
            />

            <div className="butcent2">
              <button id="button-dark">Submit</button>
            </div>
          </form>
          {this.state.error === true && (
            <span className="error">
              you must be <Link to="/login">logged in </Link>to comment!
            </span>
          )}
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
        this.props.addComment(comment);
        this.setState({ textbox: "" });
      })
      .catch(err => {
        this.setState({ error: true, addedComments: [] });
      });
  };
  updateText = e => this.setState({ textbox: e.target.value });
}

export default Comment;
