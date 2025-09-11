'use client'
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import VipMissionAreaPopup from "./VipMissionAreaPopup";
import { useTranslation } from "react-i18next";

interface RouteBackWatchProps {
    title: string;
    back?: boolean;
    border?: boolean;
    right?: ReactNode;
}

const RouteBackWatch: React.FC<RouteBackWatchProps> = ({ title, back, right }) => {
    const { t } = useTranslation();
    const router = useRouter();
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

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w-full h-[40px]"></div>
            <div
                className={`w-full max-w-[435px] px-5   flex items-center pt-1 pb-3 fixed top-0 z-50 transition-all ${isSticky ? "bg-[#0f0f0f] shadow-md" : "bg-transparent"
                    }`}
            >
                <div className={cn("w-full flex items-center relative  mt-2")}>
                    <div
                        className="absolute left-0 top-0 cursor-pointer"
                        onClick={() => {
                            router.back();
                        }}
                    >
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABJQTFRFAAAA////////////////////PlKtOgAAAAZ0Uk5TAEAQv//PMLGTOQAAAKFJREFUeJxjZMADGEclSZYUfI9bUlnxzQVckkxBH/7uxyWpKs+AUxKokYFnAw5JoEbG2w+wS4I08q3D4VpUjaiSaBpRJdE0okiia0SRRNeILImhEVkSQyOSJKZGJElWe3SNSJIiBugaiZVkdsRjLF4H4fUK/kDAG3z4Ax5vlOGPbLzJBH8Cw5s0wVpx5xV82QF/RgJqxW0s/syLDEYlCUkCAFLzQzmZtLZhAAAAAElFTkSuQmCC"
                            className="w-[24px] h-[24px]   opacity-[.5]"
                        />
                    </div>


                    
                    {/* <div className="flex items-center mt-[2px] font-sora text-[15px] font-medium text-white pl-[30px]"
                        onClick={() => { setIsOpen(!isOpen) }}
                    >   
                        <div className="flex items-center">
                     <img src={`/vip-icons/vip0.png`} className="w-[20px] h-[20px] mr-1  " />

                            VIP0 Mission Area {'(0/2)'}
                        </div>
                        

                        <ChevronDown
                            size={18}
                            className={cn(
                                "mt-0 ml-[2px] transition-transform duration-200  transform  filter drop-shadow-lg",
                                isOpen && "transform rotate-180"

                            )}
                        /></div> */}
                </div>
            </div>

            {/* <VipMissionAreaPopup 
                isOpen={isOpen}
                onClose={()=>{setIsOpen(false)}}
                t={t}
            /> */}
        </>

    );
};

export default RouteBackWatch;
