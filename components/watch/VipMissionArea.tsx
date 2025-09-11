'use client';

import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { USDTIconDefault } from '../icons/global';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import VipMissionAreaPopup from './VipMissionAreaPopup';
import { useRouter } from 'next/navigation';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface VipMissionAreaProps {
    title: string;
    earnedMoney: number;
    purchasedPackages: any[]; // Purchased packages
    allPackages: any[]; // All packages (including non-purchased)
    onMissionChange: (missionName: string, pkgId: string) => void; // Callback to change mission
    selectedMission: string; // Selected mission/package
    source: string;
}

export default function VipMissionArea({
    earnedMoney,
    purchasedPackages,
    allPackages,
    onMissionChange,
    selectedMission,
    source
}: VipMissionAreaProps) {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    // Check if the package is purchased
    const isPurchased = (pkgId: string) => {
        return purchasedPackages.some((p: any) => p.package._id === pkgId);
    };

    // Get the number of likes today for a purchased package
    const getTodayLikes = (pkgId: string) => {
        const purchased = purchasedPackages.find((p: any) => p.package._id === pkgId);
        return purchased ? purchased.likesToday : 0;
    };

    const modifiedSelectedMission = selectedMission.replace('VIP', 'VIP');
    const levelNumber = modifiedSelectedMission.match(/\d+/g)?.[0];



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
                className={`w-full max-w-[435px] px-5   flex items-center pt-1 pb-3 fixed top-0 z-50 transition-all ${isSticky ? "bg-[#0f0f0f] shadow-md" : "bg-transparent"}`}
            >
                <div className={cn("w-full flex items-center relative  mt-2")}>
                    <div
                        className="absolute left-0 top-0 cursor-pointer"
                        onClick={() => {
                            // router.push("/"+source);
                            router.back();

                        }}
                    >
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4BAMAAABaqCYtAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABJQTFRFAAAA////////////////////PlKtOgAAAAZ0Uk5TAEAQv//PMLGTOQAAAKFJREFUeJxjZMADGEclSZYUfI9bUlnxzQVckkxBH/7uxyWpKs+AUxKokYFnAw5JoEbG2w+wS4I08q3D4VpUjaiSaBpRJdE0okiia0SRRNeILImhEVkSQyOSJKZGJElWe3SNSJIiBugaiZVkdsRjLF4H4fUK/kDAG3z4Ax5vlOGPbLzJBH8Cw5s0wVpx5xV82QF/RgJqxW0s/syLDEYlCUkCAFLzQzmZtLZhAAAAAElFTkSuQmCC"
                            className="w-[24px] h-[24px]   opacity-[.5]"
                        />
                    </div>

                    <div className="ml-[30px] font-sora flex items-center text-[12px] font-medium text-white cursor-pointer "
                        onClick={() => { setIsOpen(!isOpen) }}
                    >
                        <img src={`/vip-icons/vip${Number(levelNumber)}.png`} className="w-[20px] h-[20px] mr-1  " />
                        <div className="mt-[4px]">
                            {modifiedSelectedMission}
                        </div>
                        <ChevronDown
                            size={16}
                            className={cn(
                                "mt-1 ml-[2px] transition-transform duration-200  transform  filter drop-shadow-lg",
                                isOpen && "transform rotate-180"
                            )}
                        />
                    </div>
                </div>

                <VipMissionAreaPopup
                    isOpen={isOpen}
                    onClose={() => { setIsOpen(false) }}
                    t={t}

                    purchasedPackages={purchasedPackages}
                    allPackages={allPackages}
                    onMissionChange={onMissionChange}
                    selectedMission={selectedMission}
                />
            </div>
        </>

    );
}
