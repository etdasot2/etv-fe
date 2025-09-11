'use client'
import { getWalletDetails } from '@/lib/api'; 
import React, { useEffect, useState } from 'react' 
import DefaultLoading from '../loaders/DefaultLoading';
import { useTranslation } from 'react-i18next';

const UnreleasedOverview: React.FC = () => {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */

  const [total, setTotal] = useState<number>(0.000);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchBalance = async () => {
      setIsLoading(true);
      try {
        const { vault } = await getWalletDetails();
        setTotal(Number(vault));
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
      
      <div className="p-4">
        <div className=" rounded-lg p-4  w-full relative h-auto min-h-[80px]"
        >

          <div className="flex justify-between w-full relative z-10">
            <div className="flex flex-col items-center justify-center w-full">
              <p className="text-[14px] font-sora mt-1 text-[#936616]">{t('unreleased.toBeReleased')}(USDT)</p>
              <p className="text-[28px] font-normal text-[#936616] font-sora">{Number(total).toFixed(1)}</p>
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0"


            style={{
              background: 'url(/assets/bg-assets.png) no-repeat',
              backgroundSize: '100% 100%',
              // filter: 'invert(75%) sepia(100%) saturate(500%) hue-rotate(-50deg)'
            }}
          ></div>
        </div>
      </div>


      {isLoading && <DefaultLoading />}
    </>
  )
}

export default UnreleasedOverview;