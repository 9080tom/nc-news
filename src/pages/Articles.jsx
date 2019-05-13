import React, { Component } from "react";
import Article from "./Article";
import ArticleLinkBar from "../components/articleLinkBar";
import TopicBar from "./TopicBar";

import { getArticles } from "../components/api";

class Articles extends Component {
  state = {
    order: "comment_count",
    articles: [],
    topicsFilter: ""
  };
  render() {
    return (
      <div>
        <ArticleLinkBar /> <TopicBar />
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
      MostDiscussed: { sort_by: "comment_count" },
      Top: { sort_by: "votes" }
    };
    let query = page.top;
    if (this.props.sort !== undefined) {
      query = page[this.props.sort];
    }
    getArticles(query)
      .then(articles => {
        this.setState({ articles });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  updateFilter = filter => this.setState({ topicsFilter: filter });
}

export default Articles;
