import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) return prevTime - 1;
        clearInterval(interval);
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(time);

  return (
    <div className="bg-[#FFFFFF0D] text-white p-4 rounded-md w-full font-Outfit">
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center text-gray-400 text-[16px]">
          <svg
            className="w-4 h-4 mr-1 text-orange-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11h2v5H9V7zm1 8a1 1 0 110-2 1 1 0 010 2z"
              clipRule="evenodd"
            />
          </svg>
          Reward unlocks in
        </span>
      </div>

      <div className="bg-black text-white p-4 rounded-md">
        <div className="flex justify-between text-center">
          <div>
            <div className="text-3xl font-bold">
              {String(days).padStart(2, "0")}
            </div>
            <div className="text-sm">Days</div>
          </div>
          <div>
            <div className="text-3xl font-bold">
              {String(hours).padStart(2, "0")}
            </div>
            <div className="text-sm">Hrs</div>
          </div>
          <div>
            <div className="text-3xl font-bold">
              {String(minutes).padStart(2, "0")}
            </div>
            <div className="text-sm">Mins</div>
          </div>
          <div>
            <div className="text-3xl font-bold">
              {String(seconds).padStart(2, "0")}
            </div>
            <div className="text-sm">Sec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
