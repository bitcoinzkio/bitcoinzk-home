import Icon from "@/images";
import { bridgeUrl, docUrl, explorerUrl } from "@/utils/constant";

const Footer = () => {
  const onLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div className=" bg-white px-[30px] font-le h-[115px] mt-[50px] flex items-center border-b-[1px]">
        <div className="justify-center  mo:mx-10   mo:flex-wrap mo:w-full  mx-auto w-container md:w-full ">
          <div className=" flex justify-between items-center">
            <Icon name={"bitcoinZk"} />
            <div className="flex gap-[100px] w-[300px]">
              <div className=" text-lg font-medium">MEDIA</div>
              <div className=" text-lg font-medium">LINKS</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white font-le flex h-[141px] px-[30px] ">
        <div className="justify-center mt-[30px] mo:mx-10 text-sm mo:flex-wrap mo:w-full  mx-auto w-container md:w-full ">
          <div className="flex justify-between ">
            The Zero-knowledge based, EVM-compatible Rollup for bitcoin.
            <div className=" flex gap-[100px] w-[300px] text-sm">
              <div className=" flex flex-col gap-[10px] ">
                <span>Twitter</span>
                <span>Discord</span>
              </div>
              <div className=" flex flex-col gap-[10px]  text-left ">
                <button className=" text-left" onClick={() => onLink(docUrl)}>
                  Documentations
                </button>
                <button
                  className=" text-left"
                  onClick={() => onLink(explorerUrl)}
                >
                  L2 Explorer
                </button>
                <button
                  className=" text-left"
                  onClick={() => onLink(bridgeUrl)}
                >
                  Bridge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
