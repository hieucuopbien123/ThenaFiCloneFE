import React from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="group relative">
      {children}
      <div className="hidden group-hover:block absolute z-10 bg-gray-700 text-white text-sm py-1 px-2 rounded">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
