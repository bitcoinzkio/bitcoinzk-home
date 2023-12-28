import { FC } from "react";

const ATitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #FFF 32.03%, #085CFF 116.41%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className=" justify-center tracking-[3.2px] mo:uppercase mo:tracking-[1.3px] md:text-[36px] mo:text-[26px] mo:flex-wrap mo:text-center flex bg-gradient-to-b from-white via-gray-50 to-[#085CFF] text-transparent bg-clip-text text-[60px] font-bold "
    >
      {title}
    </div>
  );
};

export default ATitle;
