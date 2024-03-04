import React from "react";
import IconLogo from "@/images/IconLogo";
import IconArrow from "@/images/IconArrow";
import IconDownArrow from "@/images/IconDownArrow";
import IconX from "@/images/IconX";
import IconTg from "@/images/IconTg";
import IconFlow from "@/images/IconFlow";
import IconBG from "@/images/IconBG";
import IconStar from "@/images/IconStar";
import IconJump from "@/images/IconJump";
import IconNstar from "@/images/IconNstar";
import IconExpand from "@/images/IconExpand";
import IconleftArrow from "@/images/IconleftArrow";
import IconRightArrow from "@/images/IconRightArrow";
import IconRight from "@/images/IconRight";
import IconShield from "@/images/IconShield";
import IconShieldHover from "@/images/IconShieldHover";
import IconArrowN from "@/images/IconArrowN";
import IconTrust from "@/images/IconTrust";
import IconTrustHover from "@/images/IconTrustHover";
import IconBitcoinZk from "@/images/IconBitcoinZk";

export const base = {
  logo: IconLogo,
  arrow: IconArrow,
  downArrow: IconDownArrow,
  x: IconX,
  tg: IconTg,
  flow: IconFlow,
  bg: IconBG,
  star: IconStar,
  jump: IconJump,
  nStar: IconNstar,
  expand: IconExpand,
  leftArrow: IconleftArrow,
  rightArrow: IconRightArrow,
  right: IconRight,
  shield: IconShield,
  shieldHover: IconShieldHover,
  arrowN: IconArrowN,
  trust: IconTrust,
  trustHover: IconTrustHover,
  bitcoinZk: IconBitcoinZk,
};

const Icon = ({ name, ...otherProps }) => {
  const I = base[name];
  return I ? <I {...otherProps} /> : null;
};

export default Icon;
