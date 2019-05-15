import React, { Component } from "react";
import { getArticle } from "../components/api";
import ArticleComments from "../components/ArticleComments";
import Comment from "../components/Comment";
import { time_elapsed_string } from "../components/timeAgo";
import { patchArticle } from "../components/api";

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
              votes : {this.state.article.votes + this.state.votes}
              <button
                disabled={this.state.votes === 1}
                onClick={() => this.handleVote(1)}
              >
                like
              </button>
              <button
                disabled={this.state.votes === -1}
                onClick={() => this.handleVote(-1)}
              >
                dislike
              </button>
            </span>
            <span>
              {" "}
              created : {time_elapsed_string(this.state.article.created_at)}
            </span>
            <h3> comment count : {this.state.article.comment_count}</h3>
          </div>
          <Comment
            loggedInUser={this.props.loggedInUser}
            article_id={this.state.article.article_id}
          />
          <ArticleComments article_id={this.state.article.article_id} />
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
