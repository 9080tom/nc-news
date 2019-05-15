import React, { Component } from "react";
import { getArticle } from "../components/api";
import ArticleComments from "../components/ArticleComments";
import Comment from "../components/Comment";
import { time_elapsed_string } from "../components/timeAgo";
import { patchArticle } from "../components/api";
import { Voter } from "../components/voter";

class ArticlePage extends Component {
  state = {
    article: {},
    votes: 0
  };
  render() {
    if (this.state.article.author === undefined) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className={this.state.article.topic}>
          {this.state.article.topic && <h3>{this.state.article.topic}</h3>}
          <div className="boxed">
            <div>
              {" "}
              <h1>{this.state.article.title}</h1>
              <span>author : {this.state.article.author}</span>
              <span> Topic : {this.state.article.topic}</span>
              <br />
              <br />
              <span> {this.state.article.body}</span>
              <br />
              <br />
              <span>
                {" "}
                created : {time_elapsed_string(this.state.article.created_at)}
              </span>
              <h3> comment count : {this.state.article.comment_count}</h3>
            </div>
            <Voter
              stateVotes={this.state.article.votes}
              votes={this.state.votes}
              handleVote={this.handleVote}
            />
          </div>
          <Comment
            loggedInUser={this.props.loggedInUser}
            article_id={this.state.article.article_id}
          />
          <ArticleComments
            total_count={this.state.article.comment_count}
            article_id={this.state.article.article_id}
          />
        </div>
      );
    }
  }

  componentDidMount() {
    getArticle(this.props.article_id)
      .then(article => {
        this.setState({ article });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  handleVote = direction => {
    patchArticle(this.props.article_id, { inc_votes: direction }).catch(err => {
      console.log(err);
    });
    this.setState(prevState => {
      return {
        votes: prevState.votes + direction
      };
    });
  };
}
export default ArticlePage;
