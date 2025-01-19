import React from "react";

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  visible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children, visible }) => {
  return (
    <div className="relative inline-block">
      {children}
      {visible && (
        <div className=" w-full absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-500 text-blue-400 text-sm text-center rounded py-1  whitespace-nowrap z-10 transition-opacity duration-200">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
