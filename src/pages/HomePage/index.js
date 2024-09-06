import React from "react";
import vid from "src/assets/videointro.mp4";
import { AiOutlineRight } from "react-icons/ai";
import bgdetail from "src/assets/detail-bg.webp";
import statue1 from "src/assets/statue-1.webp";
import statue2 from "src/assets/statue-2.webp";
import statue3 from "src/assets/statue-3.webp";
import spear from "src/assets/spear.svg";
import howitworkbg from "src/assets/how-it-works-bg.svg";
import bottom1 from "src/assets/bottom1.webp";
import bottom2 from "src/assets/bottom2.webp";
import bottom3 from "src/assets/bottom3.webp";
import team1 from "src/assets/team-1.webp";
import team2 from "src/assets/team-2.webp";
import team3 from "src/assets/team-3.webp";
import team4 from "src/assets/team-4.webp";
import team5 from "src/assets/team-5.webp";
import team6 from "src/assets/team-6.webp";
import team7 from "src/assets/team-7.webp";
import team8 from "src/assets/team-8.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import HowItWorks from "./HowItWorks";
import { numberWithCommas } from "src/utils";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const teamdata = [
  {
    img: team1,
    symbol: "Theseus",
    role: "Founder",
    content:
      "DeFi native, self-appointed tokenomist. Started as a consultant in web3 back in early 2020, and quickly realized he wanted to build his own systems. Always keen on engaging with the citizens of THENA. Together we build.",
  },
  {
    img: team2,
    symbol: "0xApollo",
    role: "Head of Marketing",
    content:
      "DeFi maven with over a decade of experience in various industries. Inspired by the god of truth and prophecy. Passionate about seeking higher knowledge. Claims to live in a simulation.",
  },
  {
    img: team3,
    symbol: "Xermes",
    role: "Community Manager",
    content:
      "Enjoys turning chaos into functional organizations. Believes in direct communication, hates misinformation. Wandering around DeFi playgrounds for a while. Famous for herding the cats.",
  },
  {
    img: team4,
    symbol: "Theonysus",
    role: "Partnerships Lead",
    content:
      "Son of Zeus and a Thenian, Theonysus studied the ancient economics and worked in the banking industry within the realm of gods. Keen to renew with his maternal roots and aware of the revolution, he left the realm to serve THENA.",
  },
  {
    img: team5,
    symbol: "Prometheus",
    role: "Lead Solidity Developer",
    content:
      "Security minded master of smart contract engineering. Best known for defying the gods by stealing fire from them and giving it to humanity in the form of technology, knowledge, and civilization. He is also credited with the creation of humanity from clay.",
  },
  {
    img: team6,
    symbol: "Hyperion",
    role: "Full Stack Developer",
    content:
      "A wizard of all things web, now building THENA inside and out. Stacking sats with the gods since the birth of Bitcoin.",
  },
  {
    img: team7,
    symbol: "Theseus",
    role: "Founder",
    content: "Legend of the ancient world and rumored ruler of the cosmos.",
  },
  {
    img: team8,
    symbol: "Morpheus",
    role: "Strategic Advisor",
    content:
      "Web3 native, founder & advisor. Morpheus is the ancient Greek god of dreams. The myth says that he would appear in people’s dreams and convey messages from the Thenian gods.",
  },
];

const introData = [
  {
    name: "TOTAL VALUE LOCKED",
    value: numberWithCommas(121314376),
  },
  {
    name: "CALCULATING MARKET CAP",
    value: numberWithCommas(9399861),
  },
  {
    name: "CIRCULATING SUPPLY",
    value: numberWithCommas(20259858),
  },
  {
    name: "THE PRICE",
    value: numberWithCommas(0.463),
  },
  {
    name: "24 HOUR VOLUME",
    value: numberWithCommas(43462745),
  },
  {
    name: "TOTAL LOCKED THE",
    value: numberWithCommas(24588775),
  },
  {
    name: "EPOCH TIMER",
    value: "6d 11h 19m",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  // Fetch 1 lần đống intro data là xong

  return (
    <>
      <video autoPlay playsInline loop muted>
        <source src={vid} type="video/mp4"></source>
      </video>
      <div
        className="max-w-md sm:max-w-2xl md:max-w-[1050px] mx-0 mx-auto px-3"
        style={{ transform: "translateY(-60px)" }}
      >
        <div className="gradientBox rounded-md">
          <div className="p-5 lg:p-10 flex flex-wrap gap-5 bg-violetbackground items-center justify-center rounded-md">
            <p
              className="text-center font-[500] text-xl md:text-3xl lg:text-4xl"
              style={{ textShadow: "0 0 33px #9592a7" }}
            >
              The Native Liquidity Layer On BNB.
            </p>
            <button className="font-semibold buttonSkewFancy flex gap-3 items-center py-[10px] px-[20px] md:py-[10px] md:px-[30px] lg:py-[12px] lg:px-[40px]">
              <p
                className="whitespace-nowrap text-sm md:text-base"
                onClick={() => navigate("/swap")}
              >
                SWAP NOW
              </p>
              <AiOutlineRight />
            </button>
          </div>
        </div>
        <div className="py-7"></div>
        <div className="flex flex-wrap justify-center gap-4">
          {introData.map((d) => (
            <div
              key={d.name}
              className="relative w-[242px] min-h-[95px] bg-no-repeat bg-center flex flex-col items-center justify-center"
              style={{ backgroundImage: `url(${bgdetail})` }}
            >
              <p className="text-skygreen tracking-wide font-semibold text-sm">
                {d.name}
              </p>
              <p className="md:text-[32px] text-[22px] font-semibold">
                {d.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-md sm:max-w-2xl md:max-w-4xl mx-0 mx-auto px-5 flex flex-col gap-16">
        <div className="flex gap-10 flex-wrap lg:flex-nowrap items-center justify-center flex-row-reverse">
          <img className="lg:max-w-[50%]" src={statue1} />
          <div>
            <p className="text-[27px] md:text-[42px] font-[500] titleHomePage">
              Swap Your Tokens
            </p>
            <p className="text-[27px] md:text-[42px] font-[500]">
              With Low Slippage
            </p>
            <p className="text-graytext text-base md:text-lg">
              Thena’s smart routing, deep liquidity, and latest AMM technology
              allow you to enjoy low slippage and high return when swapping one
              cryptocurrency for another.
            </p>
            <div
              className="flex gap-3 items-center mt-5 group cursor-pointer"
              onClick={() => navigate("/swap")}
            >
              <p className="text-xl text-skygreen font-medium">Swap Now</p>
              <img
                className="group-hover:scale-125 origin-left transition-all duration-300"
                src={spear}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-5 justify-center">
          <img className="lg:max-w-[50%]" src={statue2} />
          <div>
            <p className="text-[27px] md:text-[42px] font-[500] titleHomePage">
              Stake and Earn
            </p>
            <p className="text-[27px] md:text-[42px] font-[500]">
              Passive Income
            </p>
            <p className="text-graytext text-base md:text-lg">
              Stake your assets for instant passive income streams. No deposit
              or withdrawal fees. You have full control over your funds.
            </p>
            <div
              className="flex gap-3 items-center mt-5 group cursor-pointer"
              onClick={() => navigate("/liquidity")}
            >
              <p className="text-xl text-skygreen font-medium">Start Staking</p>
              <img
                className="group-hover:scale-125 origin-left transition-all duration-300"
                src={spear}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 justify-center flex-row-reverse">
          <img className="lg:max-w-[45%]" src={statue3} />
          <div>
            <p className="text-[27px] md:text-[42px] font-[500] titleHomePage">
              Liquidity Layer
            </p>
            <p className="text-[27px] md:text-[42px] font-[500]">
              for BNB Chain
            </p>
            <p className="text-graytext text-base md:text-lg">
              Thena was designed to onboard the next generation of protocols to
              the BNB chain by opening up a free market for THE emissions.
              Protocols can bribe veTHE holders or acquire veTHE to redirect
              emissions to their pools, offering a flexible and capital
              efficient solution to bootstrap and scale liquidity.
            </p>
            <div
              className="flex gap-3 items-center mt-5 group cursor-pointer"
              onClick={() => navigate("/vote")}
            >
              <p className="text-xl text-skygreen font-medium">Go Vote</p>
              <img
                className="group-hover:scale-125 origin-left transition-all duration-300"
                src={spear}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10"></div>

      <div
        style={{
          backgroundImage: `url(${howitworkbg})`,
          minHeight: "513px",
        }}
        className="bg-no-repeat bg-cover w-full bg-top"
      >
        <p className="text-center text-[27px] md:text-[42px] font-[500] titleHomePage">
          How It Works
        </p>
        <HowItWorks />
      </div>

      <div className="py-10"></div>
      <div className="max-w-md sm:max-w-2xl md:max-w-4xl mx-0 mx-auto px-5 flex flex-col gap-16">
        <div className="flex gap-3 flex-wrap lg:flex-nowrap items-center justify-center">
          <img className="lg:max-w-[55%]" src={bottom1} />
          <div>
            <p className="text-[27px] md:text-[42px] font-[500] titleHomePage">
              {"Novel ve(3,3)"}
            </p>
            <p className="text-[27px] md:text-[42px] font-[500]">Tokenomics</p>
            <p className="text-graytext text-base md:text-lg">
              Inspired by the vote-escrow model from Curve and the anti-dilution
              mechanism from Olympus, veTHE holders control 100% of Thena’s
              emissions allocated to gauges and benefit from weekly rebases,
              reducing dilution from emissions over time. THE Model rewards
              long-term supporters, and aligns stakeholders interests by
              incentivizing fee generation.
            </p>
            <a
              className="flex gap-3 items-center mt-5 group cursor-pointer"
              href="https://thena.gitbook.io/then"
              target={"_blank"}
              rel="noreferrer"
            >
              <p className="text-xl text-skygreen font-medium">Learn More</p>
              <img
                className="group-hover:scale-125 origin-left transition-all duration-300"
                src={spear}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-5 justify-center flex-row-reverse">
          <img className="lg:max-w-[45%]" src={bottom2} />
          <div>
            <p className="text-[27px] md:text-[42px] font-[500] titleHomePage">
              A Community-Owned
            </p>
            <p className="text-[27px] md:text-[42px] font-[500]">Protocol</p>
            <p className="text-graytext text-base md:text-lg">
              No VCs, no seed round. THENA had a decentralized distribution that
              targeted regular users of core protocols on the BNB chain and
              supported protocols that intend to leverage THENA to build their
              liquidity. The novel NFT fundraising mechanism allows us to
              incentivize best practices from stakeholders and bootstrap an
              amazing community of Thenians without the need to sell tokens at
              discounts.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
          <div className="lg:w-2/5">
            <img className="mx-auto" src={bottom3} />
          </div>
          <div className="lg:w-3/5">
            <p className="text-[27px] md:text-[42px] font-[500] titleHomePage">
              Low Fee Hybrid
            </p>
            <p className="text-[27px] md:text-[42px] font-[500]">vAMM/ sAMM</p>
            <p className="text-graytext text-base md:text-lg">
              With fees ranging from 0.04% for stable pools to 0.2% for variable
              pools, THENA allows traders to execute trades with minimal
              slippage. Executing a trade will follow the cheapest route based
              on available liquidity in the pools, with trading fees incurred.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20"></div>

      <div
        className="mx-0 mx-auto px-3 max-w-[100%] xl:max-w-6xl px-7"
        style={{ transform: "translateY(-60px)" }}
      >
        <p className="text-[27px] md:text-[42px] font-[500] titleHomePage">
          Team
        </p>
        <div className="py-5"></div>
        <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid gap-y-11 gap-x-6 hidden">
          {teamdata.map((t) => (
            <div key={t.symbol}>
              <img src={t.img} />
              <p className="mt-5 text-[27px] font-[500]">{t.symbol}</p>
              <p className="text-skygreen text-xl mt-1">{t.role}</p>
              <p className="text-base text-graytext mt-2">{t.content}</p>
            </div>
          ))}
        </div>
        <div className="sm:hidden">
          <Slider {...settings}>
            {teamdata.map((t) => (
              <div key={t.symbol}>
                <img src={t.img} />
                <p className="mt-5 text-[27px] font-[500]">{t.symbol}</p>
                <p className="text-skygreen text-xl mt-1">{t.role}</p>
                <p className="text-base text-graytext mt-2">{t.content}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="max-w-md sm:max-w-2xl md:max-w-4xl mx-0 mx-auto px-3">
        <div className="gradientBox rounded-md">
          <div className="md:p-5 p-3 lg:p-8 flex gap-5 bg-violetbackground items-center sm:justify-between rounded-md flex-wrap sm:flex-nowrap justify-center">
            <div className="sm:max-w-[340px] text-center sm:text-left">
              <p className="text-[27px] md:text-[42px] font-[500] titleHomePage">
                Start Now
              </p>
              <p className="text-[18px] text-graytext">
                Start build your passive income streams right away.
              </p>
              <p className="text-[18px] text-graytext font-bold">
                No registration required.
              </p>
            </div>
            <button className="font-semibold buttonSkewFancy flex gap-3 items-center py-[10px] px-[20px] md:py-[10px] md:px-[30px] lg:py-[12px] lg:px-[40px]">
              <p
                className="whitespace-nowrap text-sm md:text-base"
                onClick={() => navigate("/swap")}
              >
                SWAP NOW
              </p>
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
