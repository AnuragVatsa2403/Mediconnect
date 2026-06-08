import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import {AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';


const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      
    </AuthProvider>
  )
}

export default App

