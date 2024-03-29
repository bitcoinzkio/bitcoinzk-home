import Icon from "@/images";
import { bridgeUrl, docUrl } from "@/utils/constant";
import { useEffect } from "react";

const Main = () => {
  const carouselText = [
    { text: "Zero-knowledge" },
    { text: "Proof-of-liquidity" },
  ];

  async function typeSentence(sentence: string, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
      await waitForMs(delay);
      document.getElementById("bitTitle")?.append(letters[i]);
      i++;
    }
    return;
  }

  async function deleteSentence() {
    const ht = document.getElementById("bitTitle") as HTMLElement;

    const sentence = ht?.innerHTML;
    const letters = sentence.split("");
    while (letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      ht.innerHTML = letters.join("");
    }
  }

  async function carousel(carouselList: { text: string }[]) {
    var i = 0;
    while (true) {
      await typeSentence(carouselList[i].text);
      await waitForMs(2000);
      await deleteSentence();
      await waitForMs(1000);
      i++;
      if (i >= carouselList.length) {
        i = 0;
      }
    }
  }

  function waitForMs(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    carousel(carouselText);
    return () => {
      document.getElementById("bitTitle")?.remove();
    };
  }, []);

  const dealPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const onLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div data-aos="fade-up" className=" aos-init aos-animate  ">
      <div className={"mx-auto w-container px-10 md:w-full md:px-[30px]  "}>
        <div className="flex  justify-center pt-[140px] ">
          <div className=" flex flex-col   ">
            <div className="flex items-center gap-5 font-hn">
              <span className=" text-[#7622FF] text-[80px] md:text-[45px] bmd:text-[36px] font-bold ">
                ZK LAYER2
              </span>
              <Icon name={"flow"} />
              <div className="text-[#FDA805]  flex items-center text-[80px] md:text-[45px]  bmd:text-[36px] font-bold  bg-[url(/IconBorderY.svg)]  w-[226px] h-[177px]  bg-cover object-cover bg-repeat ">
                BITCOIN
              </div>
            </div>
            <div className="">
              <span
                id="bitTitle"
                className="font-hn font-bold text-[80px] md:text-[45px] leading-[80px] bmd:text-[36px]"
              ></span>
              <span className="input-cursor"></span>
            </div>
            <div className="flex justify-center gap-5 mt-[58px] font-le ">
              <button
                onClick={() => onLink(docUrl)}
                className="text-xl gap-2 font-le bg-[#000000] text-white w-52 h-14 flex items-center justify-center rounded-[10px]"
              >
                <Icon name={"star"} />
                Read Docs.
              </button>
              <button
                onClick={() => onLink(bridgeUrl)}
                className=" text-xl font-le gap-[11px] border-[#7622FF] border text-[#7622FF] w-52 h-14 flex items-center justify-center  rounded-[10px]"
              >
                <Icon name={"jump"} />
                Bridge BTC
              </button>
            </div>
          </div>
          <div className=" mt-[100px] ml-40">
            <img src={"./IconCircle.png"} />
          </div>
        </div>
        <div className="flex justify-between mt-[33px]  ">
          <div className="bg-[url(/IconBorder.svg)] w-[226px] h-[177px]   bg-cover object-cover bg-repeat flex text-center items-center justify-center">
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
              <div className="text-[#7622FF] text-[28px] mt-[6px] font-le">
                $ 20,195,021.<span className="text-[#C5A0ff]">46</span>
              </div>
            </div>
          </div>
          <div className="bg-[url(/IconBorderB.svg)] w-[226px] h-[177px]  bg-cover object-cover bg-repeat flex text-center items-center justify-center">
            <div>
              <div className=" text-base font-le">
                Real-time Bitcoin Deposit
              </div>
              <div className="border w-[200px] my-5 border-black" />
              <div className="flex justify-between">
                <Icon name="nStar" />
                <Icon name="nStar" />
                <Icon name="nStar" />
                <Icon name="nStar" />
                <Icon name="nStar" />
              </div>
              <div className=" text-[28px] mt-[6px]  font-le">
                $ 20,195,021.<span className="text-[#9A9A9A]">46</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
