import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';

const patientNavItems= [
    {label: 'Find Doctors', path: '/find-doctors'},
    { label: 'Video Consult', path: '/video-consult' },
  { label: 'Lab Tests', path: '/lab-tests' },
  { label: 'Medicines', path: '/medicines' },
];

const doctorNavItems = [
  { label: 'My Appointments', path: '/doctor-dashboard' },
  { label: 'Manage Availability', path: '/doctor/availability' },
];



const Header= () =>{
    const location = useLocation();
    const { user, logout } = useAuth();
    const [dropdownOpen, setDropdownOpen]= useState(false);
    const currentNavItems = user?.role === 'doctor' ? doctorNavItems : patientNavItems;
   

    

    return(
        <header className='bg-white shadow-sm sticky top-0 z-50'>
            <div className='max-sm:w-7xl mx-auto px-4 py-3 flex items-center justify-between'>
                <Link to='/' className="flex items-center gap-2 text-blue-600 font-bold text-xl">
                <span>🩺</span>
                 <span>MediConnect</span>
                </Link>

                <nav className="flex items-center gap-1">
                    {currentNavItems.map((item)=>{
                        const isActive= location.pathname=== item.path;
                        return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  isActive
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            );

                    })}

           


                    <div className='flex items-center gap-3'>
                        {user ? (
    <div className="relative">
        <button 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
            className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600"
        >
            {user.name[0]}
        </button>
        {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 py-2 border border-gray-100">
                <Link 
                    to={user?.role === 'doctor' ? '/doctor-dashboard' : '/my-appointments'}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                    My Appointments
                </Link>
                <button 
                    onClick={() => { logout(); setDropdownOpen(false); }} 
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                    Logout
                </button>
            </div>
        )}
    </div>
):(
                            <>
                            <Link to='/login' className='text-sm font-medium text-gray-800 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50'>
                            Login
                            </Link>
                            <Link to='/register' className='text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700'>
                            Sign Up
                            </Link>
                            </>
                        
                        )}
                    </div>
                </nav>
               
            </div>

        </header>

    );

};

export default Header;

