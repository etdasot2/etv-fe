'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack' 
import SetFundsPassForm from '@/components/set-funds-password/SetFundsPassForm'
import { useTranslation } from 'react-i18next'

const VefiyFundsPassword: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-[#121212] min-h-screen text-white"
        >

            <BackTitle
                title={t('setFundsPassword.title')}
                back={true}
            />

            <SetFundsPassForm />
        </div>
    )
}

export default VefiyFundsPassword