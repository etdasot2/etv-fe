'use client'
import React from 'react'
import MyWalletOverview from '@/components/wallet/TotalAssets'
import FundsRecords from '@/components/wallet/Records'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next'
import AnimationPage from '@/components/AnimationPage'


const RechargeWithdrawPageAlt: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('wallet.title')}
        back={true}
      />



        <div className="">

      <AnimationPage
        direction='top'
      >
          <div className='p-4'>

          <MyWalletOverview />
          </div>

          </AnimationPage>
          <FundsRecords />

        </div>
    </div>
  )
}

export default RechargeWithdrawPageAlt