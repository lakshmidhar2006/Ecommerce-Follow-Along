import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {LoginPage} from './routes/Routes'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage/>} />

      
    </Routes>
     
    </>
  )
}

export default App
