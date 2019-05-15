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
    );
  }
  onSubmit = e => {
    e.preventDefault();
    postComment(
      { username: this.props.loggedInUser, body: this.state.textbox },
      this.props.article_id
    )
      .then(body => {
        console.log(body);
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: true });
      });
  };
  updateText = e => this.setState({ textbox: e.target.value });
}

export default Comment;
