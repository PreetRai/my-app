import React from 'react';
function BlogPosts(props) {
    return (
    <div className='Heading'>
        <div className="blog-post">
            <div className="blog-post-summary">
                <img src={props.img} alt="blog post summary"/>
                <div className="Blog-post-details">
                    <div className='Blog-post-title'>
                        <a href={"/post"}>
                            <h1>{props.id}. {props.title} <small>
                                    @ {
                                        props.author
                                            ? props.author
                                            : 'user'
                                    } {props.date}</small>
                            </h1>
                        </a>
                    </div>
                    <p>{props.summary}</p>
                </div>

            </div>
        </div></div>
    );
}

export default BlogPosts;