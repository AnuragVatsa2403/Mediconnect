import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import {AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';


const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      
    </AuthProvider>
  )
}

export default App

