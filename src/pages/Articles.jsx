import React, { Component } from "react";
import Article from "./Article";
import ArticleLinkBar from "../components/articleLinkBar";
import { getArticles } from "../components/api";

class Articles extends Component {
  state = {
    order: "comment_count",
    articles: []
  };
  render() {
    return (
      <div>
        <ArticleLinkBar />
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
  callApi() {
    const page = {
      new: { sort_by: "created_at" },
      MostDiscussed: { sort_by: "created_at" }
    };
    let query = "";
    if (this.props.sort === undefined) {
      query = undefined;
    } else {
      query = page[this.props.sort];
    }

    getArticles(query)
      .then(articles => {
        console.log(articles);
        this.setState({ articles });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
}

export default Articles;
