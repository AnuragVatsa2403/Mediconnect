import { Bannerimg} from "../assets/assets";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import api from '../utils/axios';
import { useTranslation } from "react-i18next";


const Banner = () => {
    
    return (
        <div 
            className="relative text-white py-16 px-8 min-h-64"
            style={{ 
                backgroundImage: `url(${Bannerimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">Your Health, Our Priority</h1>
                <p className="text-blue-100 text-lg mb-8">Connect with verified doctors near you — anytime, anywhere.</p>
                <Link 
                    to="/find-doctors" 
                    className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50"
                >
                    Book a Doctor
                </Link>
            </div>
        </div>
    )
}

export default Banner;