

import '../components/Sidebar.css';
import React, { useState } from 'react';

const Sidebar = () => {
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const toggleNav = () => {
    setSidebarWidth(sidebarWidth === 250 ? 0 : 250);
  };

  return (
    <div>
      <div id="mySidepanel" style={{ width: `${sidebarWidth}px` }} className="sidepanel">
        <a href="javascript:void(0)" className="closebtn" onClick={toggleNav}>&times;</a>
        <a href="/seller/dashboard">Dashboard</a>
        <a href="/seller/products">Product</a>
        <a href="/seller/orders">Order</a>
        <a href="/seller/profile">Profile</a>
        <a href="/seller/notifications">Notification</a>

      </div>

      <button className="openbtn" onClick={toggleNav}>&#9776;</button>
    </div>
  );
};

export default Sidebar;

