import React, { useEffect, useState } from 'react';
import { fetchRevenueStats } from '@/lib/api';
import { useTranslation } from 'react-i18next';
import { formatWithDecimalsNumber } from '@/utils/formatDecmials';

export default function RevenueStats() {
  const { t } = useTranslation();

  const [noPackage, setNoPackage] = useState(false);
  const [revenueData, setRevenueData] = useState({
    packageName: 'VIP0',
    packageIcon: '',
    todayEarnings: 0,
    cumulativeEarnings: 0,
    vipLevel: 0, // New vipLevel state
  });

  useEffect(() => {
    const loadRevenueStats = async () => {
      try {
        const data = await fetchRevenueStats();
        setRevenueData(data);
      } catch (error) {
        console.error('Failed to load revenue stats:', error); 
        setNoPackage(true);
      }
    };

    loadRevenueStats();
  }, []);

  return (
    <div className="rounded-lg p-4"
      style={{
        background: 'url(/assets/lb-a1.png) no-repeat',
        backgroundSize: '100% 100%',
      }}
    >
      <div className="flex items-center mb-2">
        {noPackage &&
        <>
          

          <div className='flex flex-col ml-2'>
            <span className="text-[12px] font-sora font-medium">{t('revenue.currentlevel')}:</span>
          </div>
        </>
        }
        {!noPackage &&
        <>
          {revenueData.packageIcon ? (
            <img src={`/vip-icons/music/vip${revenueData.vipLevel}.png`} className="w-[50px] h-[50px]" />
          ) : (
            <img src={`/vip-icons/music/vip1.png`} className="w-[50px] h-[50px] opacity-[.1]" />
          )}

          <div className='flex flex-col ml-2'>
            <span className="text-[12px] font-sora font-medium">{t('revenue.currentlevel')}:</span>
            <span className="text-base font-semibold text-[#eebc7a]">VIP{revenueData.vipLevel}</span>
          </div>
        </>
        }
      </div>
      <div className="rounded-lg  pt-3  pb-3 flex justify-between gap-1">
        <div className="flex  flex-col w-[50%] text-left bg-[#ffffff29] p-2 rounded-sm">
          <p className="text-[12px] text-[#fff9] font-sora mt-0">{t('revenue.todayEarning')} (USDT)</p>
          <p className="text-[16px] font-normal text-white font-sora">{formatWithDecimalsNumber(revenueData.todayEarnings)}</p>
        </div> 
        <div className="flex  flex-col w-[50%] text-left bg-[#ffffff29] rounded-sm p-2">
          <p className="text-[12px] text-[#fff9] font-sora mt-0">{t('revenue.cumulativeEarning')} (USDT)</p>
          <p className="text-[16px] font-normal text-white font-sora">{formatWithDecimalsNumber(revenueData.cumulativeEarnings)}</p>
        </div>
      </div>
    </div>
  );
}
