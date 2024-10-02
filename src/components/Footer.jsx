import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-blue-400">Banking</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Investments</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Insurance</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Careers</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Press</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-blue-400">Help Center</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-blue-400">FAQs</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-blue-400">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Terms of Service</Link></li>
            <li><Link to="#" className="hover:text-blue-400">Security</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        © 2024 Givesheep Clone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;