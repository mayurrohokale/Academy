import { HiOutlinePlay } from "react-icons/hi";

export default function CryptoCreators() {
  const creators = [
    {
      image: "./images/reel1.png",
      title: "How to plan your retirement with crypto?",
    },
    {
      image: "./images/reel3.png",
      title: "Why are there limited Bitcoin?",
    },
    {
      image: "./images/reel2.png",
      title: "How does Uniswap actually work?",
    },
    {
      image: "./images/reel4.png",
      title: "How to spot crypto projects to invest in?",
    },
  ];

  return (
    <div className="bg-black text-white font-Outfit py-10">
        <hr className="border-gray-600 mb-4"/>
      <h1 className="text-2xl text-center mb-2">Top Crypto Creators and Projects to Follow</h1>
      <p className="text-center text-[#FFFFFF66] mb-10">Answers to your crypto doubts, straight from the experts</p>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {creators.map((creator, index) => (
          <div
            key={index}
            className="relative w-64 h-96 rounded-2xl overflow-hidden bg-gray-800"
          >
            <img
              src={creator.image}
              alt={creator.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 right-0 p-2">
              <HiOutlinePlay className="text-3xl text-white" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-transparent">
              <h2 className="text-lg">{creator.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-gray-800 mt-12'/>
    </div>
  );
}
