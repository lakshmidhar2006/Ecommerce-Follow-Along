import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/signup/Signup';
import { LoginPage } from './routes/Routes'; 

function App() {
  return (
    <>
      <Routes>
       
        <Route path="/signup" element={<Signup />} />

     
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
