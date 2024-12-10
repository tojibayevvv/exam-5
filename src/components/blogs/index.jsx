import React from "react";
import blog1xs from "../../assets/blog1xs.svg";
import date1 from "../../assets/date1.svg";
import datewatch from "../../assets/datewatch.svg";
import headphones from "../../assets/neoheadphones.svg";
import stock from "../../assets/stock.svg";

const Blogs = () => {
  return (
    <div className="mt-4">
      <h2 className="text-[20px] font-semibold">Our Blogs</h2>
      <hr className="w-full xs:border-1 mb-4 mt-2 border-gray-500 " />
      <div className="md:flex md:items-center">
        <div className="border-2 rounded-md xs:mb-2 p-2">
          <img className="md:w-[500px]" src={blog1xs} alt="" />
          <div className="flex my-2">
            <img className="xs:w-[200px]" src={date1} alt="" />
            <div className="flex">
              <img className="" src={datewatch} alt="" />
              <p className="text-[#717171]">3 min read</p>
            </div>
          </div>
          <h2 className="text-[16px]">
            Meta Platforms plans to release free software that...
          </h2>
          <p className="text-[12px] text-[#717171]">
            The parent company of Facebook, Meta Platforms, is introducing
            software to help developers{" "}
          </p>
        </div>
        <div className="">
          <div className="border-2 rounded-md xs:mb-2 p-2">
            <img className="md:w-[600px]" src={headphones} alt="" />
            <div className="md:block"> 
              <div className="flex my-2">
                <img className="xs:w-[200px]" src={date1} alt="" />
                <div className="flex">
                  <img className="" src={datewatch} alt="" />
                  <p className="text-[#717171]">3 min read</p>
                </div>
              </div>
              <div className="md:block">
              <h2 className="text-[16px]">
                Meta Platforms plans to release free software that...
              </h2>
              <p className="text-[12px] text-[#717171]">
                The parent company of Facebook, Meta Platforms, is introducing
                software to help developers
              </p>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-md xs:mb-2 p-2">
            <img className="w-[600px]" src={stock} alt="" />
            <div className="flex my-2">
              <img className="xs:w-[200px]" src={date1} alt="" />
              <div className="flex w-[300px]">
                <img className="" src={datewatch} alt="" />
                <p className="text-[#717171]">3 min read</p>
              </div>
            </div>
            <h2 className="text-[16px]">
              Meta Platforms plans to release free software that...
            </h2>
            <p className="text-[12px] text-[#717171]">
              The parent company of Facebook, Meta Platforms, is introducing
              software to help developers{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
