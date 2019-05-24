import React, { Component } from "react";
import {
  getArticle,
  deleteComment,
  getArticleComments,
  deleteArticle
} from "../components/api";
import ArticleComments from "../components/ArticleComments";
import Comment from "../components/Comment";
import { time_elapsed_string } from "../components/timeAgo";
import { Voter } from "../components/voter";
import { navigate, Link } from "@reach/router";
import { ucFirst } from "../components/ucFirst";
import SubHeader from "./SubHeader";
import { DeleteButton } from "../components/DeleteButton";

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
          <div className="centerArticles">
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
                    Created by{" "}
                    <Link to={`/users/${this.state.article.author}`}>
                      {this.state.article.author}
                    </Link>{" "}
                  </span>
                  <span>
                    {" "}
                    {time_elapsed_string(this.state.article.created_at)}
                  </span>
                  <span>
                    {" "}
                    | Topic :
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
                  <h3> Comment count : {this.state.article.comment_count}</h3>
                  <DeleteButton
                    deleteButton={this.deleteButtonA}
                    loggedInUser={this.props.loggedInUser}
                    comment_id={this.state.article.article_id}
                    author={this.state.article.author}
                  />
                </div>
              </div>
            </div>
            <Comment
              addComment={this.addComment}
              comments={this.state.comments}
              deleteButton={this.deleteButtonC}
              loggedInUser={this.props.loggedInUser}
              article_id={this.state.article.article_id}
            />
            <ArticleComments
              getComments={this.getComments}
              comments={this.state.comments}
              p={this.state.p}
              changePage={this.changePage}
              deleteButton={this.deleteButtonC}
              loggedInUser={this.props.loggedInUser}
              total_count={this.state.article.comment_count}
              article_id={this.state.article.article_id}
            />
          </div>
        </div>
      );
    }
  }
  deleteButtonC = id => {
    deleteComment(id).then(() => this.getComments());
    this.setState(prevState => {
      return {
        article: {
          ...prevState.article,
          comment_count: +prevState.article.comment_count - 1
        }
      };
    });
  };
  deleteButtonA = id => {
    deleteArticle(id).then(() => {
      navigate(`/users/${this.props.loggedInUser}`);
    });
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
