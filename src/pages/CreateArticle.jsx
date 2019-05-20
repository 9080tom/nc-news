import React, { Component } from "react";
import { getTopics, postArticle } from "../components/api";

export default class CreateArticle extends Component {
  state = {
    Title: "",
    Description: "",
    Topic: "coding",
    topics: "loading"
  };
  render() {
    return (
      <div>
        <h3>Create an article</h3>
        <form onSubmit={this.addArticle}>
          <select
            required
            onChange={e => {
              this.updateTopic(e.target.value);
            }}
          >
            {" "}
            {this.state.topics === "loading" ? (
              <option>loading</option>
            ) : (
              this.state.topics.map(topic => {
                return <option key={topic.slug}>{topic.slug}</option>;
              })
            )}
          </select>
          <label>
            Title
            <input
              required
              onChange={e => {
                this.updateTitle(e.target.value);
              }}
            />
          </label>
          <label>
            Description
            <textarea
              required
              onChange={e => {
                this.updateDescription(e.target.value);
              }}
            />
          </label>
          <button>Submit Article</button>
        </form>
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
    postArticle(body);
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
