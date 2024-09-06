import React from "react";
import { useNavigate } from "react-router-dom";
import how4 from "src/assets/how-4.svg";
import how5 from "src/assets/how-5.svg";
import Tooltip from "src/components/Tooltip";

const GaugesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ height: "100px" }}></div>
      <div className="flex items-center justify-center h-screen">
        <Tooltip text="Hello World!">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Hover me
          </button>
        </Tooltip>
      </div>
      <div className="max-w-3xl min-[1150px]:max-w-7xl mx-0 mx-auto md:px-10 px-5">
        <p className="text-[34px] md:text-[42px] font-semibold py-1">Gauges</p>
        <div className="flex flex-wrap">
          <p className="text-[16px] md:text-[20px] text-graytext">
            Create a new Gauge or add a bribe on existing gauge.
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://thena.gitbook.io/thena/"
            className="text-[16px] md:text-[20px] text-skygreen"
          >
            &nbsp;Learn More
          </a>
        </div>
        <div className="py-5"></div>
        <div className="flex flex-wrap gap-6">
          <div className="gradientBox-nomargin rounded-md grow">
            <div
              className="p-5 md:p-8 flex md:flex-nowrap flex-wrap gap-5 items-start rounded-md"
              style={{
                background:
                  "linear-gradient(90deg, rgb(29, 2, 59) 0%, rgb(23, 2, 62) 100%) 0% 0% no-repeat padding-box padding-box transparent",
              }}
            >
              <img src={how4} />
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
                  onClick={() => navigate("/whitelist/gauge")}
                >
                  + ADD GAUGE
                </button>
              </div>
            </div>
          </div>
          <div className="gradientBox-nomargin rounded-md grow">
            <div
              className="p-5 md:p-8 flex md:flex-nowrap flex-wrap gap-5 items-start rounded-md"
              style={{
                background:
                  "linear-gradient(90deg, rgb(29, 2, 59) 0%, rgb(23, 2, 62) 100%) 0% 0% no-repeat padding-box padding-box transparent",
              }}
            >
              <img src={how5} />
              <div>
                <p className="text-[23px] md:text-3xl font-[500] titleHomePage">
                  Add Bribe
                </p>
                <p className="text-graytext md:text-[18px] text-[15px] sm:max-w-[340px]">
                  Add a bribe reward for an existing gauge to incentivize votes
                  on it.
                </p>
                <div className="py-3 md:py-4"></div>
                <div className="gradientbutton" style={{ padding: "1px" }}>
                  <button
                    style={{ letterSpacing: "1px", backgroundColor: "#2a024e" }}
                    className="bg-violetbackground px-7 md:px-10 py-3 font-bold text-[15px] md:text-[18px]"
                    onClick={() => navigate("/whitelist/bribe")}
                  >
                    + ADD BRIBE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GaugesPage;
