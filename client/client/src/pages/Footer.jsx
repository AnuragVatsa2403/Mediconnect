import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-12">
      <div className="max-w-7xl mx-auto px-8 py-12">
        
        {/* Top section */}
        <div className="grid grid-cols-4 gap-8 mb-10">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">🩺 MediConnect</h3>
            <p className="text-blue-100 text-sm">Connecting rural patients with verified doctors across India.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><Link to="/find-doctors" className="hover:text-white">Find Doctors</Link></li>
              <li><Link to="/video-consult" className="hover:text-white">Video Consult</Link></li>
              <li><Link to="/lab-tests" className="hover:text-white">Lab Tests</Link></li>
              <li><Link to="/medicines" className="hover:text-white">Medicines</Link></li>
            </ul>
          </div>

          {/* For Patients */}
          <div>
            <h4 className="font-semibold mb-4">For Patients</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><Link to="/register" className="hover:text-white">Register</Link></li>
              <li><Link to="/login" className="hover:text-white">Login</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">My Appointments</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>📧 support@mediconnect.in</li>
              <li>📞 1800-XXX-XXXX</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-blue-500 pt-6 flex items-center justify-between">
          <p className="text-blue-100 text-sm">© 2026 MediConnect. All rights reserved.</p>
          <div className="flex gap-6 text-blue-100 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;