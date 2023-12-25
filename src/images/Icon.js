import React from "react";
import IconHeader from "./home/header";

export const base = {
  IconHeader,
};

const Icon = ({ name, ...otherProps }) => {
  const I = base[name];
  return I ? <I {...otherProps} /> : null;
};

export default Icon;
