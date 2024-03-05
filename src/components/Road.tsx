import Icon from "@/images";
import { useState } from "react";

const Road = () => {
  const [isHover, setIsHover] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<any>(null);

  const content = [
    {
      icon: "shield",
      iconHover: "shieldHover",
      title: " ZK 100% BY 100%",
      content:
        "Learn why BitcoinZK insists 100% ZK-Provability and 100% ZK-Verifiability for constructing a full ZK-featured layer2.",
      linkLable: "Learn More",
      link: "",
    },
    {
      icon: "trust",
      iconHover: "trustHover",
      title: "Path to Minimized Trust",
      content:
        "BitcoinZK keeps evolving with the target of minimizing trust assumptions introduced into a bitcoin layer2, benefiting from its modular design and phased implementation path.",
      linkLable: "View Roadmap",
      link: "",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-offset="500"
      data-aos-duration="500"
      className=" mt-20 font-le flex  justify-center mo:mx-10   mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px]"
    >
      <div className=" flex justify-between gap-5  ">
        {content.map((item, index) => {
          return (
            <div
              onMouseEnter={(e) => {
                setCurrentIndex(index);
                setIsHover(true);
              }}
              onMouseLeave={() => {
                setCurrentIndex(null);
                setIsHover(false);
              }}
              key={`box_${index}`}
              className="target transition delay-150  duration-300 ease-in-out bg-white rounded-[20px] w-full  hover:bg-black  hover:text-white "
            >
              <div className="px-10  pb-10">
                <div className=" pt-10">
                  <Icon
                    name={
                      index === currentIndex && isHover
                        ? item.iconHover
                        : item.icon
                    }
                  />
                </div>
                <div className=" mt-[30px] text-[42px] font-semibold  ">
                  {item.title}
                </div>
                <div className=" mt-6 text-xl font-normal leading-[42px] h-[120px] ">
                  {item.content}
                </div>
                <div className="text-[#7622FF] mt-[68px] text-2xl font-medium flex items-center">
                  <span className=" mr-2">{item.linkLable}</span>
                  <Icon name={"arrowN"} color="#7622FF" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Road;
