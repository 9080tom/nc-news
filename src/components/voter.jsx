import React, { Component } from "react";
import { patchArticle, patchComment } from "./api";
import { Link } from "@reach/router";

export class Voter extends Component {
  state = {
    votes: 0,
    error: false,
    upClass: "triangle-up",
    downClass: "triangle-down"
  };
  render() {
    return (
      <span className="centerVotes">
        {" "}
        <div
          className={this.state.upClass}
          id="i"
          onClick={() =>
            this.state.upClass === "triangle-up" && this.handleVote(1)
          }
        />
        <div>{this.state.votes + this.props.stateVotes} </div>
        <div
          className={this.state.downClass}
          onClick={() =>
            this.state.downClass === "triangle-down" && this.handleVote(-1)
          }
        />
        {this.state.error === true && (
          <div className="error">
            you must be <Link to="/login">logged in </Link>to vote!
          </div>
        )}
      </span>
    );
  }
  handleVote = direction => {
    if (this.props.loggedInUser) {
      if (this.props.comment === false) {
        patchArticle(this.props.id, { inc_votes: direction }).catch(err => {
          console.log(err);
        });
        this.setState(prevState => {
          return {
            votes: prevState.votes + direction
          };
        }, this.handleVoteCallback);
      } else {
        patchComment(this.props.id, { inc_votes: direction }).catch(err => {
          console.log(err);
        });
        this.setState(prevState => {
          return {
            votes: prevState.votes + direction
          };
        }, this.handleVoteCallback);
      }
    } else {
      this.setState({
        error: true
      });
    }
  };
  handleVoteCallback = () => {
    if (this.state.votes === 1) {
      this.setState({ upClass: "triangle-up-clicked" });
    } else if (this.state.votes === -1) {
      this.setState({ downClass: "triangle-down-clicked" });
    } else {
      this.setState({
        downClass: "triangle-down",
        upClass: "triangle-up"
      });
    }
  };
}
