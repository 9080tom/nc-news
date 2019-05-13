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
  return axios.get("https://quiet-wave-80549.herokuapp.com/api/topics");
};
