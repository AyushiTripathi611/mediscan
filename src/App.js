// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { useState } from 'react';
// import './App.css';
// import Signup from './components/signup/signup';
// import Login from './components/login/login';
// import Home from './components/home/home';
// import ForgotPassword from './components/forgotpassword/forgotpassword';
// import Query from './components/query/query';

// function App(props) {
// return (
// <Router>
// {/* <ToggleButton/> */}
// <Routes>
// <Route exact path="/" element={<Login/>} />
// <Route exact path="/signup" element={<Signup/>} />
// <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
// <Route exact path="/home" element={<Home/>} />
// <Route exact path="/query" element={<Query/>} />


// </Routes>
// </Router>

// );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Query from './components/query/query';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={<Home/>} />
        <Route path="/query" component={<Query/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
