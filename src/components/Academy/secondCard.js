import { FaCircleCheck } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";

export default function seconCard() {
  return (
    <div className="flex flex-col items-center justify-center bg-black p-4">
      <div className="flex items-center justify-center text-[24px] md:text-[48px] mb-2 md:mb-4">
        <FaCircleCheck className="text-[#FFFFFF0D]" />
      </div>
      <div className="relative p-[4px] md:p-[6px] rounded-2xl h-[150px] md:h-[230px] w-[150px] md:w-[200px] bg-[#FFFFFF12] border border-gray-500">
        <img
          src="./images/card.png"
          alt="crypto"
          className="rounded-2xl h-full w-full object-cover"
        />
        <div className="absolute bottom-[-12px] md:bottom-[-24px] left-1/2 transform -translate-x-1/2 bg-[#00000066] text-gray-400 text-[16px] md:text-[22px] w-[32px] md:w-[48px] h-[32px] md:h-[48px] py-1 md:py-2 rounded-full flex items-center justify-center border border-[#FFFFFF33]">
          <IoMdLock />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 md:gap-2 mt-6 md:mt-10 font-Outfit">
        <h1 className="text-[16px] md:text-[20px] font-Outfit text-white text-center">
          Intract Certified: Earner NFT
        </h1>
        <h2 className="text-xs md:text-base text-[#FFFFFF66] text-center">
          Your proof of Airdrop expertise 
        </h2>
        <button className="px-[20px] md:px-[50px] py-[6px] md:py-[10px] text-[12px] md:text-[16px] rounded-lg bg-[#FFFFFF0D] text-[#FFFFFF66] mt-4">
          Claim
        </button>
      </div>
    </div>
  );
}
