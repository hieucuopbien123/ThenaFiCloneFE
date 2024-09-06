import React, { useState } from "react";
import how1 from "src/assets/how-1.svg";
import how2 from "src/assets/how-2.svg";
import how3 from "src/assets/how-3.svg";
import how4 from "src/assets/how-4.svg";
import how5 from "src/assets/how-5.svg";
import how6 from "src/assets/how-6.svg";

const howitdata = [
  {
    img: how1,
    title: "Lock THE Token",
    subTitle: "and Receive veTHE",
    detail:
      "Lock THE for up to 2 years to receive vote-escrowed THE (veTHE). The longer the lock, the more veTHE you receive.",
  },
  {
    img: how2,
    title: "Use veTHE to Vote",
    subTitle: "for Your Favorite Pools",
    detail:
      "veTHE gives you the power to decide which pools should receive THE emissions.",
  },
  {
    img: how3,
    title: "Receive Bribes",
    subTitle: "and Trading Fees",
    detail:
      "Voting for a pool lets you claim a share of the weekly bribes and trading fees.",
  },
  {
    img: how4,
    title: "Request Gauge",
    subTitle: "Whitelisting",
    detail:
      "Protocols that seek to open a gauge to be voted on have to request a whitelisting by presenting a proposal.",
  },
  {
    img: how5,
    title: "Create a Bribe With",
    subTitle: "Few Clicks",
    detail:
      "Once the gauge has been initiated, anyone can bribe it with just a few clicks. Bribes are set per epoch, which lasts for 7 days.",
  },
  {
    img: how6,
    title: "Receive Emissions",
    subTitle: "From veTHE Holders Votes",
    detail:
      "The emissions are distributed to the gauges for the new epoch based on votes from veTHE holders.",
  },
];

const HowItWorks = () => {
  const [showVe, setShowVe] = useState(true);
  return (
    <>
      <p className="text-center text-graytext mt-4 text-[20px]">
        {showVe
          ? "Control Thena's destiny by locking into veTHE."
          : "Control Thena’s emissions by locking into veTHE"}
      </p>
      <div className="flex items-center justify-center mt-4 gap-10">
        <button
          style={{
            border: "1px solid white",
            borderRadius: "8px",
            opacity: showVe ? 1 : 0.7,
          }}
          className="py-1 min-w-[150px]"
          onClick={() => setShowVe(true)}
        >
          veTHE Holders
        </button>
        <button
          style={{
            border: "1px solid white",
            borderRadius: "8px",
            opacity: showVe ? 0.7 : 1,
          }}
          className="py-1 min-w-[150px]"
          onClick={() => setShowVe(false)}
        >
          Protocols
        </button>
      </div>
      <div className="py-5"></div>

      <div style={{ minHeight: "500px" }}>
        <div className="w-[90%] mx-auto p-5 scrollbarcustom">
          <div
            className="flex mx-auto gap-5 justify-center"
            style={{ width: "fit-content" }}
          >
            {howitdata.slice(showVe ? 0 : 3, showVe ? 3 : 6).map((d, index) => (
              <div
                key={d.title}
                className="min-[815px]:p-5 p-3 lg:p-8 bg-violetbackground max-w-[350px] min-w-[200px]"
                style={{
                  border: "1px solid #b900d7",
                  boxShadow: "0 0 50px #48003d",
                  flex: "1 1 0px",
                }}
              >
                <p
                  className="text-[20px]"
                  style={{ textShadow: "0 0 15px #fff" }}
                >
                  STEP {index + 1}
                </p>
                <img
                  className="pb-4 pt-6"
                  style={{
                    filter: "drop-shadow(0 0 15px #8e93ff)",
                    minHeight: "123px",
                  }}
                  src={d.img}
                />
                <p
                  className="text-[20px] md:text-[27px] titleHomePage font-[500]"
                  style={{ lineHeight: "35px" }}
                >
                  {d.title}
                </p>
                <p
                  className="text-[20px] md:text-[27px] font-[500]"
                  style={{ lineHeight: "35px" }}
                >
                  {d.subTitle}
                </p>
                <p className="text-graytext md:text-[16px] text-[14px] mt-1 leading-5">
                  {d.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
