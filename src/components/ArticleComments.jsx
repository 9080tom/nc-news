import React, { Component } from "react";
import { getArticleComments } from "../components/api";

class ArticleComments extends Component {
  state = {
    comments: []
  };
  render() {
    if (this.state.comments.length === 0) {
      return <div>Loading....</div>;
    } else {
      return this.state.comments.map(comment => {
        return (
          <div id="comment" key={comment.comment_id} className="boxed">
            <h1>{comment.title}</h1>
            <span>author : {comment.author}</span>
            <p> {comment.body}</p>
            <span> votes : {comment.votes}</span>
            <span> created at : {comment.created_at}</span>
          </div>
        );
      });
    }
  }

  componentDidMount() {
    getArticleComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
}
export default ArticleComments;
