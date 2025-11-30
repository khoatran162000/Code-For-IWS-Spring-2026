import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts'; // Import mock data

function PostsListPage() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {/* 4. Link to a dynamic path based on the post ID */}
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsListPage;

