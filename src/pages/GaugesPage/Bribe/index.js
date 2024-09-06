import React from "react";

const Bribe = () => {
  return (
    <>
      <div className="gradientBox-nomargin rounded-md grow">
        <div
          className="p-5 md:p-8 flex md:flex-nowrap flex-wrap gap-5 items-start rounded-md"
          style={{
            background:
              "linear-gradient(90deg, rgb(29, 2, 59) 0%, rgb(23, 2, 62) 100%) 0% 0% no-repeat padding-box padding-box transparent",
          }}
        >
          <div>
            <p className="text-[23px] md:text-3xl font-[500] titleHomePage">
              Add Gauge
            </p>
            <p className="text-graytext md:text-[18px] text-[15px] sm:max-w-[340px]">
              Create a new gauge which can be used for staking and voting.
            </p>
            <div className="py-3 md:py-4"></div>
            <button
              style={{ letterSpacing: "1px", borderRadius: "2px" }}
              className="gradientbutton px-7 md:px-10 py-3 font-bold text-[15px] md:text-[18px]"
            >
              + ADD GAUGE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bribe;
