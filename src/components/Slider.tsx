import React from "react";

const Slider = ({ percentage }: { percentage: number }) => {
  return (
    <div className={`mt-8 relative bg-[#282828] px-3 h-[2px] w-[82%]`}>
      <div className=" absolute w-full flex justify-between items-center left-[50%] transform -translate-x-1/2 -bottom-[4px]">
        <div className={` w-[2.5px] h-[10px] ${percentage > 0 ? "bg-primaryGreen" : "bg-[#282828]"} `}></div>
        <div className={` w-[2.5px] h-[10px] ${percentage >= 25 ? "bg-primaryGreen" : "bg-[#282828]"} `}></div>
        <div className={` w-[2.5px] h-[10px] ${percentage >= 50 ? "bg-primaryGreen" : "bg-[#282828]"} `}></div>
        <div className={` w-[2.5px] h-[10px] ${percentage >= 75 ? "bg-primaryGreen" : "bg-[#282828]"} `}></div>
        <div className={` w-[2.5px] h-[10px] ${percentage === 100 ? "bg-primaryGreen" : "bg-[#282828]"} `}></div>
      </div>
      <div className={` absolute left-0 h-[2px] bg-primaryGreen w-[20%]  `}></div>
    </div>
  );
};

export default Slider;
