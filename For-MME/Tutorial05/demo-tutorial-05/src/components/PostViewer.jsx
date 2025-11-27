/*
 * Mini-Project: Blog Post Viewer
 * This component fetches and displays a list of posts
 * from the JSONPlaceholder API, handling loading
 * and error states.
 */
import React, { useState, useEffect } from 'react';

function PostViewer() {
  // Step 1: Set up the three states
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Step 2: Set up the effect
  useEffect(() => {
    // Step 3: Define the async data-fetching function
    const fetchPosts = async () => {
      try {
        // Step 4: Make the API call
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Step 5: Check for HTTP errors (the "fetch gotcha")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Step 6: Parse the response
        const data = await response.json();

        // Step 7: Update state on success
        setPosts(data);
      } catch (e) {
        // Step 8: Update state on error
        setError(e.message);
      } finally {
        // Step 9: Always update loading state
        setIsLoading(false);
      }
    };

    // Step 10: Call the function
    fetchPosts();
  },); // Empty dependency array means this runs ONCE on mount

  // Step 11: Conditional rendering (Loading state)
  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  // Step 12: Conditional rendering (Error state)
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Step 13: Conditional rendering (Success state)
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostViewer;


