import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/signup/Signup';
import { LoginPage,Home } from './routes/Routes'; 

function App() {
  return (
    <>
      <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup />} />

     
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
