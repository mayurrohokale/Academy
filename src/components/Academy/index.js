import { IoIosArrowRoundForward } from "react-icons/io";
import Task from "./Task";
import Card from "./Card";
import Reward from "./Reward";
import Projects from './Projects';
import Directory from './Directory';
// Assuming you have the path image

export default function AcademyPage() {
  return (
    <div className="py-[64px]">
      <div
        style={{
          backgroundImage: `url('./images/academy.png')`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // width: "100%",
          // height: "100vh",
        }} 
       className="bg-no-repeat w-full  bg-cover bg-center h-[35vh] lg:h-[100vh]  flex justify-center items-center "
      >
        <div className="text-white flex flex-col  gap-4 mt-32 justify-center h-full   items-center">
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
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly  px-5 py-36  lg:px-10 lg:py-10 ">
        <div className="">
          <Task />
        </div>
        <div className="flex flex-col justify-center">
         
          <Card />
          
          
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-evenly  px-5 py-10  lg:px-10 lg:py-20 ">
        <div className="">
          
          <Card />
        </div>
        <div className="flex flex-col justify-center">
         
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
