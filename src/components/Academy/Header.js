import { useState } from "react";
import { MdFiberNew } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";


const MENU_ITEMS = [
  { title: "Compass" },
  { title: "Explore" },
  { title: "Academy", icon: <MdFiberNew className="inline-block text-[#6435E9] text-[26px] ml-1" /> },
  { title: "NFTs" },
  { title: "For Projects" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black flex flex-col w-full h-[64px] fixed z-50 ">
      <div className="text-white flex flex-row justify-center gap-4 items-center my-auto">
        <div className="mx-4">
          <img src="./images/intract_text.png" alt="logo" />
        </div>
        <div className="hidden lg:flex">
          <nav>
            <ul className="flex flex-row justify-between gap-4 items-center">
              {MENU_ITEMS.map((item, index) => (
                <li
                  key={index}
                  className="text-[#ffffffb3] font-light text-[16px] font-Outfit  hover:text-white  cursor-pointer"
                >
                  {item.title} <span>{item.icon}</span> 
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="align-items-center">
          <input type="text" alt="searchbar" placeholder="Search for Ecosystem Trending" className="hidden lg:flex lg:px-[50px] xl:px-[74px] py-[10px] rounded-3xl border border-[#FFFFFF0D] bg-[#FFFFFF12]"  />
        </div>
        <div className="w-[30px] h-[30px] lg:w-[42px] lg:h-[42px] rounded-full p-2 border border-[#fa8922]">
          <img src="./images/igtv.svg" alt="igtv" />
        </div>
        <div>
          <button className="bg-white rounded-lg text-black text-[11px] lg:text-[16px] px-[10px]  lg:px-[25px] py-[7px] font-semibold">Sign In</button>
        </div>
        <div className="lg:hidden cursor-pointer text-[25px] text-white flex items-center" onClick={toggleMenu}>
              <MdMenu className="mr-1" /> 
            </div>
      </div>
      

      <div className="lg:hidden z-60 top-16 absolute right-0 w-[full] ">
        {menuOpen && (
          <ul className="flex flex-col bg-black p-4">
            {MENU_ITEMS.map((item, index) => (
              <li key={index} className="text-white text-[16px] font-Outfit text-right font-semibold hover:text-[#14B8A6] cursor-pointer">{item.title}</li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}
