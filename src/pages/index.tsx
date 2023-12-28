import ATitle from "@/components/ATitle";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
export default function Home() {
  const [isMobile, setIsMobile] = useState(0);

  const getWindowWidth = () =>
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const handleResize = () => {
    setIsMobile(getWindowWidth());
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentYear = new Date().getFullYear();
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
      <div className=" bg-[url(/header.jpg)] w-full mo:h-auto  h-[800px] md:h-[700px] bg-cover">
        <div className="w-container mx-auto flex mo:w-full md:w-full md:px-[30px] mo:px-[30px] ">
          <div className=" flex flex-row items-center justify-between mo:flex-wrap ">
            <div className=" mt-[150px] mo:mt-[50px] ">
              <div className="w-full text-[76px] mo:text-center md:text-[46px] mo:text-[30px] font-bold text-white tracking-[3.8px] mo:tracking-[1.5px] ">
                <div className="w-full">REVOLUTIONIZING</div>
                <div className="mo:mt-[10px] mo:flex justify-center  whitespace-nowrap">
                  BITCOIN&apos;S LAYER 2
                </div>
              </div>
              <div className="gap-[30px] mo:gap-5 mo:mt-[50px] flex mt-[100px] mo:w-full mo:flex-wrap ">
                <button className=" bg-white w-[208px] mo:w-full h-[57px] text-[20px]  mo:text-lg tracking-[2px] mo:tracking-[1.8px] font-bold text-[#000000]  ">
                  Read the Doc
                </button>
                <button className=" border-white border-2 w-[208px] mo:w-full h-[57px] text-[20px]  mo:text-lg tracking-[2px] mo:tracking-[1.8px] font-bold text-white">
                  Bridge assets
                </button>
              </div>
              <div className=" mt-[35px] mo:mt-[30px] text-[20px] mo:text-base  w-full text-white mo:text-center ">
                <div className=" w-full">
                  BitViva responds to the growing need for a decentralized Layer
                  2 network, offering enhanced capabilities for Bitcoin&apos;s
                  ecosystem.
                </div>
              </div>
            </div>
            <div className="mo:flex mo:justify-center w-full ">
              <img
                src="./ear.jpg"
                className="md:w-[400px] w-[500px] mo:mt-[10px] bg-cover flex justify-center "
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[url(/bottomBg.png)] w-full h-auto  ">
        <div className="w-container mx-auto flex mo:w-full md:w-full md:px-[30px] mo:px-[30px] ">
          <div className=" mt-[120px] mo:mt-[60px] w-full ">
            <div className="flex mo:inline md:inline ">
              {isMobile <= 550 ? (
                <>
                  <ATitle title="NATIVE, SEAMLESS&nbsp;" />
                  <ATitle title="AND COMPATIBLE " />
                </>
              ) : (
                <ATitle title="NATIVE, SEAMLESS  AND COMPATIBLE" />
              )}
            </div>
            <div className="grid grid-cols-2 mo:grid-cols-1 justify-between gap-[118px] mo:gap-[30px] mo:mt-[40px]  mt-[120px]">
              {content.map((e, i) => {
                return (
                  <div className={`flex gap-10 mo:gap-5`} key={`content_${i}`}>
                    <img
                      src={e.icon}
                      alt=""
                      className="w-auto h-[98px] md:h-[78px] mo:h-[50px]"
                    />
                    <div className="flex flex-col flex-wrap text-[#FFFFFF]">
                      <div
                        className={`text-4xl md:text-[26px] font-bold mo:text-xl mo:tracking-[1px] tracking-[1.8px]`}
                      >
                        {e.title}
                      </div>
                      <span className="md:w-[280px] mo:text-base mo:w-full  whitespace-normal w-[400px] text-xl md:text-base font-light mt-[30px] mo:mt-[10px] md:mt-[10px]">
                        {e.content}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" mt-[130px] mo:mt-[50px]">
              <ATitle title="HOW DOES IT WORK" />
              <div className="flex justify-center  ">
                <img
                  src="./net.svg"
                  className=" mt-[-150px] mo:mt-[-40px] md:mt-[-100px] w-full"
                />
              </div>
            </div>
            <div className="mt-[130px] mo:mt-[50px]">
              <div className="flex mo:inline md:inline justify-center ">
                {isMobile <= 550 ? (
                  <>
                    <ATitle title="COMPETITIVE&nbsp;" />
                    <ATitle title="LANDSCAPE" />
                  </>
                ) : (
                  <ATitle title="COMPETITIVE LANDSCAPE" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container mo:px-[30px] mt-10 mo:mt-[30px]  mo:w-[auto] w-container md:w-full mx-auto md:px-[30px] ">
          <div className="table-container overflow-auto h-full">
            <table>
              <thead className=" ">
                <tr className="no-border">
                  <th className="">&nbsp;</th>
                  <th>
                    <div className="flex items-center gap-[6px]">
                      <img src={"./bit.svg"} alt={"bit"} />
                      <span style={{ letterSpacing: "1.642px" }}>BitViva</span>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center gap-[10px] ">
                      <img src={"./lightning.svg"} />
                      <div
                        style={{ letterSpacing: "1.642px" }}
                        className="text-[13px]"
                      >
                        <div>Lightning</div>
                        <div>Network</div>
                      </div>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center gap-[10px] ">
                      <img src={"./rootStock.svg"} alt={"bit"} />
                      <span>Rootstock</span>
                    </div>
                  </th>
                  <th>
                    <div
                      style={{ letterSpacing: "1.642px" }}
                      className="flex items-center gap-[10px] "
                    >
                      <img src={"./stacks.svg"} alt={"bit"} />
                      Stacks
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center gap-[6px] ">
                      <img src={"./liquid.svg"} alt={"bit"} />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="">
                  <td className="bg-[#121630]  ">
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className=" mo:w-[150px] w-[100px] bg-[#121630]  "
                    >
                      Native Token
                    </div>
                  </td>
                  <td className="bg-[#2c2e46]  font-medium">
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className="mo:w-[150px] mo: font1 "
                    >
                      BTC
                    </div>
                  </td>
                  <td>
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className=" mo: font1 w-[100px] mo:min-w-0"
                    >
                      n/a
                    </div>
                  </td>
                  <td>
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className="mo:w-[150px] mo: font1"
                    >
                      RBTC
                    </div>
                  </td>
                  <td>
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className="mo:w-[150px]  font1"
                    >
                      STX
                    </div>
                  </td>
                  <td>
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className="mo:w-[150px] font1"
                    >
                      L-BTC
                    </div>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ letterSpacing: "1.6px" }}
                    className="bg-[#121630]"
                  >
                    <div className="bg-[#121630]">Consensus</div>
                  </td>
                  <td
                    style={{ letterSpacing: "1.6px" }}
                    className="bg-[#2c2e46]"
                  >
                    Ethereum PoS
                  </td>
                  <td style={{ letterSpacing: "1.6px" }}>n/a</td>
                  <td style={{ letterSpacing: "1.6px" }}>PoW</td>
                  <td style={{ letterSpacing: "1.6px" }}>PoT</td>
                  <td style={{ letterSpacing: "1.6px" }}>Consortium</td>
                </tr>
                <tr>
                  <td
                    style={{ letterSpacing: "1.6px" }}
                    className="bg-[#121630]"
                  >
                    <div className="bg-[#121630]">VM/Smart Contract</div>
                  </td>
                  <td
                    style={{ letterSpacing: "1.6px" }}
                    className="bg-[#2c2e46]  "
                  >
                    EVM Solidity
                  </td>
                  <td style={{ letterSpacing: "1.6px" }}>No</td>
                  <td style={{ letterSpacing: "1.6px" }}>
                    RVM(forked EVM) Solidity
                  </td>
                  <td style={{ letterSpacing: "1.6px" }} className="">
                    Stacks VM Clarity
                  </td>
                  <td style={{ letterSpacing: "1.6px" }}>Elements Core C++</td>
                </tr>
                <tr>
                  <td
                    style={{ letterSpacing: "1.6px" }}
                    className="bg-[#121630]"
                  >
                    <div className="bg-[#121630]">Two-way Peg</div>
                  </td>
                  <td className="bg-[#2c2e46] ">
                    Decentralized Nodes Taproot Schnorr
                  </td>
                  <td style={{ letterSpacing: "1.6px" }}>RSMC HTLC</td>
                  <td style={{ letterSpacing: "1.6px" }}>
                    Federated 8 of 15 multisia
                  </td>
                  <td style={{ letterSpacing: "1.6px" }}>
                    Collateral-based threshold signature
                  </td>
                  <td style={{ letterSpacing: "1.6px" }}>
                    Federated 11 of 15 multisia
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ letterSpacing: "1.6px" }}
                    className="bg-[#121630]"
                  >
                    <div className="">Asset lssuance</div>
                  </td>
                  <td className="bg-[#2c2e46]">Yes</td>
                  <td style={{ letterSpacing: "1.6px" }}>No</td>
                  <td style={{ letterSpacing: "1.6px" }}>Yes</td>
                  <td style={{ letterSpacing: "1.6px" }}>Yes</td>
                  <td style={{ letterSpacing: "1.6px" }}>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" mt-[130px] mo:mt-[73px]  w-container mx-auto  mo:w-[auto] mo:mx-[30px] md:w-full md:px-[30px] ">
          <div className=" ">
            <ATitle title=" STAY TUNED" />
            <div className="mo:mt-[-40px] flex justify-center w-full m-auto">
              {isMobile <= 900 ? (
                <img className=" mt-[78px] bg-cover" src="./stayTuned_mo.svg" />
              ) : (
                <img className=" mt-[78px]  bg-cover" src="./stayTuned.svg" />
              )}
            </div>
            <div className=" mt-[133px] mo:mt-[50px]">
              <ATitle title=" NEED MORE INFO?" />
            </div>
            <div className=" mt-10 flex justify-center">
              <div className="flex  flex-col text-center mo:text-base mo:text-center tracking-[2px] mo:tracking-[1.6px] text-xl font-light text-[#FFFFFF]">
                <span className="">
                  More docs will be available when the Testnet launches in
                  coming weeks.
                </span>
                <span>In the meantime, join our Discord to learn more.</span>
              </div>
            </div>
            <div className=" mt-20 mo:mt-10 flex justify-center  ">
              <button
                style={{ letterSpacing: "2px" }}
                className=" bg-[#FFFFFF] text-[#000000] mo:w-full tracking-[2px] mo:tracking-[1.4px] mo:text-sm w-auto px-[32px] h-[57px] mo:h-[42px] text-xl font-light  "
              >
                JOIN BITVIVA DISCORD
              </button>
            </div>
          </div>
        </div>
        <div className="mo:mt-[50px]  flex justify-center mo:text-[10px] mt-[120px] mo:h-[68px]  tracking-[1.6px] mo:tracking-[1px] bg-[#000000] h-[68px] font-light items-center text-[#FFFFFF]">
          © {currentYear} BitViva Network – All rights reserved
        </div>
      </div>
    </div>
  );
}
