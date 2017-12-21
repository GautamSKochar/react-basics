import React from 'react';
import post from '../blogpost.json';

const BlogPost = () => (
    <div>
        {post.posts.map((post,i) => <div key={i}>{post.title}</div>)}
    </div>
)

export default BlogPost