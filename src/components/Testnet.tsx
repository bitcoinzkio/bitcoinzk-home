/* eslint-disable @next/next/no-img-element */
import Icon from "@/images";
import { bridgeUrl, docUrl } from "@/utils/constant";
import { useEffect } from "react";

const Testnet = () => {
  const onLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <img
        src="./IconLine1.svg"
        className=" absolute right-[100px] z-10 mt-[100px]"
        alt=""
      />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="bg-[url(/IconDiv.png)] bg-cover object-cover bg-repeat h-[200px]  flex items-center  "
      >
        <div className=" font-le px-10 h-[80px] text-[58px] items-center font-medium gap-5 text-white flex mo:mx-10  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px]">
          <div className=" text-sm relative top-[-12px]">{"//"}</div>
          <div className=" items-baseline ">
            <span className=" "> BitcoinZK</span>
            <span className=" text-[42px] "> Testnet is LIVE.</span>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" py-[1px]"
        style={{
          borderRadius: "1px",
          backgroundImage:
            "linear-gradient(to left, #000000 80%, transparent 1%), linear-gradient(to left, #000000 80%, transparent 10%), linear-gradient(to top, #000000 40%, transparent 10%), linear-gradient(to top, #000000 1%, transparent 1%)",
          backgroundPosition: "left top, left bottom, left top, right top",
          backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
          backgroundSize: "30px 1px, 30px 1px, 30px 9px, 1px 9px",
        }}
      >
        <div className="bg-[url(/IconDiv.png)] bg-cover object-cover bg-repeat h-[200px]  flex items-center ">
          <div className=" flex-col flex px-10  mo:mx-10  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px] ">
            <div className=" font-le text-2xl font-light text-white  ">
              {"//"} We are glad to announce our Maxwell testnet with key
              features and components
              <div className=" font-le text-2xl font-light text-white ">
                ready for open test, user demo and bug hunting, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" py-[1px]"
        style={{
          borderRadius: "1px",
          backgroundImage:
            "linear-gradient(to left, #000000 80%, transparent 1%), linear-gradient(to left, #000000 80%, transparent 10%), linear-gradient(to top, #000000 40%, transparent 10%), linear-gradient(to top, #000000 1%, transparent 1%)",
          backgroundPosition: "left top, left bottom, left top, right top",
          backgroundRepeat: "repeat-x, repeat-x, repeat-y, repeat-y",
          backgroundSize: "30px 1px, 30px 1px, 30px 9px, 1px 9px",
        }}
      >
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="bg-[url(/prupleBg.png)] bg-cover object-cover bg-repeat h-[200px]  flex items-center justify-end"
        >
          <div className=" w-container mx-auto md:mx-[40px] px-10 ">
            <div className=" font-le text-2xl  text-white font-light flex justify-end   ">
              <div className=" flex items-center">
                {"//"} If you are a BTC user, go to this
                <button
                  onClick={() => onLink(bridgeUrl)}
                  className="font-semibold ml-3"
                >
                  {" "}
                  Bridge page{" "}
                </button>
                <div className=" mx-3">
                  <Icon name="arrowN" />
                </div>
                for testing out
              </div>
            </div>
            <div className="font-le text-2xl  text-white font-light  flex justify-end ">
              asset bridging between L1 and L2.
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="bg-[url(/IconDiv.png)] bg-cover object-cover bg-repeat h-[200px]  flex items-center  "
      >
        <div className=" font-le text-[24px] font-light px-10  text-white  flex items-center  mo:mx-10  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px]">
          {"//"} If you are a developer, go to this{" "}
          <button
            onClick={() => onLink(docUrl)}
            className=" font-semibold ml-3"
          >
            Build Docs
          </button>
          <div className=" mx-3">
            <Icon name="arrowN" />
          </div>
          for more information.
        </div>
      </div>
    </>
  );
};

export default Testnet;
