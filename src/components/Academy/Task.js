import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Task() {
  const [openPanel, setOpenPanel] = useState(true);

  const toggleMenu = () => {
    setOpenPanel(!openPanel);
  };

  const Menus = [
    {
      id: 1,
      title: "But what is crypto and...",
      tasks: 11,
      image: "./images/img1.png",
    },
    {
      id: 2,
      title: "Setting up your own we...",
      tasks: 8,
      image: "./images/img2.jpg",
    },
    {
      id: 3,
      title: "What the heck is a...",
      tasks: 8,
      image: "./images/img3.jpg",
    },
    {
      id: 4,
      title: "Swapping and bridging...",
      tasks: 10,
      image: "./images/img4.jpg",
    },
  ];

  return (
    <div>
      <div
        className="w-[520px] h-[228px] bg-gray-950 border rounded-2xl overflow-hidden"
        onClick={toggleMenu}
      >
        <div className="p-[24px] flex flex-row font-Outfit">
          <div className="relative p-[4px] rounded-2xl h-[160px] w-[180px] bg-[#FFFFFF12] border border-gray-500">
            <img
              src="./images/crypto.png"
              alt="crypto"
              className="p-1 rounded-2xl h-full w-full object-cover"
            />
            <div className="absolute border border-[#FFFFFF33] mb-4 bottom-0 left-1/2 transform -translate-x-1/2 bg-[#00000066] text-white text-[14px] w-[80px] py-2 rounded-xl text-center">
              6 Quests
            </div>
          </div>
          <div className="text-white font-Outfit flex flex-col gap-2 ml-4">
            <div className="">
              <h1 className="text-[24px] font-medium">Basics of Crypto</h1>
              <h3 className="text-[16px] font-light text-[#FFFFFF66]">
                The safest and easiest place to start your crypto journey!
              </h3>
            </div>
            <hr className="border-t-2 border-dashed border-[#FFFFFF66] my-1" />
            <div className="flex flex-row items-center border border-[#FFFFFF0D] bg-[#FFFFFF12] text-[#FFFFFFCC] rounded-3xl w-[104px] h-[32px] justify-center">
              <img
                src="./images/coin.svg"
                alt="coin"
                className="h-[16px] w-[18px] mr-1"
              />
              <h1>1490 XPs</h1>
            </div>
          </div>
        </div>
      </div>

      {openPanel && (
        <div className="w-[520px] bg-[#101010] border-t border-gray-500 rounded-b-2xl p-4  overflow-y-auto">
          {Menus.map((menu) => (
            <div
              key={menu.id}
              className="flex items-center mb-2 font-Outfit p-4 bg-gray-800 rounded-lg shadow-lg"
            >
              <img
                src={menu.image}
                alt={`#${menu.id}`}
                className="w-[120px] h-[80px] rounded-lg mr-4"
              />
              <div>
                <h2 className="text-[#FFFFFFCC] text-[20px] font-semibold">{`#${menu.id}: ${menu.title}`}</h2>
                <hr className="border-t-2 border-dashed border-[#FFFFFF66] my-1" />
                <div className="flex items-center gap-1">
                  <p className="text-gray-400">{menu.tasks} Tasks</p>
                  <FaCheckCircle className="text-gray-400" />
                </div>
              </div>
              <div className="ml-auto"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
