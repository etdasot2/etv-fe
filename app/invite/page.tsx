'use client'
import React from 'react'
import BackTitle from '@/components/RouteBack'
import InviteCard from '@/components/invite/InviteCard'
import { useTranslation } from 'react-i18next'

const InviteFriend = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] text-white min-h-screen w-full bg-full"
      style={{
        backgroundSize: '100% 100%',
        background: '#151515 url(/assets/Group31.3aab5f7f.png) no-repeat top'
      }}
    >
      <BackTitle
        title={t('invite.title')}
        back={true}
      />

      <InviteCard />

    </div>
  )
}

export default InviteFriend