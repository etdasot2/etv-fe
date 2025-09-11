'use client'
import React from 'react'
import MyWalletOverview from '@/components/wallet/TotalAssets'
import FundsRecords from '@/components/wallet/Records'
import BackTitle from '@/components/RouteBack'
import { useTranslation } from 'react-i18next'
import BindingAddressForm from '@/components/address-list/BindingAddressForm'


const RechargeWithdrawPageAlt: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >
      
      <BackTitle
        title={t('addressList.bidingAddress.title')}
        back={true}
      />

      <div className="pl-4 pr-4"> 
        <BindingAddressForm />
      </div>
    </div>
  )
}

export default RechargeWithdrawPageAlt