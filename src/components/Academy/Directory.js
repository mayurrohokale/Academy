import React from 'react';

const CryptoDictionary = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white font-Outfit">
      <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-b from-transparent to-gray-900">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-[24px] font-semibold mb-4">Crypto Dictionary</h1>
          <p className="text-lg md:text-xl text-[#FFFFFF66]">Your one-stop to catch up on all crypto terms</p>
          <div className="my-8">
            <div className="relative inline-block">
              <img
                src="./images/machine.svg"
                alt="Crypto Arcade"
                className="w-full h-auto mx-auto rounded-xl"
              />
              <button className="absolute inset-0 flex items-center justify-center text-green-500 text-2xl font-bold">
                PRESS START
              </button>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Essentials</button>
            <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Alpha Hub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDictionary;
