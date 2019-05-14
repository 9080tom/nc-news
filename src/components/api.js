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

export const getArticleComments = id => {
  return axios
    .get(url + `articles/${id}/comments`)
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
//
