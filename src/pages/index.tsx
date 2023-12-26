import Header from "@/components/Header";
import Image from "next/image";
export default function Home() {
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
      <div className=" bg-[url(/header.jpg)] w-full h-[800px] md:h-[700px] bg-cover">
        <div className="w-container mx-auto flex mo:w-full md:w-full md:px-[30px] mo:px-[30px]   ">
          <div className=" flex flex-row items-center justify-between  ">
            <div className=" mt-[150px]">
              <div
                style={{ letterSpacing: "3.8px" }}
                className=" text-[76px] md:text-[46px] font-bold text-white"
              >
                <div>REVOLUTIONIZING</div>
                <div>BITCOIN&apos;S LAYER 2</div>
              </div>
              <div className="gap-[30px] flex mt-[100px] ">
                <button
                  style={{ letterSpacing: "2px" }}
                  className=" bg-white w-[208px] h-[57px] text-[20px] font-bold text-[#000000]  "
                >
                  Read the Doc
                </button>
                <button
                  style={{ letterSpacing: "2px" }}
                  className=" border-white border-2 w-[208px] h-[57px] text-[20px] font-bold text-white"
                >
                  Bridge assets
                </button>
              </div>
              <div className=" mt-[35px] text-[20px]  w-full text-white ">
                <div className=" w-full">
                  BitViva responds to the growing need for a decentralized Layer
                  2 network, offering enhanced capabilities for Bitcoin&apos;s
                  ecosystem.
                </div>
              </div>
            </div>
            <img
              src="./earth.jpg"
              className="md:w-[480px] w-[500px] mt-[-20px] mr-10  "
            />
          </div>
        </div>
      </div>
      <div className=" bg-[url(/bottomBg.png)] w-full h-auto">
        <div className="w-container mx-auto flex mo:w-full md:w-full md:px-[30px] mo:px-[30px]    ">
          <div className=" mt-[120px]   ">
            <div className=" ">
              <span
                style={{
                  letterSpacing: "3.2px",
                  background:
                    "linear-gradient(180deg, #FFF 32.03%, #085CFF 116.41%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className="bg-gradient-to-b md:text-[46px] from-white via-white to-[#085CFF] text-transparent bg-clip-text text-[60px] font-bold"
              >
                NATIVE, SEAMLESS AND COMPATIBLE
              </span>
            </div>
            <div className=" grid grid-cols-2 justify-between gap-[118px]  mt-[120px]    ">
              {content.map((e, i) => {
                return (
                  <div className={`flex gap-10`} key={`content_${i}`}>
                    <img
                      src={e.icon}
                      alt=""
                      className="w-auto h-[98px] md:h-[78px]"
                    />
                    <div className=" flex flex-col flex-wrap text-[#FFFFFF] ">
                      <div
                        style={{ letterSpacing: "1.8px" }}
                        className={` text-4xl md:text-[26px] font-bold  `}
                      >
                        {e.title}
                      </div>
                      <span className="md:w-[330px] w-[400px] text-xl md:text-base font-light mt-[30px] md:mt-[10px]">
                        {e.content}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" mt-[130px]  ">
              <div
                style={{
                  letterSpacing: "3.2px",
                  background:
                    "linear-gradient(180deg, #FFF 32.03%, #085CFF 116.41%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className=" justify-center md:text-[46px] flex bg-gradient-to-b from-white via-gray-50 to-[#085CFF] text-transparent bg-clip-text text-[60px] font-bold "
              >
                HOW DOES IT WORK
              </div>
              <div className=" flex justify-center mt-[100px] ">
                <div
                  style={{ letterSpacing: "1.8px" }}
                  className=" text-[#FFFFFF] w-auto px-8 h-[68px] border md:text-[26px] text-4xl font-light flex items-center justify-center"
                >
                  BITVIVA NETWORK
                </div>
              </div>
              <div className=" flex justify-between mt-[83px] text-[#FFFFFF] ">
                <div className=" mt-[100px] mr-11">
                  <div
                    style={{ letterSpacing: "1.8px" }}
                    className=" w-auto px-8 h-[68px] border text-4xl md:text-[26px]  font-light flex items-center justify-center"
                  >
                    ASSETS
                  </div>
                </div>
                <img src="./line.png" className="md:w-[400px] w-[600px]" />
                <div
                  style={{ letterSpacing: "1.8px" }}
                  className=" w-auto px-8 h-[68px] border text-4xl md:text-[26px] font-light flex items-center justify-center"
                >
                  TRANSACTIONS
                </div>
              </div>
              <div className="">
                <div className=" h-[500px] relative right-40 mo:right-0 md:right-0 md:top-0 mo:top-0 top-[-130px] mo:hidden md:hidden ">
                  <img src="./btc.svg" />
                </div>
                <div className=" mt-[-450px] md:mt-0 flex justify-between z-[9999px] relative   ">
                  <img src="./btcIcon.png" className=" md:w-[450px] md:mt-7" />
                  <img src="./ethIcon.png" className=" md:w-[450px] md:mt-7" />
                </div>
              </div>
            </div>
            <div className=" mt-[130px]">
              <div
                style={{
                  letterSpacing: "3.2px",
                  background:
                    "linear-gradient(180deg, #FFF 32.03%, #085CFF 116.41%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className=" justify-center md:text-[46px] flex bg-gradient-to-b from-white via-gray-50 to-[#085CFF] text-transparent bg-clip-text text-[60px] font-bold "
              >
                COMPETITIVE LANDSCAPE
              </div>
              <table className=" mt-10">
                <tr className="no-border">
                  <th>&nbsp;</th>
                  <th>
                    <div className="flex items-center gap-[6px]">
                      <img src={"./bit.svg"} alt={"bit"} />
                      <span style={{ letterSpacing: "1.642px" }}>BitViva</span>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center gap-[10px] ">
                      <img src={"./lightning.svg"} alt={"bit"} />
                      <div
                        style={{ letterSpacing: "1.642px" }}
                        className=" text-[13px]"
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
                <tr>
                  <td>
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className=" mo:w-[120px] w-[100px] "
                    >
                      Native Token
                    </div>
                  </td>
                  <td className="bg-[#2c2e46]  font-medium">
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className=" mo: font1 "
                    >
                      BTC
                    </div>
                  </td>
                  <td>
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className=" mo: font1 w-[100px]"
                    >
                      n/a
                    </div>
                  </td>
                  <td>
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className=" mo: font1"
                    >
                      RBTC
                    </div>
                  </td>
                  <td>
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className=" mo: font1"
                    >
                      STX
                    </div>
                  </td>
                  <td>
                    <div
                      style={{ letterSpacing: "1.6px" }}
                      className=" mo: font1"
                    >
                      L-BTC
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ letterSpacing: "1.6px" }}>Consensus</td>
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
                  <td style={{ letterSpacing: "1.6px" }}>VM/Smart Contract</td>
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
                  <td style={{ letterSpacing: "1.6px" }}>Two-way Peg</td>
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
                  <td style={{ letterSpacing: "1.6px" }}>Asset lssuance</td>
                  <td className="bg-[#2c2e46]">Yes</td>
                  <td style={{ letterSpacing: "1.6px" }}>No</td>
                  <td style={{ letterSpacing: "1.6px" }}>Yes</td>
                  <td style={{ letterSpacing: "1.6px" }}>Yes</td>
                  <td style={{ letterSpacing: "1.6px" }}>Yes</td>
                </tr>
              </table>
            </div>
            <div className=" mt-[130px]">
              <div
                style={{
                  letterSpacing: "3.2px",
                  background:
                    "linear-gradient(180deg, #FFF 32.03%, #085CFF 116.41%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className=" justify-center flex bg-gradient-to-b md:text-[46px]  from-white via-gray-50 to-[#085CFF] text-transparent bg-clip-text text-[60px] font-bold "
              >
                STAY TUNED
              </div>
              <img className=" mt-[78px]" src="./stayTuned.svg"></img>
            </div>
            <div className=" mt-[133px]">
              <div
                style={{
                  letterSpacing: "3.2px",
                  background:
                    "linear-gradient(180deg, #FFF 32.03%, #085CFF 116.41%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                className=" justify-center md:text-[46px]  flex bg-gradient-to-b from-white via-gray-50 to-[#085CFF] text-transparent bg-clip-text text-[60px] font-bold "
              >
                NEED MORE INFO?
              </div>
            </div>
            <div className=" mt-10 flex justify-center">
              <div
                style={{ letterSpacing: "2px" }}
                className="flex  flex-col text-center text-xl font-light text-[#FFFFFF]"
              >
                <span className="">
                  More docs will be available when the Testnet launches in
                  coming weeks.
                </span>
                <span>In the meantime, join our Discord to learn more.</span>
              </div>
            </div>
            <div className=" mt-20 flex justify-center ">
              <button
                style={{ letterSpacing: "2px" }}
                className=" bg-[#FFFFFF] text-[#000000] w-auto px-[32px] h-[57px] text-xl font-light  "
              >
                JOIN BITVIVA DISCORD
              </button>
            </div>
          </div>
        </div>
        <div
          style={{ letterSpacing: "1.6px" }}
          className=" flex justify-center mt-[120px] bg-[#000000] h-[68px] font-light items-center text-[#FFFFFF]"
        >
          © {currentYear} BitViva Network – All rights reserved
        </div>
      </div>
    </div>
  );
}
