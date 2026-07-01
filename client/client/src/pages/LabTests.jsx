import React from 'react';
import Banner from './Banner';
import Header from './Header';

const LabTests = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <div className="max-w-7xl mx-auto px-8 py-24 text-center">
        <div className="text-6xl mb-6">🧪</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Lab Tests</h1>
        <p className="text-gray-500">Coming Soon — book diagnostic tests with home sample collection.</p>
      </div>
    </div>
  );
};

export default LabTests;