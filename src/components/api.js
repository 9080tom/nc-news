import axios from "axios";

const url = "https://quiet-wave-80549.herokuapp.com/api/";

export const getArticles = query => {
  return axios
    .get(url + "articles", {
      params: query
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getTopics = () => {
  return axios.get(url + "topics");
};

export const getArticle = id => {
  return axios.get(url + `articles/${id}`).then(({ data: { article } }) => {
    return article;
  });
};

export const getArticleComments = (id, page) => {
  return axios
    .get(url + `articles/${id}/comments`, { params: page })
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getUser = username => {
  return axios.get(url + `users/${username}`).then(({ data: { user } }) => {
    console.log(user);
    return user;
  });
};

export const postComment = (body, article_id) => {
  console.log(body, article_id);
  return axios
    .post(url + `articles/${article_id}/comments`, body)
    .then(({ data: { comment } }) => {
      console.log(comment);
      return comment;
    });
};

export const patchArticle = (id, voteDirection) => {
  return axios
    .patch(url + `articles/${id}`, voteDirection)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const patchComment = (id, voteDirection) => {
  return axios
    .patch(url + `comments/${id}`, voteDirection)
    .then(({ data: { article } }) => {
      return article;
    });
};
