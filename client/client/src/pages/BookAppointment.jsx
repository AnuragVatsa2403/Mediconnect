import React, {useState, useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from './Header';
import api from '../utils/axios';
import Footer from './Footer';


const BookAppointment = () => {
    const {doctorId}= useParams();

    const [slots, setSlots]= useState([]);
    const [loading, setLoading]= useState(false);
    const[selectedSlot, setSelectedSlot]= useState('');

    useEffect(()=>{
        const fetchSlots= async()=>{
            setLoading(true);

            try{
                const {data}= await api.get(`/doctor/${doctorId}`);
                setSlots(data.availableSlots);
            } catch(err){
                console.error(err);
            } finally{
                setLoading(false);
            }
        };
        fetchSlots();
    }, [doctorId]);

    const handleConfirm = async () => {
    if (!user) {
        navigate('/login');
        return;
    } try{
        const {data}= await api.post('/appointments', { doctorId, slot: selectedSlot })
        navigate('/dashboard');      
    } catch(err){
          console.error(err);

    }
}




  return (
    <div>
        <Header/>
        <h2 className='font-bold text-gray-800 text-lg'>Available Slots</h2>
        {slots.map((slot)=>(
           <button key={slot} onClick={() => setSelectedSlot(slot)} className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm font-medium">
    {slot}
    </button>
    
        ))}
        {selectedSlot && (
            <button onClick={handleConfirm} className='block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm font-medium'>
                Confirm Booking for {selectedSlot}
            </button>
            )}
            <Footer/>



      
    </div>
  )
}

export default BookAppointment
