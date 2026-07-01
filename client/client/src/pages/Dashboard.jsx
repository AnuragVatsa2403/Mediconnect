import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/axios';
import Header from './Header';
import { useAuth } from '../context/AuthContext';
import Banner from './Banner';
import { LabTest, Medicines, Doctor, Call, Dentist, Pediatrician, Gynaecologist, Physiotherapist, Nutritionist, Cardiologist } from '../assets/assets';
import Footer from './Footer';

const Dashboard= ()=>{
    const {user}= useAuth();

    return(
        <div>
            <Header/>
            <Banner/>
            <div className="max-w-7xl mx-auto px-8 py-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-8">What are you looking for?</h2>
                <div className="grid grid-cols-4 gap-6">
                    <Link to="/find-doctors">
                    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer">
                        <img src={Doctor} alt="Find Doctors" className="w-full h-32 object-cover rounded-lg mb-4" />
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Find Doctors</h3>
                        <p className="text-gray-500 text-sm">Search verified doctors near you</p>
                        </div>
                        </Link>
                        <Link to='/video-consult'>
                        <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer'>
                            <img src={Call} alt= "Video Consult" className='w-full h-32 object-cover rounded-lg mb-4'/>
                            <h4 className='text-lg font-bold text-gray-800 mb-2'>Instant Video Consult</h4>
                            <p className='text-gray-500 text-sm'>Connect within 2 minutes</p>
                        </div>
                        </Link>
                        <Link to= '/lab-tests'>
                        <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer'>
                            <img src= {LabTest} alt= "Lab Test" className='w-full h-32 object-cover rounded-lg mb-4'/>
                             <h5 className='text-lg font-bold text-gray-800 mb-2'>Lab Test</h5>
                            <p className='text-gray-500 text-sm'>Safe Lab Tests</p>

                        </div>
                        </Link>

                        <Link to= '/medicines'>
                        <div className='bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition cursor-pointer'>
                            <img src= {Medicines} alt= "Medicines" className='w-full h-32 object-cover rounded-lg mb-4'/>
                             <h6 className='text-lg font-bold text-gray-800 mb-2'>Medicines</h6>
                            <p className='text-gray-500 text-sm'>Safe and Trusted Medicines</p>

                        </div>
                        </Link>


                </div>

      </div>
      <div className='max-w-7xl mx-auto px-8 py-12'>
         <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Appointment</h2>
         <p className="text-gray-500 mb-8">With doctors across all specialities</p>
         <div className='grid grid-cols-6 gap-6'>
            <Link to= 'find-doctors?specialization=dentist'>
            <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
                <img src={Dentist} alt="Dentist" className="w-36 h-36 object-cover rounded-full " />
                <h3 className="font-semibold text-gray-800 text-sm">Dentist</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Teeth & oral health</p>
            </div>
            </Link>
            <Link to= 'find-doctors?specialization=gynaecologist'>
            <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
                <img src={Gynaecologist} alt="Gynacaeologist" className="w-36 h-36 object-cover rounded-full " />
                <h3 className="font-semibold text-gray-800 text-sm">Gynaecologist</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Teeth & oral health</p>
            </div>
            </Link>
            <Link to= 'find-doctors?specialization=physiotherapist'>
            <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
                <img src={Physiotherapist} alt="Physiotherapist" className="w-36 h-36 object-cover rounded-full " />
                <h3 className="font-semibold text-gray-800 text-sm">Physiotherapist</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Teeth & oral health</p>
            </div>
            </Link>
            <Link to= 'find-doctors?specialization=Pediatrician'>
            <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
                <img src={Pediatrician} alt="Pediatrician" className="w-36 h-36 object-cover rounded-full " />
                <h3 className="font-semibold text-gray-800 text-sm">Pediatrician</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Teeth & oral health</p>
            </div>
            </Link>
            <Link to= 'find-doctors?specialization=nutrionist'>
            <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
                <img src={Nutritionist} alt="Nutrionist" className="w-36 h-36 object-cover rounded-full " />
                <h3 className="font-semibold text-gray-800 text-sm">Nutrionist</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Teeth & oral health</p>
            </div>
            </Link>
             <Link to= 'find-doctors?specialization=cardiologist'>
            <div className="flex flex-col items-center cursor-pointer hover:scale-105 transition">
                <img src={Cardiologist} alt="Cardiologist" className="w-36 h-36 object-cover rounded-full " />
                <h3 className="font-semibold text-gray-800 text-sm">Cardiologist</h3>
                <p className="text-xs text-gray-500 text-center mt-1">Teeth & oral health</p>
            </div>
            </Link>
         </div>

      </div>
      <div className='bg-white-50 py-12 px-8'>
         <div className="max-w-7xl mx-auto">
             <h2 className="text-4xl font-bold text-gray-800 text-center mb-2">Why MediConnect?</h2>
             <p className="text-gray-500 text-center mb-10">Hear from our patients</p>

              <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-gray-600 text-sm mb-6">"Found a doctor in my village within minutes. The SMS reminder saved me from missing my appointment."</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
            R
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">Ramesh Patil</p>
            <p className="text-xs text-gray-400">Patient, Nashik</p>
          </div>
        </div>
        </div>

         </div>

      </div>
      <Footer/>

        </div>
    );
};

export default Dashboard;


