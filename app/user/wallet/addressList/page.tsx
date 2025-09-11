'use client'

import React, { Suspense } from 'react'
import BackTitle from '@/components/RouteBack' 
// import MyTeamList from '@/components/my-team/MyTeamList'
import { useTranslation } from 'react-i18next'
import ListAddresses from '@/components/address-list/ListAddresses'

const AddressList: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('addressList.title')}
        back={true}
      />

      <Suspense>
        <ListAddresses />
      </Suspense>
    </div>
  )
}

export default AddressList