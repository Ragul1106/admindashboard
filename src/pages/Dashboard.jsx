import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData } from '../data/chartData';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h4>Analytics Overview</h4>
      <div className="card p-3 mb-4 shadow">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="users" stroke="#007bff" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <h4 className="mt-5">User Table</h4>
      <table className="table table-striped table-bordered shadow">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>John Doe</td><td>john@example.com</td><td>Admin</td></tr>
          <tr><td>Jane Smith</td><td>jane@example.com</td><td>Editor</td></tr>
          <tr><td>Bob Lee</td><td>bob@example.com</td><td>Viewer</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
