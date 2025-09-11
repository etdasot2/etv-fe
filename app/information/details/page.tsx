'use client'

import React, { Suspense } from 'react'
import BackTitle from '@/components/RouteBack'
import NotificationDetails from '@/components/notification/details/NotificationDetails'
import { useTranslation } from 'react-i18next'

const NotificationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('notificationDetails.title')}
        back={true}
      />

        <Suspense>
            <NotificationDetails />
        </Suspense>

    </div>
  )
}

export default NotificationPage