import React, { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const fetchArticles = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=tesla&from=2023-03-25&sortBy=publishedAt&apiKey=7ead039bc8d14cc3a6dba531223bb86a"
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
      <h1>News Headlines</h1>
      <div className="scrollable-div">
      {articles.map((article) => (
        <div className=" news-block " key={article.url}>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <a href={article.url}>Read more </a>
        </div>
      ))}</div> 
    </div>
  );
};

export default News;
