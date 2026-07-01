import React from 'react'
import Header from './Header'
import Banner from './Banner'

const Medicines = () => {
  return (
    <div>
    <Header/>
    <Banner/>
    <div className='max-w-7xl mx-auto px-8 py-24 text-center'>
    <div className='text-3xl text-gray-800 font-bold mb-4'>Medicines</div>
     <p className="text-gray-500">Coming Soon — order medicines online and get them delivered to your doorstep.</p>
     </div>
     </div>
      
  )
}

export default Medicines
