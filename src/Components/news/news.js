import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=4526afe472904f1abe8d089ae36a331d"
    );
    setArticles(response.data.articles);
  };

  useEffect(() => {
    fetchArticles();
    const interval = setInterval(() => {
      fetchArticles();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="news">
      <h2>News Headlines</h2>
      <div className="scroll" style={{ overflowY: "scroll", height: "400px" }}>
        {articles.map((article) => (
          <div className="article" key={article.url}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <a href={article.url} className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
