import Icon from "@/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

const ZkFeatured = () => {
  let sliderRef = useRef<any>(null);
  const [current, setCurrent] = useState(0);
  const settings = {
    className: "",
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    draggable: false,
  };
  const content = [
    {
      title: "100% ZK-featured",
      img: <img src="./IconElectronic.svg" />,
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
            <span className=" font-bold">provable</span> by ZK-SANRKS, and 100%
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
      img: <img src="./IconBtc.svg" />,
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
      img: <img src="./IconEvm.svg" />,
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
      img: <img src="./IconSovereign.svg" />,
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
  const maxSlides = content.length;

  console.log("maxSlidesmaxSlides", maxSlides);

  const onNext = () => {
    if (current < maxSlides) {
      setCurrent(current + 1);
      (sliderRef as any).slickGoTo(current + 1);
    }
  };
  const onPrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
      (sliderRef as any).slickGoTo(current - 1);
    }
  };

  const onClickTo = (i: number) => {
    (sliderRef as any).slickGoTo(i);
    setCurrent(i);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className=" mt-10   "
    >
      <Slider
        {...settings}
        ref={(slider: any) => {
          sliderRef = slider;
        }}
      >
        {content.map((item, index) => {
          return (
            <div key={`slider${index}`} className="!flex ">
              <div className=" bg-[#7622FF] w-[50%] flex justify-center items-center  py-[110px]">
                <div className=" ">
                  <div className="bg-[url(/borderLine.svg)] bg-cover object-cover bg-repeat w-[580px] h-[580px] ">
                    <div className="flex justify-center items-center w-full h-full">
                      {item.img}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-[#000000] w-[50%] font-le text-white ">
                <div className=" flex justify-end flex-wrap  items-center mt-[60px] mr-[60px]  text-sm font-light ">
                  <div className=" gap-[10px] flex mr-5">
                    <button
                      onClick={onPrev}
                      disabled={current === 0}
                      className={`${
                        current === 0 ? "cursor-not-allowed" : " cursor-pointer"
                      }`}
                    >
                      <Icon
                        name={"leftArrow"}
                        color={current === 0 ? "#333333" : "#7622FF"}
                      />
                    </button>
                    <button
                      onClick={onNext}
                      className={`${
                        current + 1 === maxSlides
                          ? "cursor-not-allowed"
                          : " cursor-pointer"
                      }`}
                      disabled={current + 1 === maxSlides}
                    >
                      <Icon
                        name={"rightArrow"}
                        color={
                          current + 1 === maxSlides ? "#333333" : "#7622FF"
                        }
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
                            current === i
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

                <div className=" flex w-full h-full mt-[50px]">
                  <div className="flex flex-col mx-[100px] ">
                    <div className=" flex items-center flex-row ">
                      <Icon name={"expand"} />
                      <span className=" ml-3 font-bold text-[40px] md:text-2xl">
                        {item.title}
                      </span>
                    </div>
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default ZkFeatured;
