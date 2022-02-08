import React, { useState, useEffect } from "react";
import NewsItems from "../../components/NewsItems";
import Axios from "axios";

const Entertainment = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const API_KEY = process.env.REACT_APP_News_API_KEY;
      const res = await Axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=${API_KEY}`
      );

      setArticles(res.data.articles);
      console.log(res);
    };
    getArticles();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Entertainment</h2>
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

export default Entertainment;
