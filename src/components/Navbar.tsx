import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            LuxWatch
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Catalogue
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/account" className="text-gray-600 hover:text-gray-900">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;