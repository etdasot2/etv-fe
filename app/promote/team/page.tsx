'use client'

import React from 'react'
import BackTitle from '@/components/RouteBack' 
import MyTeamList from '@/components/my-team/MyTeamList'
import { useTranslation } from 'react-i18next'

const NotificationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('myTeam.title')}
        back={true}
      />

      <MyTeamList />
    </div>
  )
}

export default NotificationPage