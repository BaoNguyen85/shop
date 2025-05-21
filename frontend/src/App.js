import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Messages from './page/Messages';
import Setting from './page/Setting';
import Media from './page/Media';
import Friends from './page/Friends';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/media" element={<Media />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </Router>
  );
}

export default App;
