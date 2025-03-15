import React from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  visible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, visible }) => {
  return (
    <div className="relative ">
      {children}
      {visible && (
        <div className=" w-[80%] absolute bottom-[90%] left-1/2 transform border-[#EF5350] border -translate-x-1/2 mb-2  text-[#fff] text-sm text-center rounded py-1  whitespace-nowrap z-10 transition-opacity duration-200">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
