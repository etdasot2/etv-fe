'use client'
import { getWalletDetails } from '@/lib/api'; 
import React, { useEffect, useState } from 'react' 
import { useRouter } from 'next/navigation';
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';
import { ARROW_RIGHT, ASSET_DEPOSIT_ICON } from '../custom-icons';
import { formatWithDecimalsNumber } from '@/utils/formatDecmials';

const MemberPointOverview: React.FC = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */

  const [total, setTotal] = useState<number>(0.000);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchBalance = async () => {
      setIsLoading(true);
      try {
        const { task } = await getWalletDetails();
        setTotal(Number(task));
      } catch (error) {
        console.error('Error fetching balance:', error);
      } finally {
        setIsLoading(false)
      }
    };

    fetchBalance();
  }, []);


  return (
    <>
      <div className="p-4 pb-0">
        <div className="bg-[#20201f] rounded-t-[20px] rounded-b-[11px]">

      <div className="rounded-lg p-4   w-full relative h-auto min-h-[75px]">
            <div className="flex justify-between w-full relative z-10">
              <div className="flex flex-col  ">
                <p className="text-[12px] font-sora mt-1 text-[#936616]">{t('withdraw.currentlyAvailableAssets')}(USDT)</p>
                <p className="text-[28px] font-medium text-[#936616] font-sora">{formatWithDecimalsNumber(Number(total))}
                </p>
              </div>
            </div>
            <div className="w-full h-full absolute top-0 left-0"
              style={{
                background: 'url(/assets/bg-assets.png) no-repeat',
                backgroundSize: '100% 100%',
              }}
            ></div> 
          </div>

          <div className=" pl-4 pr-4 min-h-[52px] flex  items-center"
            onClick={()=>{

              router.push("/user/wallet/recharge")
            }}
          >
            <div className="w-full justify-between flex items-center">
               <div className="flex items-center">
                  <img src={ASSET_DEPOSIT_ICON} className="w-[20px] h-[20px]" />
                  <span className="font-sora text-[12px] font-medium ml-1.5">{t('memberPoint.assetDeposit')}</span>
               </div>
               <div>
               <img src={ARROW_RIGHT  } className="w-[8px] h-[12px] pointer-events-none" />
                
                </div>
            </div>
          </div>
          </div>

      </div>

 
    </>
  )
}

export default MemberPointOverview;