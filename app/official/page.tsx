'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import InviteCard from '@/components/invite/InviteCard'
import { useTranslation } from 'react-i18next'

const InviteFriend = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] text-white min-h-screen w-full bg-full h-[100vw]"
      // style={{
      //   backgroundSize: '100% 100%',
      //   background: '#151515'
      // }}
    >
      <BackTitle
        title={t('profile.ofcWeb')}
        back={true}
      />
    

        <iframe src="https://eternovafilms.org" className="w-full h-full flex flex-1 mt-2" />

    </div>
  )
}

export default InviteFriend