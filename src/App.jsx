import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <div style={{ width: '250px' }}>
          <Sidebar />
        </div>
        <div className="flex-grow-1 bg-light">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
