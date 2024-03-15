import Icon from "@/images";
import { useCallback, useEffect, useState } from "react";

const Swipe = () => {
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const [lastScrollTime, setLastScrollTime] = useState(0);

  const content = [
    {
      title: "100% ZK-featured",
      img: "IconElectronic",
      content: (
        <>
          <div className=" mt-[54px] font-light text-xl leading-9">
            BitcoinZK is designed to be thoroughly
            <span className="font-bold"> ZK-able</span> to enable a functioning
            system that scale bitcoin’s security and values with minimized trust
            assumption introduced.
          </div>
          <div className=" mt-6 font-light text-xl leading-9">
            100% layer2 behaviors will be
            <span className=" font-bold"> provable</span> by ZK-SANRKS, and 100%
            ZK proofs will be
            <span className=" font-bold">verifiable</span> by the public.
          </div>
          <div className=" font-light text-xl mt-6">
            Don’t trust, just verify.
          </div>
        </>
      ),
    },
    {
      title: "Native BTC Support",
      img: "IconBtc",
      content: (
        <>
          <div className=" mt-[54px] font-light text-xl leading-9 ">
            BitcoinZK supports
            <span className="font-bold"> BTC native gas fee </span>and
            <span className="font-bold"> BTC address AA </span>
            (Account Abstraction) to guarantee smoothier UX and lowered
            onboarding cost for bitcoin users.
          </div>
          <div className=" mt-6 font-light text-xl leading-9">
            Meanwhile, we introduce zkBridge that ensures safe BTC &
            bitcoin-based assets
            <span className=" font-bold">(BRC-20, BRC-420, etc.)</span> bridging
            from the bitcoin layer1.
          </div>
          <div className=" font-light text-xl mt-6">
            Don’t trust, just verify.
          </div>
        </>
      ),
    },
    {
      title: "Full EVM Compatibility",
      img: "IconEvm",
      content: (
        <>
          <div className=" mt-[54px] font-light text-xl leading-9">
            BitcoinZK brings layer2 users full compatibility and capability to
            integrate
            <span className="font-bold"> EVM </span>
            for Turing-complete smart contracts.
          </div>
          <div className=" mt-6 font-light text-xl leading-9">
            This great feature makes it possible for BTC users to get the best
            access ever to EVM-compatible blockchains and their diversed
            <span className=" font-bold"> De-Fi</span> ecosystems.
          </div>
        </>
      ),
    },
    {
      title: "Sovereign & Modular Design",
      img: "IconSovereign",
      content: (
        <>
          <div className=" mt-[54px] font-light text-xl leading-9">
            BitcoinZK is delicately constructed with modular design and phased
            implementation as a
            <span className="font-bold"> Sovereign Layer2 for bitcoin. </span>
          </div>
          <div className=" mt-6 font-light text-xl leading-9">
            This design philosophy offers a practical work-around given
            bitcoin’s incompetence
            <span className=" font-bold"> incompetence </span> to natively
            verify transactions from a layer2, and flexibility that help the
            network to better adapt to changing demands in the long run.
          </div>
        </>
      ),
    },
  ];

  useEffect(() => {
    const textContainer = document.getElementById(
      "inner-container"
    ) as HTMLElement;
    const outerContainer = document.getElementById(
      "outer-container"
    ) as HTMLElement;
    const scrollInterval = 1000;
    textContainer.addEventListener("wheel", handleScroll);

    if (currentIndex === 3) {
      textContainer.addEventListener("wheel", handleScroll);
    }

    function handleScroll(event: { preventDefault: () => void; deltaY: any }) {
      event.preventDefault();

      const now = new Date().getTime();
      if (now - lastScrollTime < scrollInterval) {
        return;
      }

      const deltaY = event.deltaY;
      let newIndex;
      if (deltaY > 0 && currentIndex < content.length - 1) {
        newIndex = currentIndex + 1;
        textContainer.style.overflowY = "auto";
      } else if (deltaY < 0 && currentIndex > 0) {
        newIndex = currentIndex - 1;
        textContainer.style.overflowY = "auto";
      } else {
        outerContainer.style.overflowY = "auto";
        textContainer.style.overflowY = "hidden";

        if (currentIndex === content.length - 1 || currentIndex === 0) {
          if (currentIndex === 0 && deltaY < 0) {
            textContainer.addEventListener("wheel", handleScroll);
          }
          textContainer.removeEventListener("wheel", handleScroll);
        }
        return;
      }

      setCurrentIndex(newIndex);
      setLastScrollTime(now);
    }

    textContainer.addEventListener("wheel", handleScroll);

    return () => {
      textContainer.removeEventListener("wheel", handleScroll);
    };
  }, [content.length, currentIndex, lastScrollTime]);

  const maxSlides = content.length;

  const onNext = useCallback(() => {
    if (currentIndex < maxSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, maxSlides]);

  const onPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const onClickTo = useCallback((i: number) => {
    setCurrentIndex(i);
  }, []);

  return (
    <div className="text-container over" id="inner-container">
      <div
        key={`slider${currentIndex}`}
        style={{ scrollSnapType: "y mandatory" }}
        className="!flex split-section"
      >
        <div
          style={{ scrollSnapAlign: "start" }}
          className="bg-[#7622FF] w-[40%] flex justify-center items-center py-[110px] ecosystem-left"
        >
          <div className="">
            <div className="bg-[url(/borderLine.svg)] bg-cover object-cover bg-repeat w-[580px] h-[580px]">
              <div className="flex justify-center items-center w-full h-full">
                <img src={`./${content[currentIndex].img}.svg`} alt="Icon" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ scrollSnapAlign: "start" }}
          className="bg-[#000000] w-[60%] font-le text-white diagram-right"
        >
          <div className=" flex justify-end flex-wrap  items-center mt-[60px] mr-[60px]  text-sm font-light ">
            <div className=" gap-[10px] flex mr-5">
              <button
                onClick={onPrev}
                disabled={currentIndex === 0}
                className={`${
                  currentIndex === 0 ? "cursor-not-allowed" : " cursor-pointer"
                }`}
              >
                <Icon
                  name={"leftArrow"}
                  color={currentIndex === 0 ? "#333333" : "#7622FF"}
                />
              </button>
              <button
                onClick={onNext}
                className={`${
                  currentIndex + 1 === maxSlides
                    ? "cursor-not-allowed"
                    : " cursor-pointer"
                }`}
                disabled={currentIndex + 1 === maxSlides}
              >
                <Icon
                  name={"rightArrow"}
                  color={currentIndex + 1 === maxSlides ? "#333333" : "#7622FF"}
                />
              </button>
            </div>
            <div className="flex gap-3">
              {[...Array(content.length)].map((_, i) => {
                return (
                  <div
                    key={`num${i}`}
                    onClick={() => onClickTo(i)}
                    className={` rounded-md ${
                      currentIndex === i
                        ? "bg-[#7622FF]"
                        : "border-white border"
                    }  w-[62px] h-[32px] flex items-center justify-center`}
                  >
                    / 0{i + 1}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-end flex-wrap items-center mt-[60px] mr-[60px] text-sm font-light"></div>
          <div className="flex w-full h-full mt-[50px]">
            <div className="flex flex-col mx-[90px] md:mx-[50px]">
              <div className="flex items-center flex-row">
                <Icon name="expand" />
                <span className="ml-3 font-bold text-[48px] md:text-3xl">
                  {content[currentIndex].title}
                </span>
              </div>
              {content[currentIndex].content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swipe;
