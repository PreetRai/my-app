import React, {useState, useEffect} from "react";
import xml2js from "xml2js";
function Blog() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // fetch the XML data from the server
        fetch("/posts.xml")
            .then((response) => response.text())
            .then((xml) => {
                //       parse the XML data into a JavaScript object
                xml2js.parseString(xml, (err, result) => {
                    if (err) {
                        console.error(err);
                    } else {
                        //             extract the post titles           from the JavaScript object
                        console.log('Your xml file as string', result);
                        const post = result
                            .blog
                            .post
                            .map((post) => ({
                              title: post.title[0],
                              author: post.author[0], 
                              date: post.date[0]}));
                        setPosts(post);
                    }
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <div>
            <h1>Blog Posts</h1>
            <ol>
                {
                    posts.map((post) => (<li>{post.author+post.date}</li>))
                }
            </ol>
        </div>
    );
}
export default
Blog;
