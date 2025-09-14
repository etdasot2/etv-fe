'use client';

import { ChevronRight, Copy, Settings, Settings2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { checkBalance, getProfileDetails, checkBalanceUSDCBEP20, checkBalanceUSDCERC20 } from '@/lib/api'; // Import the API function

import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';
import { useInfoModal } from '@/context/InfoModalContext';
import { useRouter } from 'next/navigation';
import { formatUsername } from '@/utils/formatUsername';
import { MEMBER_POINT_ICON, RECHARGE_AND_WITHDRAW_ICON, UNRELEASED_POINST_ICON } from '../custom-icons';
import { formatWithDecimalsNumber } from '@/utils/formatDecmials';
import { useLoading } from '@/context/LoadingContext';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

interface ProfileDetailsData {
  user: any;
  balance: {
    task: string;
    vault: string;
    withdrawal: string;
  };
}

export default function ProfileDetails() {
  const [profileData, setProfileData] = useState<ProfileDetailsData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
  const { setInfoText } = useInfoModal();
  const router = useRouter();
  const { setGlobalLoading } = useLoading();

  // Fetch profile details on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setGlobalLoading(true)
      try {
        const data = await getProfileDetails(); // Call the API to get profile details
        setProfileData(data);
      } catch (error: any) {
        console.error('Error fetching profile details:', error.message);
      } finally {
        setIsLoading(false); // Stop the loading indicator
        setGlobalLoading(false)
      }
    };

    fetchData();
  }, []);



  useEffect(() => {
    // Initiate a one-time background request to check USDT balance
    const checkUSDTBalance = async () => {
      try {
          await checkBalance(); // Call checkBalance function 
        // console.log('Balance check data:', balanceData); // Optionally handle balance data here
      } catch (error) {
        console.error('Error checking USDT balance:', error);
      }
    };
    const checkUSDCBalanceBEP20 = async () => {
      try {
        await checkBalanceUSDCBEP20(); // Call checkBalanceUSDCBEP20 function
      } catch (error) {
        console.error('Error checking USDC balance:', error);
      }
    };
    const checkUSDCBalanceERC20 = async () => {
      try {
        await checkBalanceUSDCERC20(); // Call checkBalanceUSDCERC20 function
      } catch (error) {
        console.error('Error checking USDC balance:', error);
      }
    };

    // Invoke the function immediately after component mounts
    checkUSDTBalance();
    checkUSDCBalanceBEP20();
    checkUSDCBalanceERC20();
  }, []); // Empty dependency array ensures this runs only once

  const handleCopyUrl = (text: string) => {
    setInfoText(t('global.copySuccess'));
    navigator.clipboard.writeText(text).then(() => {
    });
  }

  return (
    <div className=" pt-[50px]  p-4">
      <div className="flex items-center mb-4">
  
  <div className="relative w-14 h-14 bg-black border border-[#805c33] rounded-full overflow-hidden mr-4 items-center flex">
    <Image
      src={  '/assets/default-avatar (1).png'} // Display avatar if available
      alt="Profile Picture"
      layout="fill"
      objectFit="cover"
      className="w-full h-full "
    />
  </div>
  <div className="flex-grow">
    <h1 className="font-medium text-[20px] font-sora">
      {profileData?.user.username || ''}
    </h1>
    <div className="flex items-center text-gray-400">
      <span className="text-[12px] text-[#ababb3] font-sora font-medium">
        {`ID: ${profileData?.user?.uuid || ''}`}
      </span>
      <Copy className="w-3 h-3 ml-2 cursor-pointer text-[#eebc7a]" 
        onClick={()=>{handleCopyUrl(profileData?.user?.uuid)}}
      />
    </div>
  </div>
  <Link href="/profile/details" className="flex items-center cursor-default">
  {profileData?.user?.vipLevel !== undefined && (
      <div className="flex flex-col items-center justify-center">
        {profileData?.user?.vipLevel ? (
          <img src={`/vip-icons/music/vip${profileData?.user?.vipLevel}.png`} className="w-[45px] h-[45px]" />
        ) : (
          <img src={`/vip-icons/vip0.png`} className="w-[36px] h-[36px] opacity-[1]" />
        )}
        {/* <span className="font-semibold text-[14px] font-sora mt-0 uppercase">{`vip${profileData?.user?.vipLevel}`}</span> */}
      </div>
    )}

    {profileData?.user?.vipLevel !== undefined && (
      <div className="flex flex-col items-center justify-center">
        {profileData?.user?.vipLevel ? (
          <img src={`/vip-icons/movie/vip${profileData?.user?.vipLevel}.png`} className="w-[45px] h-[45px]" />
        ) : (
          <img src={`/vip-icons/vip0.png`} className="w-[36px] h-[36px] opacity-[1]" />
        )}
        {/* <span className="font-semibold text-[14px] font-sora mt-0 uppercase">{`vip${profileData?.user?.vipLevel}`}</span> */}
      </div>
    )}
    <ChevronRight className="w-5 h-5 ml-1" />
  </Link>

</div>
 
{/* Balance Information */}
<div className=" rounded-lg p-4 mb-4 w-full mt-6 relative "
>
 
  <div className="flex justify-between w-full relative z-10 mt-2">
    <Link href="/user/wallet" className="text-center w-[33.333%]">
      <p className="text-[18px] font-semibold text-[#936616] font-sora  flex items-center justify-center">
        {profileData?.balance?.withdrawal && Number(profileData?.balance?.withdrawal).toFixed(1) || '0.0'}
        <ChevronRight className="w-4 h-4 " />
      </p>
      <p className="text-[12px] font-sora mt-1 text-[#936616] leading-[1.2]">{t('profile.rechargeAndWithdraw')}</p>
    </Link>
    <Link href="/user/wallet/unreleased" className="text-center w-[33.333%] ">
      <p className="text-[18px] font-semibold text-[#936616] font-sora  flex items-center justify-center">
        {profileData?.balance?.vault && Number(profileData?.balance?.vault).toFixed(1) || '0.0'} 
        <ChevronRight className="w-4 h-4 " />
      </p>
      <p className="text-[12px] font-sora mt-1 text-[#936616] leading-[1.2]">{t('profile.unreleasedPoint')}</p>
    </Link>
    <Link href="/user/wallet/memberPoint" className="text-center w-[33.333%]">
      <p className="text-[18px] font-semibold text-[#936616] font-sora  flex items-center justify-center">
        {profileData?.balance?.task && Number(profileData?.balance?.task).toFixed(1) || '0.0'}
        <ChevronRight className="w-4 h-4 " />

      </p>
      <p className="text-[12px] font-sora mt-1 text-[#936616] leading-[1.2]">{t('profile.memberPoint')}</p>
    </Link>
  </div>
  <div className="w-full h-full absolute top-0 left-0"
  
  
  style={{
    background:'url(/assets/bg-assets.png) no-repeat',
    backgroundSize:'100% 100%' ,
    // filter:'invert(75%) sepia(100%) saturate(500%) hue-rotate(-50deg)'
  }}
  ></div>
</div> 
 
</div>
  );
}
