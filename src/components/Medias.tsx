import { ReactNode } from "react";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
export const medias: { name: string, link: string, icon: ReactNode }[] = [
    // { name: 'Medium', icon: <FaMedium />, link: 'https://medium.com/@zyrabitcoinzk' },
    { name: 'Substack', icon: <SiSubstack />, link: 'https://substack.com/@bitcoinzkzyra' },
    { name: 'X', icon: <FaXTwitter />, link: 'https://x.com/ZK_ZYRA' },
    { name: 'Telegram', icon: <FaTelegram />, link: 'https://t.me/BitcoinZK_Global' },
]