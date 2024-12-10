import React from "react";
import { UserOutlined } from "@ant-design/icons";
import fb from "../../assets/fb.svg";

const Footer = () => {
  return (
    <div className="bg-[#021736] text-white py-14 px-7">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="grid md:grid-cols-3 sm:flex-row gap-8">
          <ul className="space-y-2">
            <li className="text-[18px] font-semibold">Company</li>
            <li className="text-[#c0b5b5] hover:text-white">About us</li>
            <li className="text-[#c0b5b5] hover:text-white">Blog</li>
            <li className="text-[#c0b5b5] hover:text-white">Returns</li>
            <li className="text-[#c0b5b5] hover:text-white">Order Status</li>
          </ul>
          <ul className="space-y-2">
            <li className="text-[18px] font-semibold">Info</li>
            <li className="text-[#c0b5b5] hover:text-white">How it works</li>
            <li className="text-[#c0b5b5] hover:text-white">Our Promises</li>
            <li className="text-[#c0b5b5] hover:text-white">FAQ</li>
          </ul>
          <ul className="space-y-2">
            <li className="text-[18px] font-semibold">Support</li>
            <li className="text-[#c0b5b5] hover:text-white">Contact Us</li>
            <li className="text-[#c0b5b5] hover:text-white">Help Center</li>
            <li className="text-[#c0b5b5] hover:text-white">Privacy Policy</li>
          </ul>
        </div>
        <div className="space-y-5 lg:w-1/3">
          <h2 className="text-[18px] font-semibold">Sign up for News and Updates</h2>
          <div className="py-2 px-3 border-2 flex items-center gap-2 rounded-md bg-inherit text-white">
            <UserOutlined className="text-gray-500" />
            <input
              type="text"
              className="flex-1 bg-inherit outline-none border-none placeholder-gray-500"
              placeholder="E-mail Address"
            />
            <button className="text-[#021736] font-semibold">&gt;</button>
          </div>
          <div className="flex gap-4">
            <img src={fb} alt="Facebook" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <img src={fb} alt="Twitter" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <img src={fb} alt="Instagram" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
            <img src={fb} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
