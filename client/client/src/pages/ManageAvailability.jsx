import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Link } from 'react-router-dom'
import Header from './Header'
import api from '../utils/axios';
import { useState } from 'react';
import { useEffect } from 'react';

const ManageAvailability = () => {
    const {user}= useAuth();
    const [slots, setSlots]= useState([]);
    const [error, setError]= useState(null);
    const[loading, setLoading]= useState(true);
    const [newSlot, setNewSlot]= useState('');

    useEffect(()=>{
        const fetchAvailableSlots= async()=>{
            try{
                const {data}= await api.get(`/doctors/${user._id}`)
                setSlots(data.availableSlots);
            } catch(err){
                console.log(err);
            } finally{
                setLoading(false);

            }
        };
        fetchAvailableSlots();
    }, []);

    const handleAddSlot= async()=>{
           const updatedSlots = [...slots, newSlot];
        try{

            const {data}= await api.put('/doctors/availability', { availableSlots: updatedSlots });
            setSlots(data.availableSlots)
             setNewSlot('');
        } catch(err){
            console.log(err);
                       
        } finally{
            setLoading(false);

        }
    }

    const handleRemoveSlot= async(slotToRemove)=>{
        const updatedSlots = slots.filter(slot => slot !== slotToRemove);
        try{
            const {data}= await api.put('/doctors/availability', { availableSlots: updatedSlots });
            setSlots(data.availableSlots);

        } catch(err){
            console.log(err);
        } finally{
            setLoading(false);
        }


    }

  return (
    <div>
        <Header />
        <div className="max-w-2xl mx-auto px-8 py-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Manage Availability</h2>

        
            <div className="flex gap-3 mb-8">
                <input
                    value={newSlot}
                    onChange={(e) => setNewSlot(e.target.value)}
                    placeholder="e.g. Monday 10:00 AM"
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 text-sm"
                />
                <button
                    onClick={handleAddSlot}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700"
                >
                    Add Slot
                </button>
            </div>

        
            <h3 className="font-semibold text-gray-700 mb-4">Current Slots</h3>
            {slots.length === 0 ? (
                <p className="text-gray-500 text-sm">No slots added yet.</p>
            ) : (
                <div className="space-y-3">
                    {slots.map((slot) => (
                        <div key={slot} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3">
                            <span className="text-gray-700 text-sm">{slot}</span>
                            <button
                                onClick={() => handleRemoveSlot(slot)}
                                className="text-red-500 text-sm hover:text-red-700"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>
)
}

export default ManageAvailability
