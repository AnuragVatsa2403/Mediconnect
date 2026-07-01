import React, { useState, useEffect } from 'react';
import api from '../utils/axios';
import Header from './Header';
import Banner from './Banner';

const VideoConsult = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await api.get('/doctors');
        setDoctors(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  const handleVideoCall = (doctorName) => {
    alert(`Video call with ${doctorName} - feature launching soon!`);
  };

  return (
    <div>
      <Header />
      <Banner/>
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Doctors Available</h2>
        
        <div className="grid grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div key={doctor._id} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-gray-800 text-lg">{doctor.name}</h3>
              <p className="text-blue-600 text-sm mb-1">{doctor.specialization}</p>
              <p className="text-gray-500 text-sm mb-4">📍 {doctor.location}</p>
              <button 
                onClick={() => handleVideoCall(doctor.name)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm font-medium"
              >
                🎥 Start Video Call
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoConsult;