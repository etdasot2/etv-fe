'use client'
import { getWalletDetails } from '@/lib/api'; 
import React, { useEffect, useState } from 'react' 
import { useRouter } from 'next/navigation';
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';

const MyWalletOverview: React.FC = () => {
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
        const { withdrawal } = await getWalletDetails();
        setTotal(Number(withdrawal));
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
      <div className="bg-[#20201f] rounded-b-[15px] pb-3">
        <div className=" rounded-lg p-4 mb-4 w-full relative h-auto min-h-[80px]"
        >
        
          <div className="flex justify-between w-full relative z-10">
            <div className="flex flex-col items-center justify-center w-full">
                <p className="text-[12px] font-sora mt-1 text-[#936616]">{t('wallet.totalAssets')}(USDT)</p>
                <p className="text-[28px] font-normal text-[#936616] font-sora">{Number(total).toFixed(1)}
                </p>
            </div>
  
          </div>
          <div className="w-full h-full absolute top-0 left-0"
          
          
          style={{
            background:'url(/assets/bg-assets.png) no-repeat',
            backgroundSize:'100% 100%',
            // filter:'invert(75%) sepia(100%) saturate(500%) hue-rotate(-50deg)'
          }}
          ></div>
        </div>
        <div className="w-full items-center justify-around flex">
          <div className="w-auto flex flex-col items-center cursor-default"
            onClick={()=>{
              router.push('/user/wallet/recharge')
            }}
          >
            <img src="/assets/icon1.e03db617.png" className="w-[24px] h-[24px]"/>
            <span className="text-white font-sora text-[12px] font-semibold mt-1">{t('wallet.recharge')}</span>
          </div>
          <div className="w-auto flex flex-col items-center cursor-default"
          onClick={()=>{
            router.push('/user/wallet/withdraw')
          }}
          >
            <img src="/assets/icon2.ae76a411.png" className="w-[24px] h-[24px]"/>
            <span className="text-white font-sora text-[12px] font-semibold mt-1">{t('wallet.withdraw')}</span>
          </div>
          <div className="w-auto flex flex-col items-center cursor-default"
          onClick={()=>{
            router.push('/user/wallet/transfer')
          }}
          >
            <img src="/assets/icon3.1fed2681.png" className="w-[24px] h-[24px]"/>
            <span className="text-white font-sora text-[12px] font-semibold mt-1">{t('wallet.transfer')}</span>
          </div>
          <div className="w-auto flex flex-col items-center cursor-default"
          onClick={()=>{
            router.push('/user/wallet/addressList')
          }}
          >
            <img src="/assets/icon8.1fev2681.png" className="w-[24px] h-[24px]"/>
            <span className="text-white font-sora text-[12px] font-semibold mt-1">{t('wallet.addresses')}</span>
          </div>
        </div>

        
      </div>
      

      {isLoading && <DefaultLoading />}
    </>
  )
}

export default MyWalletOverview;