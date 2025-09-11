'use client'
import React, { Suspense } from 'react'
import WithdrawForm from '@/components/withdraw/WithdrawForm'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next'

const AssetWithdrawalPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white pb-[50px]"
    >

      <BackTitle
        title={t('withdraw.title')}
        back={true}
      />

      <Suspense>
        <WithdrawForm />
      </Suspense>

    </div>
  )
}

export default AssetWithdrawalPage