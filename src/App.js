import './App.css';
//import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NoPage from './pages/NoPage';
import ProjectDashboard from './pages/ProjectDashboard';
import Profile from './pages/Profile';

function App() {
  //const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/user" element={<Profile/>} />
        <Route path="/project" element={<ProjectDashboard/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
