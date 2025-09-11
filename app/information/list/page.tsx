'use client'

import React, { Suspense } from 'react'
import BackTitle from '@/components/RouteBack'
import NotificationTypeList from '@/components/notification/list/NotificationTypeList'
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

        <Suspense>
            <NotificationTypeList />
        </Suspense>
 


    </div>
  )
}

export default NotificationPage