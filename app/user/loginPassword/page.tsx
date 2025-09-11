'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import ChangePassword from '@/components/login-password/ChangePassword'
import { useTranslation } from 'react-i18next'

const LoginPasswordPage: React.FC = () => {
  const { t } = useTranslation();


  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >
      
      <BackTitle
        title={t('profile.loginPassword.title')}
        back={true}
      />

      <ChangePassword />
    </div>
  )
}

export default LoginPasswordPage