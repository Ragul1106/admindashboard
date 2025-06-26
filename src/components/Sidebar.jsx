import React from 'react';

const Sidebar = () => (
  <div className="bg-light p-3 vh-100">
    <h5 className="mb-4">Menu</h5>
    <ul className="nav flex-column">
      <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Analytics</a></li>
      <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
    </ul>
  </div>
);

export default Sidebar;
