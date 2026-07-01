import React from 'react';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../utils/axios';
import { Link } from 'react-router-dom';


const Register = () => {
  const[user, setUser]= useState({email: '', name: '', password: '', role: '', specialization: '', location: ''});
  const[error, setError]= useState('');
  const[loading, setLoading]= useState(false);
  const {login}= useAuth();
  const navigate= useNavigate();

  const handlesubmit= async(e)=>{
    e.preventDefault();
    setLoading(true); setError('');
    try{
      const {data}= await api.post('/auth/register', user);
      login(data.user, data.token);
      navigate('/');

    } catch(err){
      setError(err.response?. data?.message|| 'Login Failed. Check Your Credentials');
    } finally{setLoading(false);}
  }

  return (
    <div>
      
      <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          MediConnect    
      </a>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create new account
              </h1>
              <form onSubmit={handlesubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
  <input value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="Jagdeesh Singhh" required />
</div>
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                  </input>
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                      </input>
                  </div>
                      <select value={user.role} onChange={(e) => setUser({...user, role: e.target.value})} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5">
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        </select>
                        {user.role === 'doctor' && (
                          <>
  <div>
    <label htmlFor="specialization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specialization</label>
    <input value={user.specialization} onChange={(e) => setUser({...user, specialization: e.target.value})} type="text" id="specialization" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="e.g. General Physician" required />
  </div>
  <div>
    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
    <input value={user.location} onChange={(e) => setUser({...user, location: e.target.value})} type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5" placeholder="e.g. Nashik" required />
  </div>
  </>
)}
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Sign up</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account <a href="#" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Sign in</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</div>
  )
}

export default Register
