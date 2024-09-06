import React from "react";
import "./index.css";

const SwapPage = () => {
  return (
    <>
      <div className="w-full max-w-[588px] px-5 xl:px-0 mx-auto relative  pt-[140px] pb-28 xl:pb-0 2xl:pb-[150px]">
        <div>
          <div className="gradient-bg shadow-[0_0_50px_#48003d] p-px relative z-[10] rounded-[5px]">
            <div className="solid-bg rounded-[5px] px-3 md:px-6 py-3 md:py-4">
              <div className="flex items-center justify-between">
                <p className="f-f-fg text-[23px] md:text-[27px] leading-10 text-white font-semibold">
                  Swap
                </p>
                <button>
                  <img
                    alt=""
                    src={"https://thena.fi/images/swap/bar.svg"}
                  ></img>
                </button>
              </div>
              <div className="mt-3 md:mt-[26px]">
                <div className="flex flex-col w-full items-center justify-center">
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <p className="text-dimGray text-sm md:text-base leading-10">
                        From
                      </p>
                      <div className="flex items-center text-sm md:text-base space-x-3">
                        <div className="flex items-center space-x-2.5">
                          {["25", "50", "75", "100"].map((el) => {
                            return (
                              <div
                                key={el}
                                className="flex items-center justify-center bg-white bg-opacity-[0.08] round-[3px] text-white text-[13px] md:text-base w-[40px] md:w-[56px] h-[22px] md:h-[28px] cursor-pointer"
                              >
                                {el}%
                              </div>
                            );
                          })}
                        </div>
                        <p className="text-white">Balance: 0.001</p>
                      </div>
                    </div>
                    <div className="gradient-bg mt-1.5 md:mt-2.5 p-px w-full rounded-[3px]">
                      <div className="bg-body pr-3 rounded-[3px] flex items-center">
                        <input
                          className="bg-transparent !border-0 w-4/5 py-[8px] lg:py-[15px] pl-2.5 lg:pl-4 text-xl lg:text-2xl leading-10 placeholder-[#757384] text-white"
                          placeholder="0.00"
                          type={"number"}
                        ></input>
                        <div className="flex items-center ml-2 space-x-5 f-f-fg lg:space-x-8 cursor-pointer">
                          <div className="flex items-center space-x-[3.5px] lg:space-x-2 ">
                            <img
                              className="w-[28px] h-[28px]"
                              src="https://thena.fi/images/tokens/WBNB.png"
                            ></img>
                            <p className="font-medium text-sm lg:text-[1.2rem] leading-6 text-white">
                              BNB
                            </p>
                          </div>
                          <img src="https://thena.fi/images/swap/dropdown-arrow.png"></img>
                        </div>
                      </div>
                    </div>
                    <div className="fixed invisible z-[200] opacity-100 inset-0 w-full h-full transition-all duration-300 ease-in-out bg-opacity-[0.88] bg-body"></div>
                    <div className="z-[201] invisible opacity-100  w-full inset-0 fixed transition-all duration-300 ease-in-out flex items-center min-h-screen justify-center flex-col paraent">
                      <div>
                        {/*Dialog token*/}
                        <div className="max-w-[92%]   md:w-[540px]   mx-auto w-full py-3 md:py-5 bg-[#101645] rounded-lg border border-blue">
                          <div className="flex items-center justify-between px-3 md:px-6">
                            {/*Header*/}
                            <div className="flex items-center">
                              <p className="text-lg md:text-[22px] f-f-fg text-white font-semibold">
                                Select a token
                              </p>
                            </div>
                            <button className="focus:outline-none">
                              <img src="https://thena.fi/images/close-button1.svg"></img>
                            </button>
                          </div>
                          <div className="w-full">
                            {/*Search and common */}
                            <div className="px-3 md:px-6">
                              <div className="border border-blue w-full mt-3 rounded-[3px]">
                                <input
                                  placeholder="Search by name, symbol or address"
                                  className="bg-body placeholder-[#757384] h-14 w-full text-white text-base md:text-lg px-4 py-[18px] rounded-[3px]"
                                ></input>
                              </div>
                            </div>
                            <div className="w-full mt-3.5 md:mt-[18px] px-3 md:px-6">
                              <p className="text-[13px] md:text-sm tracking-[0.52px] md:tracking-[0.56px] f-f-fg text-dimGray mb-1">
                                COMMON TOKENS
                              </p>
                              <div className="flex flex-wrap md:-mx-3">
                                {[1, 2, 3, 4, 5, 6].map((el) => {
                                  return (
                                    <div key={el}>
                                      <div className="px-2 md:px-3 cursor-pointer py-1 md:py-1.5 border m-[5px] flex items-center space-x-[5px] border-[#343434] rounded-xl cursor-pointer hover:bg-body">
                                        <img
                                          width={28}
                                          height={28}
                                          src={
                                            "https://thena.fi/images/tokens/USDC.png"
                                          }
                                        ></img>
                                        <p className="text-sm md:text-base text-white f-f-fg">
                                          USDC
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="w-full mt-3">
                            {/*List token*/}
                            <div className="flex justify-between text-[13px] md:text-sm tracking-[0.52px] md:tracking-[0.56px] f-f-fg text-dimGray mb-1 px-3 md:px-6">
                              <span>TOKEN NAME</span>
                              <span>BALANCE</span>
                            </div>
                            <div className="w-full mt-3 md:mt-[13px] max-h-[340px] overflow-auto">
                              {[
                                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                              ].map((el) => {
                                return (
                                  <div
                                    key={el}
                                    className="flex items-center justify-between py-[6px] px-3 md:px-6 cursor-pointer hover:bg-body"
                                  >
                                    <div className="flex items-center space-x-2.5 md:space-x-3">
                                      <img
                                        src="https://thena.fi/images/tokens/USDC.png"
                                        className="flex-shrink-0"
                                        width={28}
                                        height={28}
                                        loading="lazy"
                                      ></img>
                                      <div>
                                        <p className="text-white text-sm md:text-base f-f-fg">
                                          USDC
                                        </p>
                                        <p className="text-[13px] md:text-sm tracking-[0.52px] text-dimGray">
                                          USD Coin
                                        </p>
                                      </div>
                                    </div>
                                    <p className="text-sm md:text-base text-white">
                                      1
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
                  <button className="focus:outline-none mt-5 z-[8]">
                    <img src="https://thena.fi/images/swap/reverse-icon.svg"></img>
                  </button>
                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <p className="text-dimGray text-sm md:text-base leading-10">
                        From
                      </p>
                      <div className="flex items-center text-sm md:text-base space-x-3">
                        <p className="text-white">Balance: 0.001</p>
                      </div>
                    </div>
                    <div className="gradient-bg mt-1.5 md:mt-2.5 p-px w-full rounded-[3px]">
                      <div className="bg-body pr-3 rounded-[3px] flex items-center">
                        <input
                          className="bg-transparent !border-0 w-4/5 py-[8px] lg:py-[15px] pl-2.5 lg:pl-4 text-xl lg:text-2xl leading-10 placeholder-[#757384] text-white"
                          placeholder="0.00"
                          type={"number"}
                        ></input>
                        <div className="flex items-center ml-2 space-x-5 f-f-fg lg:space-x-8 cursor-pointer">
                          <div className="flex items-center space-x-[3.5px] lg:space-x-2 ">
                            <img
                              className="w-[28px] h-[28px]"
                              src="https://thena.fi/images/tokens/WBNB.png"
                            ></img>
                            <p className="font-medium text-sm lg:text-[1.2rem] leading-6 text-white">
                              BNB
                            </p>
                          </div>
                          <img src="https://thena.fi/images/swap/dropdown-arrow.png"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <p className="text-white text-sm md:text-base leading-5">
                    Slippage Tolerance
                  </p>
                  <p className="text-white text-sm md:text-base leading-5">
                    0.5%
                  </p>
                </div>
              </div>
              <button
                role={"button"}
                className="sc-dkrFOg dpNqdk f-f-fg transition-all duration-300 ease-in-out !font-semibold py-[13px] md:py-[14.53px] text-white mt-2 md:mt-5 text-base md:text-lg tracking-[1.12px] md:tracking-[1.44px] flex items-center justify-center leading-[30px] px-[19px] w-full rounded-[3px] "
              >
                SWAP
              </button>
              <div className="flex items-center justify-between mt-3">
                <p className="text-white text-sm md:text-base leading-5">
                  Price:{" "}
                </p>
                <div className="flex items-center space-x-1.5">
                  <p className="text-white text-sm md:text-base leading-5">
                    0.001 BNB per THE
                  </p>
                  <button>
                    <img src="https://thena.fi/images/swap/reverse-small-icon.png"></img>
                  </button>
                </div>
              </div>
              <div className="mt-[0.3rem]">
                <div className="flex items-center justify-between">
                  <p className="text-white text-sm md:text-base leading-5">
                    Minimum Receive:{" "}
                  </p>
                  <p className="text-white text-sm md:text-base leading-5">
                    0.375 THE
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-[0.3rem]">
                <p className="text-white text-sm md:text-base leading-5">
                  Route:{" "}
                </p>
              </div>
              <div className="flex relative items-center mt-7 justify-between">
                <img
                  className="z-10 w-7 sm:w-[38px] -ml-0.5 sm:-ml-1"
                  src="https://thena.fi/images/tokens/WBNB.png"
                ></img>
                <div className="relative flex flex-col items-center">
                  <p className="text-[13px] md:text-sm text-white absolute -top-7">
                    Stable
                  </p>
                  <img
                    className="z-10 w-[18px] sm:w-6"
                    src="https://thena.fi/images/swap/route-arrow.svg"
                  ></img>
                </div>
                <img
                  className="z-10 w-7 sm:w-[38px] -mr-0.5 sm:-mr-1"
                  src="https://thena.fi/logo.png"
                ></img>
                <div className="border-custom w-full h-0.5  absolute"></div>
              </div>
            </div>
            <div className="invisible md:max-w-[540px] absolute z-20 w-full px-3 md:px-[30px] pt-[17px] pb-[24px] md:py-5 bg-[#101645] rounded-lg -ml-3 md:-ml-6 lg:ml-0 border top-14 border-blue">
              {/* Dialog slipage*/}
              <p className="text-dimGray f-f-fg text-[13px] md:text-sm">
                TRANSACTION SETTING
              </p>
              <div className="flex items-center space-x-1.5 mt-[17px] md:mt-[18px]">
                <p className="text-base md:text-[19px] !font-normal text-[#DEDBF2]">
                  Slippage Tolerance
                </p>
                <img src="https://thena.fi/images/swap/question-mark.png"></img>
              </div>
              <div className="md:flex items-center mt-[13px] w-full">
                <div className="flex items-center space-x-[11px] z-10 w-full">
                  {["0.1", "0.5", "1"].map((el) => {
                    return (
                      <button
                        key={el}
                        className="bg-body focus:bg-blue max-w-[84px] md:max-w-[100px] flex-shrink-0 hover:bg-blue w-full rounded-full flex flex-col items-center justify-center text-base md:text-lg text-white h-10 md:h-[42px] cursor-pointer"
                      >
                        {el} %
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center space-x-[9px] w-full mt-[11px] md:mt-0 md:justify-end">
                  <input
                    className="placeholder-dimGray max-w-[106.47px] bg-body w-full h-[52px] rounded-full text-white pl-5 pr-2 text-lg !border !border-blue focus:!border-[2px] block focus-visible:!outline-none"
                    type={"number"}
                    min={"0"}
                    max={"50"}
                  ></input>
                  <span className="text-lg text-white">%</span>
                </div>
              </div>
              <div className="w-full mt-6 md:mt-5">
                <div className="flex items-center space-x-1.5">
                  <p className="text-[#DEDBF2] text-base md:text-[19px] leading-5 !font-normal">
                    Transaction deadline
                  </p>
                  <img src="https://thena.fi/images/swap/question-mark.png"></img>
                </div>
                <div className="flex items-center space-x-[9px] mt-[9px]">
                  <input
                    className="placeholder-dimGray max-w-[106.47px] bg-body w-full h-[52px] rounded-full text-white pl-5 pr-2 text-lg !border !border-blue focus:!border-[2px] block focus-visible:!outline-none"
                    type={"number"}
                    min={"0"}
                    max={"50"}
                  ></input>
                  <span className="text-lg text-white">minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwapPage;
