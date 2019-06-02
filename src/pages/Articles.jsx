import React, { Component } from "react";
import Article from "./Article";
import { getArticles } from "../components/api";
import PageChanger from "../components/PageChanger";
import { navigate } from "@reach/router";
import SubHeader from "./SubHeader";

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
      <div>
        <SubHeader
          topic={this.props.topic}
          author={this.props.username}
          callApi={this.callApi}
        />
        {this.state.articles[0] === undefined ? (
          <div>Loading....</div>
        ) : (
          <div className="centerArticles">
            {articles.map(article => {
              return (
                <Article
                  loggedInUser={this.props.loggedInUser}
                  key={article.article_id}
                  article={article}
                />
              );
            })}
          </div>
        )}

        <PageChanger
          p={p}
          changePage={this.changePage}
          total={this.state.total}
        />
      </div>
    );
  }
  componentDidUpdate(prevProp, prevState) {
    // if (
    //   prevProp.topic !== this.props.topic ||
    //   prevProp.username !== this.props.username
    // ) {
    //   this.setState({ p: 1 });
    // }
    if (prevState.p !== this.state.p) this.callApi();
    if (prevProp !== this.props) this.callApi(1);
  }
  componentDidMount() {
    this.callApi();
  }

  callApi = (p = this.state.p) => {
    const page = {
      new: { sort_by: "created_at" },
      mostDiscussed: { sort_by: "comment_count" },
      top: { sort_by: "votes" }
    };
    let query = page.top;

    if (this.props.sort !== undefined) {
      if (Object.keys(page).includes(this.props.sort)) {
        query = page[this.props.sort];
      } else {
        navigate("/notFound", {
          state: {
            data: { msg: "Invalid sort" },
            from: "article",
            status: 404
          },
          replace: true
        });
      }
    }
    if (this.props.topic) {
      query.topic = this.props.topic;
    }
    if (this.props.username) {
      query.author = this.props.username;
    }

    query.p = p;

    getArticles(query)
      .then(articles => {
        this.setState({
          articles: articles.articles,
          total: articles.total_count,
          p: p
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
