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
import { navigate } from "@reach/router";

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
              loggedInUser={this.props.loggedInUser}
            />
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
