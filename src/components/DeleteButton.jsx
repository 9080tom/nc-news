import React, { Component } from "react";

export default class DeleteButton extends Component {
  render() {
    console.log(this.props.author, this.props.loggedInUser);

    if (this.props.author === this.props.loggedInUser)
      return (
        <button onClick={() => this.props.deleteButton(this.props.comment_id)}>
          Delete your comment
        </button>
      );
    return null;
  }
}
