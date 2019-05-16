import React, { Component } from "react";
import { patchArticle, patchComment } from "../components/api";
import { Link } from "@reach/router";

export class Voter extends Component {
  state = {
    votes: 0,
    error: false
  };
  render() {
    return (
      <span>
        {" "}
        <button
          disabled={this.state.votes === 1}
          onClick={() => this.handleVote(1)}
        >
          like
        </button>
        <p>votes : {this.state.votes + this.props.stateVotes} </p>
        <button
          disabled={this.state.votes === -1}
          onClick={() => this.handleVote(-1)}
        >
          dislike
        </button>
        {this.state.error === true && (
          <div className="error">
            you must be <Link to="/login">loged in </Link>to vote!
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
        });
      } else {
        patchComment(this.props.id, { inc_votes: direction }).catch(err => {
          console.log(err);
        });
        this.setState(prevState => {
          return {
            votes: prevState.votes + direction
          };
        });
      }
    } else {
      this.setState({
        error: true
      });
    }
  };
}
