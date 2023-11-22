import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage';
import ProjectDashboard from './pages/ProjectDashboard';
import Profile from './pages/Profile';

function App() {
  const [user, setUser] = useState(null);

  // If the user is not logged in, redirect to login
  if(!user) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<Navigate to="/login"/>} />
        </Routes>
      </BrowserRouter>
    );
  }

  // If the user is logged in, show pages
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Navigate to="/"/>} />
        <Route path="/register" element={<Navigate to="/"/>} />
        <Route path="/user/:userId" element={<Profile/>} />
        <Route path="/project/:projectId" element={<ProjectDashboard/>} />
        <Route path="*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
