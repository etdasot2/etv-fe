'use client'
import React, { Suspense } from 'react'
import BackTitle from '@/components/RouteBack'
import ChangeFundsPassword from '@/components/funds-password/ChangeFundsPassword'
import { useTranslation } from 'react-i18next'

const FundingPasswordPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('profile.fundsPassword.title')}
        back={true}
      />

      <Suspense>
        <ChangeFundsPassword />
      </Suspense>
    </div>
  )
}

export default FundingPasswordPage