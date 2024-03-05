import { useAutoAnim } from "@/hooks/useAutoAnim";
import classNames from "classnames";
import React, { Fragment, HTMLAttributes, useState } from "react";
import { RxTriangleUp } from "react-icons/rx";
import { useClickAway, useToggle } from "react-use";
import { useRouter } from "next/navigation";

export interface MenuItem {
  topSplit?: boolean;
  icon?: any;
  text: any;
  to?: string;
  content?: string;
  selected?: boolean;
  onClick?: () => void;
  [key: string]: any;
}
export interface PoperMenuProps {
  arrow?: HTMLAttributes<HTMLDivElement>;
  menus: MenuItem[];
  keys?: string;
  containerClassName?: any;
  chooseItem?: (item: any) => void;
  isShowText?: boolean;
  iconClassName?: any;
}
function _PoperMenu(p: HTMLAttributes<HTMLDivElement> & PoperMenuProps) {
  const {
    className,
    containerClassName,
    children,
    arrow = {},
    keys = "text",
    menus,
    isShowText = false,
    chooseItem,
    iconClassName,
    ...other
  } = p;
  const r = useRouter();

  const [show, toggleShow] = useToggle(false);
  const ref = useAutoAnim<HTMLDivElement>("t-side");
  const [active, setActive] = useState("");
  useClickAway(ref, () => show && toggleShow(false));

  const onClickItem = (item: MenuItem) => {
    setActive(item.text);
    typeof chooseItem === "function" && chooseItem(item);
    if (item.onClick) {
      item.onClick();
    }
    toggleShow();
  };

  return (
    <div
      {...other}
      style={{ position: "relative" }}
      className={classNames(className)}
      ref={ref}
    >
      <div
        className="flex  "
        onClick={(e) => {
          toggleShow();
        }}
      >
        {children}
      </div>
      {show && menus.length > 0 && (
        <div
          data-aos="fade-down"
          style={{ filter: "drop-shadow(0 0 15px rgba(0, 0, 0, 0.2))" }}
          className={classNames(
            "absolute w-[13.75rem] top-full right-[-115px] mo:right-[-1rem]",
            containerClassName
          )}
        >
          <RxTriangleUp
            className={classNames(
              "absolute text-white text-2xl right-0 top-[-2px] hidden mo:block",
              iconClassName
            )}
          />

          <div
            data-aos="flip-up"
            className="py-[.625rem] mo:py-[.375rem] w-full bg-white mt-[.625rem] mo:mt-[.625rem] rounded-2xl z-10 relative"
          >
            {menus.map((item, i) => (
              <Fragment key={`poper_menu_item${i}`}>
                {item.topSplit && i > 0 && (
                  <div className="h-[1px] my-[.625rem] mo:my-[2px] mx-4 bg-[#eeeeee]" />
                )}
                <div
                  className={classNames(
                    "flex items-center mx-3 py-4 mo:py-[.875rem] px-4 text-black hover:text-green-2 cursor-pointer",
                    {
                      "bg-[#F5F5F5]  rounded-lg": item.text === active,
                    }
                  )}
                  onClick={() =>
                    !item.to ? onClickItem(item) : r.push(item.to)
                  }
                >
                  {!!item.icon && (
                    <div className="text-xl mo:text-2xl">{item.icon}</div>
                  )}
                  <div className=" flex flex-col">
                    <div className=" text-sm font-bold  font-ns mo:text-base mo:font-normal">
                      {item[keys]}
                    </div>
                    <div className="w-auto text-xs font-ns ">
                      {item.content}
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export const PoperMenu = React.memo(_PoperMenu);
