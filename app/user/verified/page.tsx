'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack' 
import KYCForm from '@/components/profile/kyc/KYCForm'
import { useTranslation } from 'react-i18next'

const VerifiedPage: React.FC = () => { 
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >
 
      <BackTitle
        title={t('profile.kyc.title')}
        back={true}
      />


      <KYCForm />
    </div>
  )
}

export default VerifiedPage