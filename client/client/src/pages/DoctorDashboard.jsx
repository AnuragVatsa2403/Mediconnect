import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import Header from './Header'
import api from '../utils/axios';

const DoctorDashboard = () => {
    const {user}= useAuth();
    const [appointments, setAppointments]= useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchIncomingAppointments= async()=>{
            try{
                const {data}= await api.get('/appointments/doctor');
                setAppointments(data);
            } catch(err){
                console.log(err);
            } finally{
                setLoading(false);
            }
        }
        fetchIncomingAppointments();

    },[])

    const handleStatusUpdate = async (id, status) => {
    try {
        await api.put(`/appointments/${id}/status`, { status });
        setAppointments(appointments.map(appt => 
            appt._id === id ? {...appt, status} : appt
        ));
    } catch (err) {
        console.error(err);
    }
}


  return (
    <div>
        <Header/>
        <div className='max-w-7xl mx-auto px-8 py-12'>
            <h2 className= 'text-2xl font-bold text-gray-800 mb-8'>Incoming Appointments</h2>
            <div className='grid grid-cols-2 gap-6'>
                 {appointments.map((appt) => (
      <div key={appt._id} className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold text-gray-800">{appt.patient.name}</h3>
        <p className="text-gray-500 text-sm mb-2">🕐 {appt.slot}</p>
        <span className={`text-xs px-2 py-1 rounded-full ${
          appt.status === 'confirmed' ? 'bg-green-100 text-green-600' :
          appt.status === 'cancelled' ? 'bg-red-100 text-red-600' :
          'bg-yellow-100 text-yellow-600'
        }`}>
          {appt.status}
        </span>
        {appt.status === 'pending' && (
          <div className="flex gap-3 mt-4">
            <button 
              onClick={() => handleStatusUpdate(appt._id, 'confirmed')}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
            >
              Confirm
            </button>
            <button 
              onClick={() => handleStatusUpdate(appt._id, 'cancelled')}
              className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        )}

            </div>
            ))}
            </div>
            

        </div>
    </div>
  )
}

export default DoctorDashboard
