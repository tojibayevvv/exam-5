import React from "react";
import lupa from "../../assets/lupa.svg"

const Input = () => {
  return (
    <div className="bg-[#EDEDED] flex  xs:my-3">
      <input placeholder="What can we help u to find?" className="outline-none bg-inherit xs:px-3 xs:text-[15px] xs:py-4 w-full" type="text" />
      <img src={lupa} className="pr-3" alt="" />
    </div>
  );
};

export default Input;
