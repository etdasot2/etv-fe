'use client'

import React from 'react'
import BackTitle from '@/components/RouteBack'
import ListNotificationCategories from '@/components/notification/ListNotificationCategories'
import { useTranslation } from 'react-i18next'
import BottomBar from '@/components/bottomBar'

const NotificationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('notification.title')}
        back={true}
      />


      <ListNotificationCategories />

    </div>
  )
}

export default NotificationPage