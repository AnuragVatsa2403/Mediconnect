import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import {AuthProvider, useAuth } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path= "/login" element={<login/>}/>
      </Routes>
      
    </AuthProvider>
  )
}

export default App

