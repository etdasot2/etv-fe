'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import ForgetPasswordForm from '@/components/forget-password/ForgetPasswrodForm'
import { useTranslation } from 'react-i18next'

const ForgotPasswordPage: React.FC = () => { 
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('forgetPassword.title')}
        back={true}
      />

      <ForgetPasswordForm />
    </div>
  )
}

export default ForgotPasswordPage