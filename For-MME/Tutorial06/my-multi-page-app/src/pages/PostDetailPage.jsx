import React from 'react';
import { useParams, Link } from 'react-router-dom'; // 1. Import useParams
import { posts } from '../data/posts';

function PostDetailPage() {
  // 2. Call the hook to get URL parameters
  const { postId } = useParams(); // Returns an object, e.g., { postId: "1" }
                                 // The key 'postId' MUST match the route path ":postId"
  // 3. Find the post in our data
  //    NOTE: URL params are *always strings*! We must convert our ID.
  const post = posts.find(p => p.id.toString() === postId);

  // 4. Handle cases where the post doesn't exist
  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <Link to="/posts">Back to all posts</Link>
      </div>
    );
  }
  // 5. Render the found post
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <hr />
      <Link to="/posts">Back to all posts</Link>
    </div>
  );
}

export default PostDetailPage;

