import { ReactNode } from "react";
import { FaMedium, FaTelegram, FaXTwitter } from "react-icons/fa6";

export const medias: { name: string, link: string, icon: ReactNode }[] = [
    { name: 'Medium', icon: <FaMedium />, link: 'https://medium.com/@zyrabitcoinzk' },
    { name: 'X', icon: <FaXTwitter />, link: 'https://x.com/ZK_ZYRA' },
    { name: 'Telegram', icon: <FaTelegram />, link: 'https://t.me/BitcoinZK_Global' },
]