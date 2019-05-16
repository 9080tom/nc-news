import React, { Component } from "react";
import { getArticle } from "../components/api";
import ArticleComments from "../components/ArticleComments";
import Comment from "../components/Comment";
import { time_elapsed_string } from "../components/timeAgo";
import { Voter } from "../components/voter";
import { navigate } from "@reach/router";

class ArticlePage extends Component {
  state = {
    article: {}
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
              id={this.props.article_id}
              stateVotes={this.state.article.votes}
              comment={false}
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
      .catch(({ response: { data, status } }) => {
        navigate("/notFound", {
          state: { data, from: "article", status },
          replace: true
        });
      });
  }
}
export default ArticlePage;
