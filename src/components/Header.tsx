import Icon from "@/images";
import { PoperMenu } from "./Poper";
import { ecosystemMenus } from "@/utils/constant";

const Header = () => {
  return (
    <div className="flex mt-[22px] justify-between px-10  z-20 mo:justify-center mo:mx-10  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px] ">
      <div className="justify-start flex">
        <Icon name={"logo"} />
      </div>
      <div className="flex gap-[50px]">
        <div className={` rounded-[10px] items-center flex bg-[#000000] `}>
          <div className={` mx-[15px] flex items-center gap-2  `}>
            <span className=" text-lg text-white">Docs</span>
            <Icon name={"arrow"} color="white" />
          </div>
        </div>
        <div className=" flex items-center text-lg gap-2 ">
          <span>Ecosystem</span>
          <PoperMenu
            containerClassName={"!w-[350px] mo:!right-[-110px]"}
            menus={ecosystemMenus}
            keys={"text"}
            isShowText={true}
            className="absolute z-[9999]"
          >
            <button className="text-[2rem] mo:text-2xl flex flex-row items-center gap-[6px]">
              <Icon name={"downArrow"} color="black" />
            </button>
          </PoperMenu>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <span>Bridge</span>
          <Icon name={"arrow"} color="black" />
        </div>
        <div>
          <Icon name={"x"} />
        </div>
        <div>
          <Icon name={"tg"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
