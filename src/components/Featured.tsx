import Icon from "@/images";

const Featured = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="justify-center mo:mx-10 px-10  mo:flex-wrap mo:w-full  mx-auto w-container md:w-full md:px-[30px]"
    >
      <div className=" font-le font-medium md:text-[55px]  text-[80px] mt-20 flex items-center">
        ZK100% <span className=" font-medium text-[40px] mx-5">/</span> BY100%
      </div>
      <div className="ml-[388px] font-medium text-[80px] md:text-[55px]  flex items-center">
        <Icon name={"right"} />
        <span className=" ml-[30px]">ZK-FEATURED</span>
      </div>
    </div>
  );
};

export default Featured;
