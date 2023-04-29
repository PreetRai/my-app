import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
function BlogDetails() {
  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    $.ajax({
      url: "/posts.xml",
      dataType: "xml",
      success: (xml) => {
        const post = $(xml)
          .find("post")
          .map(function () {
            return {
              id: $(this).find("id").text(),
              summary: $(this).find("summary text").text(),
              img: $(this).find("summary image_path").text(),
              title: $(this).find("title").text(),
              body: $(this).find("body").text(),
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
    <div className="Single-blog">
      <h2 className="spost-title">{post.title}</h2>
      <img className="simg"src={post.img} alt="Image description" />
      <p className="spost-description">{post.body}</p>
      <p className="spost-summary">{post.summary}</p>
      <p className="spost-date">{post.date}</p>
    </div>
  );
}

export default BlogDetails;
