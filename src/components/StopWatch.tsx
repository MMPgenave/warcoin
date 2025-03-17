// import React from "react";

const StopWatch = ({ hr, min, sec, color }: { hr: string; min: string; sec: string; color: string }) => {
  return (
    <div className=" flex items-center  gap-[10px]">
      <div
        className={`relative w-[48px] h-[48px] flex items-center justify-center border-[1px] rounded-[4px] ${
          color === "blue" ? "border-[#0194FE]  bg-[#0194FE]/40" : "border-[#EF5350]  bg-[#EF5350]/40"
        } text-white text-[24px] font-semibold `}
      >
        {hr}
        <div className=" absolute -bottom-5 left-[50%] transform -translate-x-1/2 font-light text-[8px]">Hour</div>
      </div>

      <div className=" text-[20px] text-white font-bold  ">:</div>
      <div
        className={`relative w-[48px] h-[48px] flex items-center justify-center border-[1px] rounded-[4px] ${
          color === "blue" ? "border-[#0194FE]  bg-[#0194FE]/40" : "border-[#EF5350]  bg-[#EF5350]/40"
        } text-white text-[24px] font-semibold `}
      >
        {min}
        <div className=" absolute -bottom-5 left-[50%] transform -translate-x-1/2 font-light text-[8px]">Min</div>
      </div>
      <div className=" text-[20px] text-white font-bold  ">:</div>
      <div
        className={`relative w-[48px] h-[48px] flex items-center justify-center border-[1px] rounded-[4px] ${
          color === "blue" ? "border-[#0194FE]  bg-[#0194FE]/40" : "border-[#EF5350]  bg-[#EF5350]/40"
        } text-white text-[24px] font-semibold `}
      >
        {sec}
        <div className=" absolute -bottom-5 left-[50%] transform -translate-x-1/2 font-light text-[8px]">Second</div>
      </div>
    </div>
  );
};

export default StopWatch;
