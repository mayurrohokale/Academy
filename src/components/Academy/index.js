import { IoIosArrowRoundForward } from "react-icons/io";
import Task from "./Task";
export default function AcademyPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('./images/academy.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="text-white flex flex-col gap-4 justify-center lg:justify-end h-full lg:pb-8 items-center">
          <div>
            <img
              src="./images/academylogo.gif"
              alt="academylogo"
              className=" mix-blend-screen w-[235px]"
            />
          </div>
          <hr />
          <h3 className="text-[20px] font-normal font-Outfit">
            Intract users{" "}
            <span className="text-[#FFFFFF66]">
              have together made more than
            </span>{" "}
            $100 million <span className="text-[#FFFFFF66]">in Web3.</span>
            <br />
            <span className="text-[#FFFFFF66]">Join them and</span> learn how to
            earn crypto!
          </h3>
          <button className="mt-8 text-[16px] bg-[#6435e9] font-Outfit rounded-lg px-[57px] py-[10px] flex items-center  font-normal">
            {" "}
            <span className="hover:translate-x-2 flex">
              {" "}
              Get Started{" "}
              <span className="text-[30px]">
                <IoIosArrowRoundForward />
              </span>
            </span>{" "}
          </button>
        </div>
        <div></div>
      </div>
      <div className="m-12 ">
        <Task />
        <div>

        </div>
      </div>
    </div>
  );
}
