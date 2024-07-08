import React from 'react';
import { FaTwitter, FaDiscord, FaTelegramPlane, FaSpotify } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white font-Outfit  px-4">
        <hr className="border-gray-800 pt-2" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-4">intract.</h1>
          <p className="text-gray-400">We are your personal guide for exploring web3 projects & earning 100x rewards</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">INTRACT</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400">Explore Quests</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Communities</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Alpha Hub</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">EARN</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400">Refer & Earn</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Leaderboard</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Achievements</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">ABOUT</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400">Product Roadmap</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Affiliate Program</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Sign up Program</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Growth Community</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Blogs</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">SUPPORT</h2>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400">Help Center</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Create your quest</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Terms of Service</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400">Community Guidelines</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <hr className="border-gray-800" />
        <p className="text-gray-400 text-sm mt-4">
          <strong>Disclaimer:</strong> Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.
        </p>
        <p className="text-gray-400 text-center mt-4 font-Outfit">CREATED BY <a href="#" className="text-white font-bold">INTRACT</a></p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-blue-700"><FaTwitter size={24} /></a>
          <a href="#" className="text-blue-400"><FaDiscord size={24} /></a>
          <a href="#" className="text-blue-400"><FaTelegramPlane size={24} /></a>
          <a href="#" className="text-green-400"><FaSpotify size={24} /></a>
        </div>
      </div>
    </footer>
  );
}
