import React, { useState, useEffect } from "react";
import NewsItems from "./NewsItems";
import Axios from "axios";

const NewsList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ec785df90f2445b0a127ff35b7d73d28"
      );

      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);

  return (
    <div>
      <h1>Business News</h1>
      {articles.map(({ title, description, url, urlToImage }) => (
        <NewsItems
          title={title}
          description={description}
          url={url}
          urlToImage={urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsList;
