import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-2xl w-full px-4 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Bienvenue sur notre E-commerce
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez notre collection exclusive
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
              Explorer
            </button>
            <button className="px-6 py-3 border border-black text-black rounded-md hover:bg-gray-50 transition-colors">
              En savoir plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;