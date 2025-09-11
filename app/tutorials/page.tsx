'use client'

import React from 'react'
import BackTitle from '@/components/RouteBack'
import ListTutorials from '@/components/help/ListTutorials'
import { useTranslation } from 'react-i18next'

const HelpCenterPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0f0f0f] min-h-screen text-white"
    >

      <BackTitle
        title={t('help.title')}
        back={true}
      />

        <ListTutorials />
    </div>
  )
}

export default HelpCenterPage