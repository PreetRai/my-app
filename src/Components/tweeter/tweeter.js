import React, { useState, useEffect } from "react";
import axios from "axios";

const TwitterFeed = () => {
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const response = await axios.get(
      "https://api.twitter.com/2/tweets/search/stream?tweet.fields=text&expansions=author_id&user.fields=username&max_results=5",
      {
        headers: {
          Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAHF6mwEAAAAAoEvKFmmfiYrVupqXiqA41WFn74E%3D1A1R8WAxNWY65IFoUgi854UUwCsthung2Kcz7sQYu6xgleVMmy`,
        },
      }
    );
    setTweets(response.data.data);
  };

  useEffect(() => {
    fetchTweets();
    const interval = setInterval(() => {
      fetchTweets();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {tweets.map((tweet) => (
        <div key={tweet.id}>
          <h3>{tweet.text}</h3>
          <p>By {tweet.author_id}</p>
        </div>
      ))}
    </div>
  );
};

export default TwitterFeed;