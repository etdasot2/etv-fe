'use client'
import React from 'react'
import TransferForm from '@/components/transfer/TransferForm'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next'

const TransferPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white pb-[50px]"
    >

      <BackTitle
        title={t('transfer.title')}
        back={true}
      />


      <TransferForm />
    </div>
  )
}

export default TransferPage