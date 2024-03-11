import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Road from "@/components/Road";
import Testnet from "@/components/Testnet";
import ZkFeatured from "@/components/ZkFeatured";
import Swipe from "@/components/swipe";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 获取鼠标位置的函数
  function handleMouseMove(event) {
    setPosition({ x: window.pageXOffset, y: window.pageYOffset });
  }

  // 添加鼠标移动事件监听器
  useEffect(() => {
    window.addEventListener("scroll", handleMouseMove);

    // 清除事件监听器
    return () => {
      window.removeEventListener("scroll", handleMouseMove);
    };
  }, [position]); // 只在组件挂载和卸载时执行

  console.log("position", position);

  return (
    <div id="outer-container" className="pg-container">
      <div className="mainBg">
        <Header />
        <Main />
      </div>
      <ZkFeatured />
      <Testnet />
      <Featured />

      <Road />
      {/* <Swipe /> */}

      <Footer />
    </div>
  );
}
