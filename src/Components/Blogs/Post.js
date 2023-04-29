import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
function BlogDetails() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    // fetch the XML data from the server using AJAX
    $.ajax({
      url: "/posts.xml?id="+{id}, // <-- add the id parameter
      dataType: "xml",
      success: (xml) => {
        // parse the XML data into a JavaScript object
        const post = $(xml)
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
          .get()[id-1]; // <-- get the first (and only) post
        setPost(post);
      },
      error: (xhr, status, error) => {
        console.error(error);
      },
    });
  }, []);
  

  return (
    <div className="blog-post">
      <h2 className="post-title">{post.title}</h2>
      <img src={post.img} alt="Image description" />
      <p className="post-description">{post.description}</p>
      <p className="post-summary">{post.summary}</p>
      <p className="post-date">{post.date}</p>
    </div>
  );
}

export default BlogDetails;
