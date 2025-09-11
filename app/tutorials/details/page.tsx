'use client'

import React, { Suspense } from 'react'
import BackTitle from '@/components/RouteBack'
import TutorialDetails from '@/components/help/details/TutorialDetails'
import { useTranslation } from 'react-i18next'

const HelpDetailsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#121212] min-h-screen text-white"
    >

      <BackTitle
        title={t('helpDetails.title')}
        back={true}
      />
 
        <Suspense>
            <TutorialDetails />
        </Suspense>
    </div>
  )
}

export default HelpDetailsPage