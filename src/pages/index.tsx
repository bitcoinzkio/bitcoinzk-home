import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Road from "@/components/Road";
import Testnet from "@/components/Testnet";
import ZkFeatured from "@/components/ZkFeatured";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <Header />
      <Main />
      <ZkFeatured />
      <Testnet />
      <Featured />
      <Road />
      <Footer />
    </div>
  );
}
