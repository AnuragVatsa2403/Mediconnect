import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import {AuthProvider, useAuth } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FindDoctor from './pages/FindDoctor';
import VideoConsult from './pages/VideoConsult';
import BookAppointment from './pages/BookAppointment';
import DoctorDashboard from './pages/DoctorDashboard';
import ManageAvailability from './pages/ManageAvailability';
import MyAppointments from './pages/MyAppointments';
import Medicines from './pages/Medicines';
import LabTests from './pages/LabTests';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/find-doctors' element={<FindDoctor/>}/>
        <Route path='/video-consult' element={<VideoConsult/>}/>
        <Route path='/book-appointment' element={<BookAppointment/>}/>
        <Route path= '/doctor-dashboard' element= {<DoctorDashboard/>}/>
        <Route path='/my-appointments' element= {<MyAppointments/>}/>
        <Route path="/doctor/availability" element={<ManageAvailability />} />
        <Route path= "/medicines" element={<Medicines/>}/>
        <Route path='/lab-tests' element= {<LabTests/>}/>
        <Route path='/video-consult' element= {<VideoConsult/>}/>
      </Routes>
      
    </AuthProvider>
  )
}

export default App

