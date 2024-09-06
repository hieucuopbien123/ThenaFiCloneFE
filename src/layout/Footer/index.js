import React from "react";
import twitter from "src/assets/twitter.webp";
import medium from "src/assets/medium.webp";
import telegram from "src/assets/telegram.webp";
import discord from "src/assets/discord.webp";

const Footer = () => {
  return (
    <>
      <div className="min-[1900px]:py-24 min-[1400px]:py-10 py-0"></div>
      <div style={{ height: "300px" }}></div>
      <div className="w-full z-10 bottom-0 py-5">
        <div className="mx-auto flex items-center flex-row-reverse flex-wrap gap-5">
          <div className="flex gap-3 grow justify-center">
            <a
              href="https://twitter.com/ThenaFi_"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} />
            </a>
            <a
              href="https://medium.com/@ThenaFi"
              target="_blank"
              rel="noreferrer"
            >
              <img src={medium} />
            </a>
            <a
              href="https://discord.com/invite/VMShQt73Ez"
              target="_blank"
              rel="noreferrer"
            >
              <img src={discord} />
            </a>
            <a
              href="https://t.me/+Lr-8OJpzxBo4Yjg0"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} />
            </a>
          </div>
          <p className="grow text-center md:text-xl text-sm">
            Copyright © 2023 Thena. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
