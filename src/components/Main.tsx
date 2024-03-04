import Icon from "@/images";

const Main = () => {
  return (
    <div className="mainBg">
      <div
        className={
          "mx-auto container  md:px-[30px] bg-[url(/IconCloud.svg)] bg-cover object-cover bg-repeat  "
        }
      >
        <div className="flex  justify-center  pt-[140px]">
          <div className=" flex flex-col  ">
            <div className="flex items-center gap-5">
              <span className=" text-[#7622FF] text-[80px] font-bold ">
                ZK LAYER2
              </span>
              <Icon name={"flow"} />
              <div className="text-[#FDA805]  flex items-center text-[80px] font-bold  bg-[url(/IconBorderY.svg)]  w-[226px] h-[177px]  bg-cover object-cover bg-repeat ">
                BITCOIN
              </div>
            </div>
            <div className="text-[80px] font-bold text-center">Zero-knowle</div>
            <div className="flex justify-center gap-5 mt-[58px] ">
              <div className="text-xl gap-2 font-le bg-[#000000] text-white w-52 h-14 flex items-center justify-center rounded-[10px]">
                <Icon name={"star"} />
                Read Docs.
              </div>
              <div className=" text-xl font-le gap-[11px] border-[#7622FF] border text-[#7622FF] w-52 h-14 flex items-center justify-center  rounded-[10px]">
                <Icon name={"jump"} />
                Bridge BTC
              </div>
            </div>
          </div>
          <div className=" mt-[100px] ml-40">
            <img src={"./IconCircle.png"} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-[url(/IconBorder.svg)] w-[226px] h-[177px]  bg-cover object-cover bg-repeat flex text-center items-center justify-center">
            <div>
              <div className="text-[#7622FF] text-lg font-le">
                Real-time TVL
              </div>
              <div className="border border-[#7622FF] w-[200px] my-5" />
              <div className="flex justify-between">
                <Icon name="nStar" color="#7622FF" />
                <Icon name="nStar" color="#7622FF" />
                <Icon name="nStar" color="#7622FF" />
                <Icon name="nStar" color="#7622FF" />
                <Icon name="nStar" color="#7622FF" />
              </div>
              <div className="text-[#7622FF] text-[28px] mt-[6px]">
                $ 20.195.021.46
              </div>
            </div>
          </div>
          <div className="bg-[url(/IconBorderB.svg)] w-[226px] h-[177px]  bg-cover object-cover bg-repeat flex text-center items-center justify-center">
            <div>
              <div className=" text-base font-le">Real-time TVL</div>
              <div className="border w-[200px] my-5" />
              <div className="flex justify-between">
                <Icon name="nStar" />
                <Icon name="nStar" />
                <Icon name="nStar" />
                <Icon name="nStar" />
                <Icon name="nStar" />
              </div>
              <div className=" text-[28px] mt-[6px]">$ 20.195.021.46</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
