import React from 'react';
import { Outlet } from 'react-router-dom'; // 1. Import Outlet
import Navbar from './NavBar';

function Layout() {
  return (
    <div>
      <Navbar /> {/* This UI is shared / persistent */}
      <main style={{ padding: '20px' }}>
        {/* 2. Child routes will be rendered here */}
        <Outlet />
      </main>
      {/* We could also add a persistent <Footer /> here */}
    </div>
  );
}

export default Layout;

