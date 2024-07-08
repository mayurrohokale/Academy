import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Airdrop() {
  const [openPanel, setOpenPanel] = useState(true);

  const toggleMenu = () => {
    setOpenPanel(!openPanel);
  };

  const Menus = [
    {
      id: 1,
      title: "What are airdrops, and how...",
      tasks: 11,
      image: "./images/img11.jpg",
    },
    {
      id: 2,
      title: "Types of Airdrops",
      tasks: 8,
      image: "./images/img12.jpg",
    },
    {
      id: 3,
      title: "How to earn huge $$$...",
      tasks: 8,
      image: "./images/img13.png",
    },
    {
      id: 4,
      title: "Things to keep in mind!",
      tasks: 10,
      image: "./images/img14.jpg",
    },
  ];

  return (
    <div className="max-w-full mx-auto">
      <div
        className="w-full md:w-[520px] h-auto bg-gray-950 border rounded-2xl overflow-hidden hover:bg-gray-900 cursor-pointer"
        onClick={toggleMenu}
      >
        <div className="p-4 md:p-[24px] flex flex-row font-Outfit">
          <div className="relative p-[4px] rounded-2xl h-[120px] md:h-[160px] w-[120px] md:w-[180px] bg-[#FFFFFF12] border border-gray-500">
            <img
              src="./images/flower.png"
              alt="crypto"
              className="p-1 rounded-2xl h-full w-full object-cover"
            />
            <div className="absolute border border-[#FFFFFF33] mb-2 md:mb-4 bottom-0 left-1/2 transform -translate-x-1/2 bg-[#00000066] text-white text-xs md:text-[14px] w-[60px] md:w-[80px] py-1 md:py-2 rounded-xl text-center">
              4 Quests
            </div>
          </div>
          <div className="text-white font-Outfit flex flex-col gap-2 ml-2 md:ml-4">
            <div className="">
              <h1 className="text-lg md:text-[24px] font-medium">Introduction to Airdrops</h1>
              <h3 className="text-xs md:text-[16px] font-light text-[#FFFFFF66]">
              Your best bet to make it big in crypto!
              </h3>
            </div>
            <hr className="border-t-2 border-dashed border-[#FFFFFF66] my-1" />
            <div className="flex flex-row items-center border border-[#FFFFFF0D] bg-[#FFFFFF12] text-[#FFFFFFCC] rounded-3xl w-[80px] md:w-[104px] h-[24px] md:h-[32px] justify-center">
              <img
                src="./images/coin.svg"
                alt="coin"
                className="h-[12px] md:h-[16px] w-[14px] md:w-[18px] mr-1"
              />
              <h1 className="text-xs md:text-base">1040 XPs</h1>
            </div>
          </div>
        </div>
      </div>

      {openPanel && (
        <div className="w-full md:w-[520px] max-h-[300px] bg-[#101010] border-t border-gray-500 rounded-b-2xl p-4 overflow-y-auto custom-scrollbar">
          {Menus.slice(0, 3).map((menu) => (
            <div
              key={menu.id}
              className="flex items-center mb-2 font-Outfit p-4 bg-gray-800 rounded-lg shadow-lg"
            >
              <img
                src={menu.image}
                alt={`#${menu.id}`}
                className="w-[80px] md:w-[120px] h-[60px] md:h-[80px] rounded-lg mr-4"
              />
              <div>
                <h2 className="text-[#FFFFFFCC] text-sm md:text-[20px] font-semibold">{`#${menu.id}: ${menu.title}`}</h2>
                <hr className="border-t-2 border-dashed border-[#FFFFFF66] my-1" />
                <div className="flex items-center gap-1">
                  <p className="text-gray-400 text-xs md:text-base">{menu.tasks} Tasks</p>
                  <FaCheckCircle className="text-gray-400 text-xs md:text-base" />
                </div>
              </div>
            </div>
          ))}
          <div className="overflow-y-auto h-32 custom-scrollbar">
            {Menus.slice(3).map((menu) => (
              <div
                key={menu.id}
                className="flex items-center mb-2 font-Outfit p-4 bg-gray-800 rounded-lg shadow-lg"
              >
                <img
                  src={menu.image}
                  alt={`#${menu.id}`}
                  className="w-[80px] md:w-[120px] h-[60px] md:h-[80px] rounded-lg mr-4"
                />
                <div>
                  <h2 className="text-[#FFFFFFCC] text-sm md:text-[20px] font-semibold">{`#${menu.id}: ${menu.title}`}</h2>
                  <hr className="border-t-2 border-dashed border-[#FFFFFF66] my-1" />
                  <div className="flex items-center gap-1">
                    <p className="text-gray-400 text-xs md:text-base">{menu.tasks} Tasks</p>
                    <FaCheckCircle className="text-gray-400 text-xs md:text-base" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
