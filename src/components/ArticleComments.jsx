import React, { Component } from "react";
import { time_elapsed_string } from "../components/timeAgo";
import PageChanger from "./PageChanger";
import { Voter } from "../components/voter";
import { DeleteButton } from "./DeleteButton";
import { Link } from "@reach/router";

class ArticleComments extends Component {
  render() {
    if (this.props.comments.length === 0) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          {this.props.comments.map(comment => {
            return (
              <div id="comment" key={comment.comment_id} className="boxed">
                <div className="votePosition">
                  <Voter
                    loggedInUser={this.props.loggedInUser}
                    stateVotes={comment.votes}
                    id={comment.comment_id}
                    comment={true}
                  />

                  <div className="center">
                    {" "}
                    <h1>{comment.title}</h1>
                    <p> {comment.body}</p>
                    <span>
                      Author :{" "}
                      <Link to={`/users/${comment.author}`}>
                        {comment.author}
                      </Link>
                    </span>
                    <span>
                      Created : {time_elapsed_string(comment.created_at)}
                    </span>
                  </div>
                  <div className="butcent">
                    <DeleteButton
                      deleteButton={this.props.deleteButton}
                      loggedInUser={this.props.loggedInUser}
                      comment_id={comment.comment_id}
                      author={comment.author}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <PageChanger
            p={this.props.p}
            changePage={this.props.changePage}
            total={this.props.total_count}
          />
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.getComments(this.props.p);
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevProp.p !== this.props.p) {
      this.props.getComments(this.props.p);
    }
  }
}
export default ArticleComments;
