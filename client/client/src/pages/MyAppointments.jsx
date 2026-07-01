import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import api from '../utils/axios';
import Header from "./Header";


const MyAppointments= ()=>{
    const[myAppointments, setMyAppointments]= useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchDetail= async ()=>{
            try{
                const {data}= await api.get('/appointments/my');
                setMyAppointments(data);

            } catch(err){
                console.log(err);
            } finally{
                setLoading(false);
            }
        };
        fetchDetail();
    }, [])

    return(
        <div>
            <Header/>
            <div className="max-w-7xl mx-auto px-8 py-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-8">My Appointments</h2>
  
  {loading ? (
    <p>Loading...</p>
  ) : myAppointments.length === 0 ? (
    <p className="text-gray-500">No appointments booked yet.</p>
  ) : (
    <div className="grid grid-cols-2 gap-6">
      {myAppointments.map((appt) => (
        <div key={appt._id} className="bg-white rounded-xl shadow-md p-6">
          <h3 className="font-bold text-gray-800">{appt.doctor.name}</h3>
          <p className="text-blue-600 text-sm">{appt.doctor.specialization}</p>
          <p className="text-gray-500 text-sm mb-2">📍 {appt.doctor.location}</p>
          <p className="text-gray-700 text-sm">🕐 {appt.slot}</p>
          <span className={`inline-block mt-3 text-xs px-2 py-1 rounded-full ${
            appt.status === 'confirmed' ? 'bg-green-100 text-green-600' :
            appt.status === 'cancelled' ? 'bg-red-100 text-red-600' :
            'bg-yellow-100 text-yellow-600'
          }`}>
            {appt.status}
          </span>
        </div>
      ))}
    </div>
  )}
</div>
        </div>

    )

}

export default MyAppointments;