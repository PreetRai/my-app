import React, {useState, useEffect} from "react";
import xml2js from "xml2js";
function Post({ match }) {
  const postId = match.params.id;
  const [post, setPost] = useState(null);

  useEffect(() => {
      fetch(`/post/${1}.xml`)
          .then((response) => response.text())
          .then((xml) => {
              xml2js.parseString(xml, (err, result) => {
                  if (err) {
                      console.error(err);
                  } else {
                      const post = result.blog.post[0];
                      setPost({
                          id: post.id[0],
                          title: post.title[0],
                          author: post.author[0],
                          content: post.content[0].text,
                          summary: post.summary[0].text,
                          img: post.summary[0].image_path,
                          date: post.date[0]
                      });
                  }
              });
          })
          .catch((err) => {
              console.error(err);
          });
  }, [postId]);

  if (!post) {
      return <div>Loading...</div>;
  }

  return (
      <main>
          <h1>{post.title}</h1>
          <p>By {post.author}</p>
          <img src={post.img} alt={post.title} />
          <p>{post.content}</p>
      </main>
  );
}
export default Post;