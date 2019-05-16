import React, { Component } from "react";
import Article from "./Article";
import ArticleLinkBar from "../components/articleLinkBar";
import TopicBar from "./TopicBar";
import { getArticles } from "../components/api";
import PageChanger from "../components/PageChanger";
import { navigate } from "@reach/router";

class Articles extends Component {
  state = {
    order: "comment_count",
    articles: [],
    p: 1,
    total: 0
  };
  render() {
    const { articles, p } = this.state;
    return (
      <div className={this.props.topic}>
        <span className="filters">
          <ArticleLinkBar /> <TopicBar />
        </span>

        {articles.map(article => {
          return <Article key={article.article_id} article={article} />;
        })}
        <PageChanger
          p={p}
          changePage={this.changePage}
          total={this.state.total}
        />
      </div>
    );
  }
  componentDidUpdate(prevProp, prevState) {
    if (prevState.p !== this.state.p) this.callApi();
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
    if (this.props.username) {
      query.author = this.props.username;
    }
    query.p = this.state.p;

    getArticles(query)
      .then(articles => {
        this.setState({
          articles: articles.articles,
          total: articles.total_count
        });
      })
      .catch(({ response: { data, status } }) => {
        navigate("/notFound", {
          state: { data, from: "article", status },
          replace: true
        });
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
}

export default Articles;
