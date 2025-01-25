import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-[url('https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3')] bg-cover bg-center h-[70vh] flex items-center justify-center">
            <div className="text-center text-white space-y-6 p-4">
              <h1 className="text-5xl font-bold sm:text-6xl">
                LuxWatch
              </h1>
              <p className="text-xl max-w-2xl mx-auto">
                Découvrez notre collection exclusive de montres de luxe
              </p>
              <div className="flex justify-center gap-4">
                <Link 
                  to="/products" 
                  className="px-6 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors"
                >
                  Explorer la Collection
                </Link>
                <Link 
                  to="/about" 
                  className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;