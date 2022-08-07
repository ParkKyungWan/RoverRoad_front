import React from 'react';
import './App.css';



//router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Hero from './pages/login/Hero/Hero';
import Login from './pages/login/Login/Login';
import Register from 'pages/login/Register/Register';
import Journal from 'pages/journal/Journal';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Hero />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/register" element={<Register />}/>
            <Route exact path="/journal" element={<Journal />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
