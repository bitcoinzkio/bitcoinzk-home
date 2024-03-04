import Featured from "@/components/Featured";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Testnet from "@/components/Testnet";
import ZkFeatured from "@/components/ZkFeatured";
import { useRef } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <ZkFeatured />
      <Testnet />
      <Featured />
    </div>
  );
}
