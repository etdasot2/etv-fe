'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import RenderBell from "./notification/RenderBell";
import { SUPPORT_CHAT_URL } from "@/config";
import { useTranslation } from "react-i18next";
import { HOME_ICON_MAIN, SUPPORT_ICON, WORLD_ICON } from "./custom-icons";

export default function HomeHeader() {
    const { t } = useTranslation();

    const [isSticky, setIsSticky] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition > 0);
    };

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="w-full h-[40px]"></div>
            <div
                className={` max-w-[435px] w-full px-5 flex justify-between items-center pt-1 pb-3 fixed top-0 z-50 transition-all ${isSticky ? "bg-[#101010] shadow-md" : "bg-transparent"
                    }`}
            >
                <div className="w-full flex items-center relative justify-between mt-2">
                    <div className="w-[100px]">
                        <img src="/assets/New Project (7).png" className="w-full object-contain h-full" />
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/app/download"className="cursor-default    rounded-full">
                            <img src="/assets/home-ic.png" className="w-[20px] h-[20px]" />

                        </Link>
                        <RenderBell />
                        <Link href={SUPPORT_CHAT_URL} className="cursor-default  rounded-full">
                            <img src="/assets/support-icon.png" className="w-[20px] h-[20px]" />

                        </Link>
                        <Link href="/my/lang" className="cursor-default  rounded-full">
                            <img src="/assets/lang-icons.png" className="w-[20px] h-[20px]" />

                        </Link>
                        {/* <Link href="/lang" className="cursor-default">
                            <img src="/assets/lang-icons.png" className="w-[20px] h-[20px]" />
                        </Link> */}
                    </div>
                </div>
            </div>
 
        </>

    );
};
