import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // 1. Import Layout
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PostsListPage from './pages/PostsListPage';
import PostDetailPage from './pages/PostDetailPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} /> 
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* 2. Add route for the posts list */}
        <Route path="posts" element={<PostsListPage />} />
        
        {/* 3. Add DYNAMIC route for a single post */}
        <Route path="posts/:postId" element={<PostDetailPage />} />
      </Route>
      
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}


export default App;

