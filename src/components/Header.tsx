import Icon from "@/images";
import { PoperMenu } from "./Poper";
import { bridgeUrl, docUrl, ecosystemMenus } from "@/utils/constant";
import React from "react";

const Header = () => {
  const onLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex pt-[21px]  justify-between  z-20 mo:justify-center mo:mx-10 mo:flex-wrap mo:w-full px-[50px] md:w-full md:px-[30px]">
      <div className="justify-start flex">
        <Icon name={"logo"} />
      </div>
      <div className="flex gap-[50px]">
        <div className={`rounded-[10px] items-center flex bg-[#000000]`}>
          <button
            onClick={() => onLink(docUrl)}
            className={`mx-[15px] flex items-center gap-2`}
          >
            <span className="text-lg text-white">Docs</span>
            <Icon name={"arrow"} color="white" />
          </button>
        </div>
        <div className="flex items-center gap-2 ">
          <PoperMenu
            containerClassName={"!w-[320px] mo:!right-[-110px]"}
            menus={ecosystemMenus}
            keys={"text"}
            isShowText={true}
            className="absolute z-[9999]"
          >
            <button className="text-[2rem] mo:text-2xl flex flex-row items-center gap-[6px]">
              <span className=" text-lg ">Ecosystem</span>
              <Icon name={"downArrow"} color="black" />
            </button>
          </PoperMenu>
        </div>
        <button
          onClick={() => onLink(bridgeUrl)}
          className="flex items-center gap-2 text-lg"
        >
          <span>Bridge</span>
          <Icon name={"arrow"} color="black" />
        </button>
        <div className="flex gap-5">
          <div>
            <Icon name={"x"} />
          </div>
          <div>
            <Icon name={"tg"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
