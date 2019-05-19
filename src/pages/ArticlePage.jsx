import React, { Component } from "react";
import {
  getArticle,
  deleteComment,
  getArticleComments
} from "../components/api";
import ArticleComments from "../components/ArticleComments";
import Comment from "../components/Comment";
import { time_elapsed_string } from "../components/timeAgo";
import { Voter } from "../components/voter";
import { navigate, Link } from "@reach/router";
import { ucFirst } from "../components/ucFirst";
import SubHeader from "./SubHeader";

class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    p: 1
  };
  render() {
    if (this.state.article.author === undefined) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className={this.state.article.topic}>
          <SubHeader
            topic={this.state.article.topic}
            author={this.state.article.username}
            callApi={this.callApi}
          />
          <div className="boxed">
            <div className="votePosition">
              <Voter
                id={this.props.article_id}
                stateVotes={this.state.article.votes}
                comment={false}
                loggedInUser={this.props.loggedInUser}
              />
              <div>
                {" "}
                <h1>{this.state.article.title}</h1>
                <span>
                  Author :{" "}
                  <Link to={`/users/${this.state.article.author}`}>
                    {this.state.article.author}
                  </Link>{" "}
                </span>
                <span>
                  {" "}
                  Topic :
                  <Link to={`/topic/${this.state.article.topic}`}>
                    {" "}
                    {ucFirst(this.state.article.topic)}
                  </Link>
                  <br />
                </span>
                <br />
                <span> {this.state.article.body}</span>
                <br />
                <br />
                <span>
                  {" "}
                  Created : {time_elapsed_string(this.state.article.created_at)}
                </span>
                <h3> Comment count : {this.state.article.comment_count}</h3>
              </div>
            </div>
          </div>
          <Comment
            addComment={this.addComment}
            comments={this.state.comments}
            deleteButton={this.deleteButton}
            loggedInUser={this.props.loggedInUser}
            article_id={this.state.article.article_id}
          />
          <ArticleComments
            getComments={this.getComments}
            comments={this.state.comments}
            p={this.state.p}
            changePage={this.changePage}
            deleteButton={this.deleteButton}
            loggedInUser={this.props.loggedInUser}
            total_count={this.state.article.comment_count}
            article_id={this.state.article.article_id}
          />
        </div>
      );
    }
  }
  deleteButton = id => {
    deleteComment(id).then(() => this.getComments());
    this.setState(prevState => {
      return {
        article: {
          ...prevState.article,
          comment_count: +prevState.article.comment_count - 1
        }
      };
    });
    /////////update the sate of article comments???
  };
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
  getComments = p => {
    getArticleComments(this.state.article.article_id, { p })
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
  addComment = comment => {
    this.setState(prevState => {
      return {
        comments: [comment, ...prevState.comments],
        article: {
          ...prevState.article,
          comment_count: +prevState.article.comment_count + 1
        }
      };
    });
  };
}
export default ArticlePage;
