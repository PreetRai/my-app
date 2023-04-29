
import React from 'react';
function BlogPosts(props) {
    return (<div class="blog-post">
    <h2 class="post-title">Title</h2>
    <img src="image.jpg" alt="Image description"/>
    <p class="post-description">Description</p>
    <p class="post-summary">Summary</p>
    <p class="post-date">Date</p>
  </div>
    );
}

export default BlogPosts;