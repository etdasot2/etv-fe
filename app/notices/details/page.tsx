'use client'

import React, { Suspense } from 'react'
import BackTitle from '@/components/RouteBack'
import TutorialDetails from '@/components/help/details/TutorialDetails'
import { useTranslation } from 'react-i18next'
import NoticeDetails from '@/components/notices/details/NoticeDetails'
import AnimationPage from '@/components/AnimationPage'

const HelpDetailsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#121212] min-h-screen text-white"
    >

      <BackTitle
        title={t('notices.title')}
        back={true}
      />

      <Suspense>

        <AnimationPage
          direction='top'
        >
          <NoticeDetails />
        </AnimationPage>
      </Suspense>
    </div>
  )
}

export default HelpDetailsPage