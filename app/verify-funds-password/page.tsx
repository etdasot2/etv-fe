'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import VerifyFundsPasswordForm from '@/components/verify-funds-password/VerifyForm'
import { useTranslation } from 'react-i18next'

const VefiyFundsPassword: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#121212] min-h-screen text-white"
        >

            <BackTitle
                title={t('verifyFundsPassword.title')}
                back={true}
            />

            <VerifyFundsPasswordForm />
        </div>
    )
}

export default VefiyFundsPassword