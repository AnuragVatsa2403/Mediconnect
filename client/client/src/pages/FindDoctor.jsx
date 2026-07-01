import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { Profileimg } from "../assets/assets";
import Footer from './Footer';
import api from '../utils/axios';


const FindDoctor=()=>{
  
  const[doctor, setDoctor]= useState([]);
  const[loading, setLoading]= useState(true);

  useEffect(()=>{
    const fetchDoctor=async()=>{
      try{
        const {data}= await api.get('/doctor');
        setDoctor(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctor();
  },[]);




    return(
        <div>
        <Header/>
        {doctor.map((doctor) => (
  <div key={doctor._id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
    <img src={Profileimg} alt="doctor" className="w-20 h-20 rounded-full object-cover mb-4" />
    <h3 className="font-bold text-gray-800 text-lg">{doctor.name}</h3>
    <p className="text-blue-600 text-sm mb-1">{doctor.specialization}</p>
    <p className="text-gray-500 text-sm mb-4">{doctor.location}</p>
    {doctor.isVerified && (
      <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">✓ Verified</span>
    )}
    <Link to={`/book/${doctor._id}`} className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 text-sm font-medium">
      Book Appointment
    </Link>
  </div>
))}
<Footer/>



</div>


    );
}

export default FindDoctor;