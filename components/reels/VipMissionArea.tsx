'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { USDTIconDefault } from '../icons/global';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import VipMissionAreaPopup from './VipMissionAreaPopup';
import { useInfoModal } from '@/context/InfoModalContext';

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface VipMissionAreaProps {
  title: string;
  earnedMoney: number;
  purchasedPackages: any[]; // Purchased packages
  allPackages: any[]; // All packages (including non-purchased)
  onMissionChange: (missionName: string, pkgId: string) => void; // Callback to change mission
  selectedMission: string; // Selected mission/package
}

export default function VipMissionArea({
  earnedMoney,
  purchasedPackages,
  allPackages,
  onMissionChange,
  selectedMission
}: VipMissionAreaProps) {
  const { t } = useTranslation();
  const { setInfoText } = useInfoModal();

  const [isOpen, setIsOpen] = useState(false);

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

  const stayTunedClick = () => {
    setInfoText(t('global.stayTuned'));
  };

  return (
    <>

      <div className="w-full pt-[50px] flex justify-center items-center  pb-3 absolute top-0 left-0 z-[9999]">
        <div className="w-full flex items-center relative pl-8 mt-2">
          {/* <div
          className="absolute left-0 top-0 cursor-pointer "
          onClick={() => history.back()}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABCCAYAAADuSnCvAAAAAXNSR0IArs4c6QAAAzpJREFUeF7tmruKFUEQhr/yFRQDQQVBFBUzMfC2XlFQEQx8AWM1MRAUxMu6K+rKKt5vYOILmBkJYii+ggaaCN6vaElDH5gd5pzpntMz23uoSU5yZqbqm/qrqqtbsGsGATEeMwkYkFJEGBADMjhJWIRYhFiERBVSk4xJxiRjkokiMNuSUdV5zgYR+TeM4W3d22lSVdV1wH7gA/BYRNxvVldnQFR1DLgHLAN+A8+AQyLyLScinQBR1fXAfWB1yfmnwGEReZ8LlNaBqOpm4BqwtsLpP8AT4IiIfMwBSqtAVHU78ABYMsBZJ58xEXk50kBUdYPPGStrHP0KbBSR1yMLxCdQJ5M1NU66hHoZmBSR7yMJRFV3AQ+BRQEOTgDnRcRFSRZX0hyiqluAu8DyGu9cNEyLyIksKBSMSAZEVbcC14FVATljCpjIRSZFe5MAUdU9wCNgYcAXHwfGc2vIenYPDcSX1ju+Ax3EwyXQqyJyMgDarP1lKCCqusM3XXWl9TNwxcvk16x5G/DixkBUdZ9vuhYEvOdMTqV1kL3RQFTV3bMTcDJZGtBnTInIqQBoWfylCZDdLhcAK2o8+ARc8pHh1ixz4ooCoqoHfJ8RIhO3RnkL/MiEhALPfSP4rp9NQUD8lMuV1pvA4kwcbGKGm9K5KndRRP5WPSAUyF5fJeo60CZGdn3PLeCYiFRWu1ogqnoQuA3M79rylt7nisFREfnZKEIMSAU2VTXJFLlYUu0j3siy63qPN0CKwU9trgvIN+nKbilaYhqz3jTM9SRz4oom36B1z36FW/xS0UB6N0cu7s75lW5Wm1KNyu6gOI9Y/n8B3JTsQr/6n4ueGkdIIVLc3kvIgCjbOWoSyZQSbcwIcRI4O7IjxEKkxAyZp/2qM0VJTqq2oSVTipSYbYgbInI8qTcJHpYUiLMncqPK9SmnR3ajqiAfdxYkZCvTSaZXfbIoyckjpAAldLPbgdgkIq8SRPzQj2gNiJdP6HGIbSLyYmhvEjygVSAeih2YKX8oO1JVPWSyQ3cVkWLHMiug2MHdBMm/s0e0XmU68yTRiwxICaQBMSCDtWURYhFiERJVf0wyJhmTjEkmikDpz/8BE3MOUpH7xFsAAAAASUVORK5CYII="
            className="w-[24px] h-[24px] drop-shadow-xl"
            alt="Back"
          />
        </div> */}
          <div className="absolute right-0 flex items-center top-[-8px]">

            {/* <Popover onOpenChange={setIsOpen} open={isOpen}> */}
            {/* <PopoverTrigger asChild> */}
            <div className="font-sora relative bg-[#00000099]  rounded-l-[12px] pl-3 pr-2 h-[36px] leading-[0] filter drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]  flex items-center text-[12px] font-medium text-white cursor-pointer "
              onClick={() => { setIsOpen(!isOpen) }}
            >
              <img src={`/vip-icons-shorts/vip${Number(levelNumber)}.png`} className="w-[20px] h-[20px] mr-1  " />
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
            
            
            {/* </PopoverTrigger> */}
            {/* <PopoverContent className="w-auto min-w-[200px] rounded-md bg-[#303030] border border-[#fefefe38] p-0 drop-shadow-xl mr-4 relative z-[99999]">
              <div className="py-2">
                {allPackages.map((pkg, index) => {
                  const purchased = isPurchased(pkg._id);
                  const likesToday = purchased ? getTodayLikes(pkg._id) : 0; // 0 for non-purchased packages
                  const displayText = `${pkg.packageName}  (${likesToday}/${pkg.dailyViews})`;
                  const modifiedDisplayText = displayText.replace('VIP', 'VIP');
                  const levelNumber = modifiedDisplayText.match(/\d+/g)?.[0];

                  return (
                    <div
                      key={index}
                      className="px-4 py-1.5 text-[14px] text-white hover:bg-[#ffffff1a] cursor-pointer font-sora flex items-center"
                      onClick={() => {
                        // Check if the selected package starts with the package name
                        if (selectedMission.startsWith(pkg.packageName)) {
                          setIsOpen(false); // Close the dropdown if the active item is clicked again
                        } else {
                          onMissionChange(pkg.packageName, pkg._id); // Trigger mission change
                          setIsOpen(false); // Close the popup after selection
                        }
                      }}
                    >
                      <img src={`/vip-icons/vip${Number(levelNumber)}.png`} className="w-[35px] h-[35px]  " />


                      <div className="ml-2">
                        {modifiedDisplayText}
                      </div>
                    </div>
                  );
                })}
              </div>
            </PopoverContent>
          </Popover> */}
          </div>

          {/* <div className="absolute right-0 top-0 flex mt-[1px] items-center filter drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]">
          <span className="text-white font-sora text-[13px] font-medium flex items-center">
            <USDTIconDefault className="w-[18px] h-[18px] mr-1 mt-[-2px]" />
            {earnedMoney?.toFixed(2)} USDT
          </span>
        </div> */}


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
    </>
  );
}
