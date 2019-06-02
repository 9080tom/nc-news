import React, { Component } from "react";
import { getTopics, postArticle } from "../components/api";
import { ucFirst } from "../components/ucFirst";
import SubHeader from "./SubHeader";
import { lcFirst } from "../components/lcFirst";
import { navigate } from "@reach/router";

export default class CreateArticle extends Component {
  state = {
    Title: "",
    Description: "",
    Topic: "coding",
    topics: "loading"
  };
  render() {
    return (
      <div className="centerArticles">
        <SubHeader />
        <div className="boxed">
          <h3 id="form">Create an article</h3>
        </div>
        <div className="boxed">
          <br />
          <div className="centerArticles">
            <form onSubmit={this.addArticle} className="createArticle">
              <label className="input-label3">
                {" "}
                Topics
                <select
                  required
                  onChange={e => {
                    this.updateTopic(lcFirst(e.target.value));
                  }}
                >
                  {" "}
                  {this.state.topics === "loading" ? (
                    <option>loading</option>
                  ) : (
                    this.state.topics.map(topic => {
                      return (
                        <option key={topic.slug}>{ucFirst(topic.slug)}</option>
                      );
                    })
                  )}
                </select>
              </label>
              <br />
              <label className="input-label2">
                Title{" "}
                <input
                  className="form-input"
                  required
                  onChange={e => {
                    this.updateTitle(e.target.value);
                  }}
                />
              </label>
              <br />
              <label className="input-label">
                Description{" "}
                <textarea
                  id="new-article-post-text-area"
                  required
                  onChange={e => {
                    this.updateDescription(e.target.value);
                  }}
                />
              </label>
              <button id="button-dark" className="relative">
                Submit Article
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    getTopics()
      .then(({ data }) => {
        this.setState({ topics: data.topics });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  addArticle = event => {
    event.preventDefault();
    const body = {
      title: this.state.Title,
      body: this.state.Description,
      topic: this.state.Topic,
      username: this.props.loggedInUser
    };
    postArticle(body).then(body => {
      navigate(`/articles/${body.article_id}`);
    });
  };

  updateTitle = input => {
    this.setState({ Title: input });
  };
  updateDescription = input => {
    this.setState({ Description: input });
  };
  updateTopic = input => {
    this.setState({ Topic: input });
  };
}

//Joe Kempster outplays messi in rocket league and takes his title
