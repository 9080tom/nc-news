import React, { Component } from "react";
import Article from "./Article";
import ArticleLinkBar from "../components/articleLinkBar";
import TopicBar from "./TopicBar";

import { getArticles } from "../components/api";

class Users extends Component {
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
    getArticles({ author: this.props.username })
      .then(articles => {
        this.setState({ articles });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export default Users;
