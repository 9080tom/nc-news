import React, { Component } from "react";
import { postComment } from "./api";

class Comment extends Component {
  state = {
    textbox: ""
  };
  render() {
    return (
      <div>
        <form className="boxed" id="form" onSubmit={this.onSubmit}>
          <textarea
            className="commentBox"
            placeholder="add a public comment..."
            onChange={this.updateText}
          />
          <button className="commentBox">Submit</button>
        </form>
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
      .catch(err => console.log(err));
  };
  updateText = e => this.setState({ textbox: e.target.value });
}

export default Comment;
