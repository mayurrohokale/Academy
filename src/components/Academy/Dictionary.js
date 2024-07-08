import React from 'react';

const CryptoDictionary = () => {
  return (
    <div className="relative w-full bg-black text-white font-Outfit">
      <div className="relative w-full p-4 h-full flex items-center justify-center bg-gradient-to-b from-transparent to-gray-900">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-[16px] lg:text-[24px] font-semibold mb-4">Crypto Dictionary</h1>
          <p className="text-[11px] lg:text-lg text-[#FFFFFF66]">Your one-stop to catch up on all crypto terms</p>
          <div className="my-8 relative inline-block">
            <img
              src="./images/machine.svg" 
              alt="Crypto Arcade"
              className="lg:w-full w-[560px] h-auto mx-auto rounded-xl"
            />
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2 w-full text-left rounded-b-xl">
              <p className="text-[14px] lg:text-[18px] text-gray-300 font-semibold">Web3 + Degen Glossary</p>
              <p className="text-[10px] lg:text-[14px] text-[#FFFFFF66]">Your own crypto dictionary</p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="px-4 py-2 bg-gray-700 rounded-s-xl hover:bg-gray-600">Essentials</button>
            <button className="px-4 py-2 bg-gray-600 rounded-e-xl hover:bg-gray-600">Alpha Hub</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDictionary;
