import React, { Component } from "react";
import { getArticleComments } from "../components/api";
import { time_elapsed_string } from "../components/timeAgo";
import PageChanger from "./PageChanger";
import { Voter } from "../components/voter";

class ArticleComments extends Component {
  state = {
    comments: [],
    p: 1
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
        this.setState({ comments });
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
