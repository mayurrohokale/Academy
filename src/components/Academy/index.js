import { IoIosArrowRoundForward } from "react-icons/io";
import Task from "./Task";
import Card from "./Card";
import Reward from "./Reward";
import Projects from './Projects';
import Directory from './Directory';
// Assuming you have the path image

export default function AcademyPage() {
  return (
    <div className="">
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
              className="mix-blend-screen w-[235px]"
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
          <button className="mt-8 text-[16px] bg-[#6435e9] font-Outfit rounded-lg px-[57px] py-[10px] flex items-center font-normal">
            <span className="hover:translate-x-2 flex">
              Get Started{" "}
              <span className="text-[30px]">
                <IoIosArrowRoundForward />
              </span>
            </span>
          </button>
        </div>
      </div>
      <div className="relative m-36 h-[800px] ">
        <div className="absolute top-0 left-0">
          <Task />
        </div>
        <div className="absolute top-44 right-0">
          <Card />
        </div>
      </div>
      <div className="relative m-36 h-[600px]">
        <div className="absolute left-0 top-56 ">
          <Card />
        </div>
        <div className="absolute top-0 left-[40%]">
          <Task />
        </div>
      </div>
      <div>
        <Reward />
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Directory/>
      </div>
    </div>
  );
}
