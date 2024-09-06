import React from "react";
import "./index.css";

const LiquidityPage = () => {
  return (
    <div className="max-w-[1200px] px-5 sm:px-16 md:px-28 mdLg:px-40 lg:px-5 xl:px-0 pt-20  md:pt-[120px] mx-auto">
      <div className="lg:flex items-end justify-between">
        <div className="max-w-[425px] w-full">
          <h1 className="text-[34px] md:text-[42px] font-semibold text-white  f-f-fg">
            Liquidity
          </h1>
          <p className="text-[#b8b6cb] text-base md:text-lg leading-[22px] md:leading-6 mt-1">
            Pair your tokens to provide liquidity. Stake the LP tokens to earn
            THE.
            <a href="#">
              <span className="!text-lg text-green">Learn more</span>
            </a>
          </p>
        </div>
        <div className="mt-3 lg:mt-0 w-full flex-col flex md:flex-row items-center lg:justify-end space-y-3 md:space-y-0 md:space-x-3 ">
          <button
            role={"button"}
            className={
              " fTxTIB f-f-fg transition-all duration-300 ease-in-out !font-semibold py-[13px] md:py-[14.53px] text-white w-full md:w-1/2 mdLg:w-auto flex items-center justify-center text-sm tracking-[0.84px] xl:text-[17px] md:tracking-[1.36px] px-[33px] lg:px-[43px] xl:px-[33px] rounded-[3px] !bg-white !bg-opacity-[0.33] !text-[#090333] cursor-not-allowed "
            }
          >
            CLAIM ALL EARNINGS
          </button>
          <div
            role={"button"}
            className={
              "sc-hLBbgP gGyKOW h-[42px] md:h-[52px] px-7 text-white lg:hidden flex flex-col items-center justify-center w-full md:w-1/2 mdLg:w-auto text-sm mdLg:text-[17px] tracking-[1.12px] md:tracking-[1.36px] f-f-fg bg-[#bd00ed1a] font-semibold "
            }
          >
            {"ADD/REMOVE LIQUIDITY"}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mt-[23px] lg:space-x-8 xl:space-x-[60px] relative">
        <div className="w-1/2 hidden lg:flex items-center space-x-8">
          <div className="flex items-center border-blue border w-full rounded-[10px] bg-[#0D1238] max-w-[360px] xl:max-w-[339px]">
            <div
              className="cursor-pointer w-1/3 h-[34px] md:h-10 rounded-[10px] flex items-center justify-center uppercase transition-all bg-blue text-white font-medium 
             md:tracking-[0.6px] text-[13px] lg:text-sm xl:text-[15px] f-f-fg"
            >
              ALL
            </div>
            <div
              className="cursor-pointer w-1/3 h-[34px] md:h-10 rounded-[10px] flex items-center justify-center uppercase transition-all text-dimGray 
             md:tracking-[0.6px] text-[13px] lg:text-sm xl:text-[15px] f-f-fg"
            >
              STABLE
            </div>
            <div
              className="cursor-pointer w-1/3 h-[34px] md:h-10 rounded-[10px] flex items-center justify-center uppercase transition-all text-dimGray 
            px-2 md:tracking-[0.6px] text-[13px] lg:text-sm xl:text-[15px] f-f-fg"
            >
              VOLATILE
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <label
              className="inline-flex relative items-center cursor-pointer"
              htmlFor={"isStake"}
            >
              <input type={"checkbox"} className={"sr-only peer"}></input>
              <div className="w-14 h-[30px] after:h-[26px] after:w-[26px] after:top-[1.5px] after:left-[2px] bg-[#A0A3B5] rounded-md after:rounded-md peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
            </label>
            <p className="text-[#DEDBF2] text-sm xl:text-[17px] whitespace-nowrap">
              Staked Only
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex lg:items-center space-x-3 lg:space-x-5">
          <div className="border border-blue w-full rounded-[3px] flex items-center lg:max-w-[250px] relative">
            <img
              className="pointer-events-none absolute left-3 w-6 h-6"
              src="https://thena.fi/images/svgs/search.svg"
            ></img>
            <input
              placeholder="Search Pair or Token"
              className="bg-body placeholder-[#757384] h-[42px] xl:h-[52px] w-full  text-white text-sm xl:text-base pl-10 xl:pl-[41px] pr-4 py-3 md:py-[18px] rounded-[3px]"
            ></input>
          </div>
          <div
            className="sc-hLBbgP gGyKOW h-[52px] px-3 xl:px-7 text-white hidden lg:flex flex-col items-center justify-center w-full text-sm xl:text-[17px] tracking-[1.04px] xl:tracking-[1.36px] f-f-fg bg-[#bd00ed1a] font-semibold "
            role={"button"}
          >
            ADD/REMOVE LIQUIDITY
          </div>
          <button className="w-12 flex-shrink-0 h-[42px] lg:hidden">
            <img
              className="w-12 h-[42px]"
              src="https://thena.fi/images/liquidity/filter.svg"
            ></img>
          </button>
        </div>
        <div className="invisible absolute w-full bg-[#101645] lg:hidden border-blue border rounded-[5px] p-3 z-50 top-14">
          <p className="text-white font-semibold f-f-fg text-xl mb-3">
            Filters
          </p>
          <div className="flex items-center border-blue border w-full rounded-[10px] bg-[#0D1238] max-w-[339px]">
            <div
              className="cursor-pointer w-1/3 h-[34px] md:h-10 rounded-[10px] flex items-center justify-center uppercase transition-all bg-blue text-white font-medium 
             md:tracking-[0.6px] text-[13px] lg:text-sm xl:text-[15px] f-f-fg"
            >
              ALL
            </div>
            <div
              className="cursor-pointer w-1/3 h-[34px] md:h-10 rounded-[10px] flex items-center justify-center uppercase transition-all text-dimGray 
             md:tracking-[0.6px] text-[13px] lg:text-sm xl:text-[15px] f-f-fg"
            >
              STABLE
            </div>
            <div
              className="cursor-pointer w-1/3 h-[34px] md:h-10 rounded-[10px] flex items-center justify-center uppercase transition-all text-dimGray 
             md:tracking-[0.6px] text-[13px] lg:text-sm xl:text-[15px] f-f-fg"
            >
              VOLATILE
            </div>
          </div>
          <div className="w-full flex items-center space-x-7 mt-4">
            <p className="text-white font-medium whitespace-nowrap">Sort by</p>
            <div className="max-w-[300px] w-full dropdownwrapper">
              <div>
                <div className="w-full flex items-center h-[42px] md:h-[52px] border border-blue rounded-[3px] bg-[#000045] bg-opacity-80 px-4 cursor-pointer">
                  <div className="w-full relative focus:outline-none py-2 bg-transparent rounded-[3px] text-white flex items-center justify-between">
                    <p className="text-white"></p>
                    <img
                      className="rotate-0 transform transition-all duration-300 ease-in-out"
                      src="https://thena.fi/images/swap/dropdown-arrow.png"
                    ></img>
                    <div className="bg-[#000045] w-full border z-[102] border-blue -right-4 top-12 md:top-14 absolute p-3.5 bg-clip-padding rounded-[3px]">
                      {[
                        "APR",
                        "Total Staked",
                        "My Pool",
                        "My Stake",
                        "Earnings",
                      ].map((el) => {
                        return (
                          <div key={el} className="z-[10]">
                            <p className="text-white text-base md:text-lg leading-7 tracking-wide">
                              {el}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <label
              htmlFor="pools"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input type={"checkbox"} className="sr-only peer"></input>
              <div className="w-[41.68px] h-[22px] after:h-[18px] after:w-[18px] after:top-[2px] after:left-[2px] bg-[#A0A3B5] rounded-md after:rounded-md peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:transition-all peer-checked"></div>
            </label>
            <p className="text-[#DEDBF2] text-[16px] whitespace-nowrap">
              Staked Only
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-11">
        <div className="w-full">
          <div className="sticky-outer-wrapper z-[100]"></div>
        </div>
      </div>
    </div>
  );
};

export default LiquidityPage;
