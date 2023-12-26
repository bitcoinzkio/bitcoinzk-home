import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
const Header: FC<{}> = ({}) => {
  const [isMobile, setIsMobile] = useState(false);
  const r = useRouter();

  const getWindowWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const handleResize = () => {
    setIsMobile(getWindowWidth() <= 900);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="  bg-[url(/headerBg.png)] h-20 flex items-center ">
        <div className=" w-container mx-auto flex mo:w-full md:w-full md:px-[30px] mo:px-[30px]  justify-between  ">
          <div className="  bg-[url(/logo.png)] bg-no-repeat w-full h-[26px] " />
          <div className="  flex flex-row  items-center justify-between gap-10 md:mr-10 mo:mr-10 text-white">
            <button>Bridge</button>
            <button>Testnet</button>
            <img src={"/x.png"} alt="" className="bg-no-repeat w-[16px] h-4" />
            <img
              src={"/brand.png"}
              alt=""
              className="bg-no-repeat w-[16px] h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
