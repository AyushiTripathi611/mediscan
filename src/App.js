import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/home/home';
import Query from './components/query/query';
import NavbarComponent from './components/navbar/NavBar';
import Login from './components/loginAndSignup/LogIn&SignUp';

const App = () => {
  const [showLogin, setShowLogin] = useState(true)
  console.log("logged in state", setShowLogin)

  return (
    <>
    <NavbarComponent showLogin={showLogin} />
    <Router>
      <Routes>
        <Route path="login" element={<Login setShowLogin={setShowLogin} />} />
        {showLogin ? 
            <Route path="/" element={<Navigate to={"login"} />} /> :  
        <Route path="/" element={<Home/>} />}
        <Route path="query" element={<Query/>} />
      </Routes>
    </Router></>
  );
};

export default App;
