import React, { useState, useEffect } from "react";
import BlogPosts from "./BlogPosts";
import $ from "jquery";

function BlogListParser() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch the XML data from the server using AJAX
    $.ajax({
      url: "/posts.xml",
      dataType: "xml",
      success: (xml) => {
        // parse the XML data into a JavaScript object
        const posts = $(xml)
          .find("post")
          .map(function () {
            return {
              id: $(this).find("id").text(),
              summary: $(this).find("summary text").text(),
              img: $(this).find("summary image_path").text(),
              title: $(this).find("title").text(),
              author: $(this).find("author").text(),
              date: $(this).find("date").text(),
            };
          })
          .get();
        setPosts(posts);
      },
      error: (xhr, status, error) => {
        console.error(error);
      },
    });
  }, []);

  return (
    <main>
      <h1>Blog Posts</h1>
      <ol>
        {posts.map((post) => (
          <BlogPosts
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            link={post.link}
            content={post.content}
            summary={post.summary}
            img={post.img}
            date={post.date}
          />
        ))}
      </ol>
    </main>
  );
}

export default BlogListParser;