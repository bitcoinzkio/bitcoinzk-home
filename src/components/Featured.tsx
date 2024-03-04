import Icon from "@/images";

const Featured = () => {
  return (
    <div className="justify-center mo:mx-10  mo:flex-wrap mo:w-full  mx-auto container md:w-full md:px-[30px]">
      <div className=" font-le font-medium  text-[80px] mt-20 flex items-center">
        ZK100% <span className=" font-medium text-[40px] mx-5">/</span> BY100%
      </div>
      <div className="ml-[388px] font-medium text-[80px] flex items-center">
        <Icon name={"right"} />
        <span className=" ml-[30px]">ZK-FEATURED</span>
      </div>
    </div>
  );
};

export default Featured;
