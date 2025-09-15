'use client'

import React from 'react'
import BackTitle from '@/components/RouteBack'
import ListTutorials from '@/components/help/ListTutorials'
import { useTranslation } from 'react-i18next'
import AnimationPage from '@/components/AnimationPage'

const HelpCenterPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#151515] min-h-screen text-white"
    >

      <BackTitle
        title={t('help.title')}
        back={true}
      />

<AnimationPage
        direction='top'
      >

        <ListTutorials />
      </AnimationPage>
    </div>
  )
}

export default HelpCenterPage