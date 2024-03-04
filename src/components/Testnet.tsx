import Icon from "@/images";
import { DivBox, Wrapper } from "./StyleButton";

const Testnet = () => {
  return (
    <>
      <img src="./IconLine1.svg" className=" absolute  right-[100px]" />
      <div className="bg-[url(/IconDiv.png)] bg-cover object-cover bg-repeat h-[100px]  flex items-center  ">
        {/* <div className="text-white ">{"//"}</div> */}
        <div className=" font-le text-[42px] font-medium  text-white ml-[203px]">
          BitcoinZK Testnet is LIVE.
        </div>
      </div>

      {/* <div className="text-white ">{"//"}</div> */}
      <div
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
        <div className="  bg-[url(/IconDiv.png)] bg-cover object-cover bg-repeat h-[100px]  flex items-center ">
          <div className=" flex-col  ml-[203px] ">
            <div className=" font-le text-2xl font-light text-white  ">
              We are glad to announce our Maxwell testnet with key features and
              components
            </div>
            <div className=" font-le text-2xl font-light text-white  ">
              ready for open test, user demo and bug hunting, etc.
            </div>
          </div>
        </div>
      </div>
      <div className="  bg-[url(/IconBG1.svg)] bg-cover object-cover bg-repeat h-[100px]  flex items-center justify-center ">
        <div className=" font-le text-2xl  text-white font-light  ">
          <div className=" flex items-center">
            If you are a BTC user, go to this
            <span className="font-semibold ml-3"> Bridge page </span>
            <div className=" mx-3">
              <Icon name="arrow" />
            </div>
            for testing out
          </div>
          <div className=" flex justify-end">
            asset bridging between L1 and L2.
          </div>
        </div>
      </div>
      <div className="bg-[url(/IconDiv.png)] bg-cover object-cover bg-repeat h-[100px]  flex items-center  ">
        {/* <div className="text-white ">{"//"}</div> */}
        <div className=" font-le text-[24px] font-light  text-white ml-[203px] flex items-center ">
          {"//"}If you are a developer, go to this{" "}
          <span className=" font-semibold ml-3">Build Docs</span>
          <div className=" mx-3">
            <Icon name="arrow" />
          </div>
          for more information.
        </div>
      </div>
    </>
  );
};

export default Testnet;
