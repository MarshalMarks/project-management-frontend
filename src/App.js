import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import NoPage from './components/NoPage';

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/*" element={<NoPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
