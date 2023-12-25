import Header from "@/components/Header";
export default function Home() {
  const content = [
    {
      icon: "./btc.png",
      title: "BTC as Native Token",
      content:
        "Expanding the financial applications of Bitcoin network assets such as BTC and Brc20.",
    },
    {
      icon: "./gas.png",
      title: "BTC as Gas Fee",
      content:
        "Utilize BTC as gas fee, enabling it to capture the network's value.",
    },
    {
      icon: "./evm.png",
      title: "EVM Compatible",
      content:
        "Full compatibility with EVM, ensuring a low barrier of entry for existing developers.",
    },
    {
      icon: "./asset.png",
      title: "Asset Security",
      content:
        "A secure technical architecture that guarantees the safety of L2 assets.",
    },
  ];
  return (
    <div>
      <Header />
      <div className=" bg-[url(/topBg.png)] w-full h-[824px]">
        <div className="w-container mx-auto flex mo:w-full md:w-full md:px-[30px] mo:px-[30px] justify-center">
          <div className=" flex flex-row items-center ">
            <div>
              <span className=" text-[76px] mo:text-[36px]">
                REVOLUTIONIZING BITCOIN&apos;S LAYER 2
              </span>
              <div className="gap-[30px] flex mt-[100px]">
                <button className=" bg-white w-[208px] h-[57px] text-[20px] font-bold text-[#000000] ">
                  Read the Doc
                </button>
                <button className=" border-white border w-[208px] h-[57px] text-[20px] font-bold text-white">
                  Bridge assets
                </button>
              </div>
              <div className=" mt-[35px] text-[20px]  w-full">
                BitViva responds to the growing need for a decentralized Layer 2
                network, offering enhanced capabilities for Bitcoin&apos;s
                ecosystem.
              </div>
            </div>
            <img src={"./earth.png"} alt="" />
          </div>
        </div>
      </div>
      <div className=" bg-[url(/bottomBg.png)] w-full h-[1000px]">
        <div className="w-container mx-auto flex mo:w-full md:w-full md:px-[30px] mo:px-[30px] ">
          <div className=" mt-[120px] justify-center ">
            <span className=" bg-gradient-to-b from-[#FFFFFF] to-[#085CFF] text-transparent bg-clip-text text-[64px] font-bold ">
              Native, seamless and compatible
            </span>
            <div className="grid grid-cols-2 gap-[118px] mt-[120px] ">
              {content.map((e, i) => {
                return (
                  <div
                    className="flex gap-10 items-center  "
                    key={`content_${i}`}
                  >
                    <img src={e.icon} />
                    <div className=" flex flex-col ">
                      <span> {e.title}</span>
                      <span> {e.content}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
