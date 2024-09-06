import React, { useEffect, useState } from "react";
import routes from "src/configs/routes";
import { Link, matchRoutes, NavLink, useLocation } from "react-router-dom";
import { BsChevronDown } from "react-icons/bs";
import { Web3Button, useWeb3Modal } from "@web3modal/react";
import { CgMenuRightAlt } from "react-icons/cg";
import logotop from "src/assets/logotop.svg";
import closebutton from "src/assets/close-button.svg";
import bgtopdrawer from "src/assets/top-bg-drawer.png";
import bgpattern from "src/assets/bg-pattern.webp";
import { useAccount } from "wagmi";
import { formatAddress } from "src/utils";

const Header = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const location = useLocation();
  const [solid, setSolid] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const handleScroll = () => {
    if (window.scrollY <= 50) {
      setSolid(false);
    } else if (window.scrollY > 50) {
      setSolid(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header
        style={{ backgroundColor: solid ? "#090333" : "transparent" }}
        className="w-full fixed z-20 pl-4 pr-7 py-5 flex items-center justify-between gap-3 transition-all duration-700"
      >
        <Link to="/">
          <img
            src={logotop}
            className="w-36"
            style={{ filter: "drop-shadow(0 0 25px #a0008f)" }}
          />
        </Link>
        <div className="flex items-center gap-7 opacity-95 text-lg hidden xl:inline-flex">
          {routes.map((route) => (
            <div key={route.id}>
              {route.children ? (
                <>
                  <div className="flex gap-2 items-center group relative">
                    <div>{route.title}</div>
                    <BsChevronDown className="group-hover:rotate-180 transition duration-150" />
                    <div className="group-hover:inline hidden absolute top-3">
                      <div className="border-[1px] p-5 rounded-lg border-blueswitch mt-7 flex flex-col gap-2">
                        {route.children.map((child) =>
                          child.externalLink ? (
                            <a
                              key={child.id}
                              target="_blank"
                              href={child.externalLink}
                              rel="noreferrer"
                            >
                              {child.title}
                            </a>
                          ) : (
                            <NavLink
                              key={child.id}
                              className={({ isActive }) =>
                                (isActive
                                  ? "text-skygreen font-semibold"
                                  : "") + " hover:text-skygreen"
                              }
                              to={child.navLink}
                            >
                              {child.title}
                            </NavLink>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    (isActive ? "text-skygreen font-semibold" : "") +
                    " hover:text-skygreen"
                  }
                  to={route.navLink}
                >
                  {route.title}
                </NavLink>
              )}
            </div>
          ))}
        </div>
        <button
          className="hidden xl:block py-2 px-6 border-[1.5px] tracking-[2px] bg-[#bd00ed1a] font-semibold whitespace-nowrap"
          style={{
            borderImageSlice: 1,
            borderImageSource: "linear-gradient(to left, #7d067f, #a50498)",
          }}
          onClick={() => open()}
        >
          {isConnected ? formatAddress(address) : "CONNECT WALLET"}
        </button>
        <button
          className="block xl:hidden opacity-80"
          onClick={() => setOpen(true)}
        >
          <CgMenuRightAlt size={"40px"} fontWeight="light" />
        </button>
      </header>
      <div
        className="p-5 bg-violetbackground fixed top-0 left-0 right-0 z-30 right-0 h-full w-full transition-all duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${bgpattern})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          transform: isOpen ? "translateY(0%)" : "translateY(-100%)",
          backgroundSize: "contain",
        }}
      >
        <div className="relative">
          <div className="flex justify-between items-center absolute w-full z-40">
            <Link to="/" onClick={() => setOpen(false)}>
              <img src={logotop} />
            </Link>
            <button onClick={() => setOpen(false)}>
              <img src={closebutton} />
            </button>
          </div>
        </div>
        <img
          className="absolute"
          style={{ bottom: 0, left: 0 }}
          src={bgtopdrawer}
        />
        <div className="relative flex gap-4 w-full items-center flex-col h-full justify-center">
          {routes.map((route) => (
            <div key={route.id}>
              {route.children ? (
                <div className="flex gap-2 items-center group relative">
                  <div>{route.title}</div>
                  <BsChevronDown className="group-hover:rotate-180 transition duration-150" />
                  <div className="group-hover:inline hidden absolute z-50">
                    <div className="bg-violetbackground border-[1px] p-5 rounded-lg mb-20 ml-20 border-blueswitch flex flex-col gap-2">
                      {route.children.map((child) =>
                        child.externalLink ? (
                          <a
                            key={child.id}
                            target="_blank"
                            href={child.externalLink}
                            rel="noreferrer"
                          >
                            {child.title}
                          </a>
                        ) : (
                          <NavLink
                            key={child.id}
                            className={({ isActive }) =>
                              (isActive ? "text-skygreen font-semibold" : "") +
                              " hover:text-skygreen"
                            }
                            to={child.navLink}
                          >
                            {child.title}
                          </NavLink>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    (isActive ? "text-skygreen font-semibold" : "") +
                    "hover:text-skygreen text-xl"
                  }
                  to={route.navLink}
                  onClick={() => {
                    if (
                      matchRoutes([{ path: route.navLink }], location) == null
                    ) {
                      setOpen(false);
                    }
                  }}
                >
                  {route.title}
                </NavLink>
              )}
            </div>
          ))}
          <button
            className="xl:block py-2 px-6 border-[1.5px] tracking-[2px] bg-[#bd00ed1a] font-semibold whitespace-nowrap"
            style={{
              borderImageSlice: 1,
              borderImageSource: "linear-gradient(to left, #7d067f, #a50498)",
            }}
            onClick={() => open()}
          >
            {isConnected ? formatAddress(address) : "CONNECT WALLET"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
