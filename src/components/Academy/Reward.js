import { HiOutlineInformationCircle } from "react-icons/hi";
import CountdownTimer from "./Timer";

export default function Reward() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 font-Outfit">
      <div className="flex flex-col justify-center items-center text-white gap-2">
        <div className="h-[164px] w-[320px] flex items-center justify-center text-xl bg-[#FFFFFF0D] border border-[#FFFFFF33] rounded-xl">
          <CountdownTimer initialTime={55810} />
        </div>
        <div className="relative h-[476px] w-[320px] border rounded-xl bg-[#FFFFFF0D]">
          <img
            src="./images/reward.gif"
            alt="reward"
            className="p-4 rounded-xl h-[65%] w-full object-cover"
          />
          <div className="absolute bottom-0 w-full p-4">
            <h1 className="text-start text-xl mb-2">Exclusive Community</h1>
            <hr className="border-gray-800" />
            <div className="text-left text-sm mt-2 mb-4">
              <p>Complete all Essential quests</p>
              <p>Complete at least 1 Alpha Hub quest today</p>
            </div>
            <button className="bg-[#FFFFFF12] w-full p-4 rounded-lg">
              Claim Now
            </button>
          </div>
        </div>
      </div>
      <div className="text-[#FFFFFF66] h-[366px] w-[310px] border border-[#FFFFFF33] rounded-xl p-4 flex flex-col gap-2 text-left bg-[#00000099]">
        <h1 className="flex items-center text-lg">
          Reward Info <HiOutlineInformationCircle className="ml-2" />
        </h1>
        <hr className="border-gray-800" />
        <h1 className="text-white text-base mt-2">
          Free access to paid KOL (crypto earning) communities!
        </h1>
        <p className="text-sm mt-2">
          Win access to exclusive earning communities of some of the greatest
          earners in crypto for a month, every 24 hours. Get access to unmatched
          insights, a close-knit community of the best airdrop earners, and
          more.
        </p>
        <p className="text-sm mt-2">
          To win: make sure you've connected your Twitter and Discord accounts -
          and follow our criteria!
        </p>
      </div>
    </div>
  );
}
