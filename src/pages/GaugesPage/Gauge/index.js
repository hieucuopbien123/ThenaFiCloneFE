import { useWeb3Modal } from "@web3modal/react";
import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { Button, Modal } from "flowbite-react";
import { GrClose } from "react-icons/gr";

const Gauge = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount();
  const { open } = useWeb3Modal();
  const [isOpen, setIsOpen] = useState(false);
  const confirm = () => {
    console.log("Confirm");
  };
  return (
    <>
      <div style={{ height: "100px" }}></div>
      <div className="max-w-3xl min-[1150px]:max-w-7xl mx-0 mx-auto md:px-10 px-5">
        <div className="gradientBox-nomargin rounded-md grow max-w-[595px] mx-0 mx-auto">
          <div
            className="p-5 flex md:flex-nowrap flex-wrap items-start rounded-md w-full"
            style={{
              background:
                "linear-gradient(90deg, rgb(29, 2, 59) 0%, rgb(23, 2, 62) 100%) 0% 0% no-repeat padding-box padding-box transparent",
            }}
          >
            <div className="w-full">
              <div className="flex gap-8 items-center">
                <button onClick={() => navigate(-1)}>
                  <BsArrowLeft fontSize={"30px"} color={"#26fffe"} />
                </button>
                <p className="text-[23px] md:text-[27px] font-[500]">
                  Add Gauge
                </p>
              </div>
              <div className="py-5"></div>
              {isConnected && (
                <button
                  onClick={() => open()}
                  style={{ letterSpacing: "1px", borderRadius: "2px" }}
                  className="buttonFancy w-full px-7 md:px-10 py-3 font-bold text-[15px] md:text-[18px]"
                >
                  CONNECT WALLET
                </button>
              )}
              {!isConnected && (
                <>
                  <p className="text-graytext">Choose Pool</p>
                  <div className="py-1"></div>
                  <div
                    className="gradientBox-nomargin-noshadow"
                    style={{ borderRadius: "2px" }}
                  >
                    <button
                      className="w-full"
                      style={{ borderRadius: "2px" }}
                      onClick={() => setIsOpen(true)}
                    >
                      <div
                        className="flex justify-between items-center p-2 pl-5"
                        style={{
                          background:
                            "linear-gradient(90deg, rgb(29, 2, 59) 0%, rgb(23, 2, 62) 100%) 0% 0% no-repeat padding-box padding-box transparent",
                        }}
                      >
                        <div className="relative flex items-center gap-3">
                          <img
                            className="w-8 absolute"
                            src="https://thena.fi/images/tokens/ETH.png"
                          />
                          <img
                            className="w-8 h-8 ml-6"
                            src="https://thena.fi/logo.png"
                          />
                          <div>
                            <div className="text-base md:text-[19px] font-medium leading-5 md:leading-[30px]">
                              ETH/THE
                            </div>
                            <div>VOLATILE</div>
                          </div>
                        </div>
                        <AiOutlineDown />
                      </div>
                    </button>
                  </div>
                  <div className="py-2"></div>
                  <button
                    style={{ letterSpacing: "1px", borderRadius: "2px" }}
                    className="buttonFancy w-full px-7 md:px-10 py-4 font-bold text-[15px] md:text-[18px]"
                    onClick={confirm}
                  >
                    CONFIRM
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal dismissible={true} show={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Body
          className="p-5"
          style={{
            border: "1px solid #0000af",
            borderRadius: "5px",
            backgroundColor: "#101645",
          }}
        >
          <div className="flex justify-between">
            <p style={{ color: "white" }} className="text-2xl font-semibold">
              Select a Pool
            </p>
            <div style={{ borderRadius: "50%" }}>
              <img src="https://thena.fi/images/close-button1.svg" />
            </div>
          </div>
          <div className="py-3"></div>
          {/* <input className="p-3" placeholder="Search by name, symbol or address" style={{border: "1px solid #0000af"}}/> */}
          <input
            placeholder="Search by name, symbol or address"
            className="bg-violetbackground placeholder-[#757384] h-14 w-full text-white text-base md:text-lg px-4 py-[18px] rounded-[3px]"
            style={{ border: "1px solid #0000af" }}
          />
          <div className="py-3"></div>
          <p className="text-graytext">POOL NAME</p>
          <div className="py-2"></div>
          <div>
            <button></button>
          </div>
        </Modal.Body>
      </Modal>
      <div className="py-20"></div>
    </>
  );
};

export default Gauge;
