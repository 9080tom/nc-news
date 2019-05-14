import React, { Component } from "react";
import Article from "./Article";
import ArticleLinkBar from "../components/articleLinkBar";
import TopicBar from "./TopicBar";

import { getArticles } from "../components/api";

class Articles extends Component {
  state = {
    order: "comment_count",
    articles: []
  };
  render() {
    return (
      <div className={this.props.topic}>
        <span className="filters">
          <ArticleLinkBar /> <TopicBar />
        </span>
        {this.state.articles.map(article => {
          return <Article key={article.article_id} article={article} />;
        })}
      </div>
    );
  }
  componentDidUpdate(prevProp) {
    if (prevProp !== this.props) this.callApi();
  }
  componentDidMount() {
    this.callApi();
  }
  callApi = () => {
    const page = {
      new: { sort_by: "created_at" },
      mostDiscussed: { sort_by: "comment_count" },
      top: { sort_by: "votes" }
    };
    let query = page.top;
    if (this.props.sort !== undefined) {
      query = page[this.props.sort];
    }
    if (this.props.topic) {
      query.topic = this.props.topic;
    }
    getArticles(query)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export default Articles;
